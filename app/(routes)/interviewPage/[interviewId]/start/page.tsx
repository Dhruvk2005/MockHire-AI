
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useConvex } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import {
  LiveAvatarSession,
  SessionEvent,
  SessionState,
} from "@heygen/liveavatar-web-sdk";

type InterviewQuestion = {
  answer: string;
  question: string;
};

type InterviewData = {
  jobTitle?: string;
  jobDescription?: string;
  InterviewQuestions?: InterviewQuestion[];
  _id: Id<"InterviewSessionTable">;
  userId?: Id<"UserTable">;
};

const Page = () => {
  const { interviewId } = useParams();

  const convex = useConvex();

  const videoRef = useRef<HTMLVideoElement>(null);
  const sessionRef = useRef<LiveAvatarSession | null>(null);

  const [interviewData, setInterviewData] =
    useState<InterviewData | null>(null);

  const [currentQuestion, setCurrentQuestion] =
    useState("");

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [sessionState, setSessionState] =
    useState<SessionState>(SessionState.INACTIVE);

  const [loadingAvatar, setLoadingAvatar] =
    useState(false);

  const [error, setError] = useState("");

  /*
   * Get interview questions from Convex
   */
  useEffect(() => {
    if (!interviewId) return;

    getInterviewQue();
  }, [interviewId]);

  const getInterviewQue = async () => {
    try {
      const result = await convex.query(
        api.Interview.getInterviewQue,
        {
          interviewRecordId:
            interviewId as Id<"InterviewSessionTable">,
        }
      );

      console.log("INTERVIEW DATA:", result);

      if (result) {
        const data = result as InterviewData;

        setInterviewData(data);

        /*
         * Automatically select first question
         */
        const firstQuestion =
          data.InterviewQuestions?.[0]?.question;

        if (firstQuestion) {
          setCurrentQuestion(firstQuestion);
          setCurrentQuestionIndex(0);

          console.log(
            "FIRST QUESTION:",
            firstQuestion
          );
        }
      }
    } catch (error) {
      console.error(
        "Error fetching interview:",
        error
      );

      setError(
        "Failed to load interview questions"
      );
    }
  };

  /*
   * Start LiveAvatar LITE session
   */
  const startAvatar = async () => {
    try {
      setLoadingAvatar(true);
      setError("");

      /*
       * Get LiveAvatar session token
       */
      const response = await fetch(
        "/api/liveavatar/token",
        {
          method: "POST",
        }
      );

      const data = await response.json();

      console.log(
        "LIVE AVATAR TOKEN RESPONSE:",
        data
      );

      if (!response.ok) {
        throw new Error(
          JSON.stringify(data)
        );
      }

      const sessionToken =
        data.session_token;

      if (!sessionToken) {
        throw new Error(
          "No session token received"
        );
      }

      /*
       * Create LiveAvatar session
       *
       * This remains LITE mode.
       */
      const session =
        new LiveAvatarSession(
          sessionToken,
          {
            voiceChat: {
              defaultMuted: false,
            },

            autoKeepAlive: true,
          }
        );

      sessionRef.current = session;

      /*
       * Session state
       */
      session.on(
        SessionEvent.SESSION_STATE_CHANGED,
        (state) => {
          console.log(
            "AVATAR STATE:",
            state
          );

          setSessionState(state);
        }
      );

      /*
       * Avatar video stream
       */
      session.on(
        SessionEvent.SESSION_STREAM_READY,
        () => {
          console.log(
            "AVATAR STREAM READY"
          );

          if (videoRef.current) {
            session.attach(
              videoRef.current
            );
          }
        }
      );

      /*
       * Start session
       */
      await session.start();

      console.log(
        "AVATAR SESSION STARTED"
      );

      /*
       * Make sure the first question
       * is displayed.
       */
      const firstQuestion =
        interviewData
          ?.InterviewQuestions?.[0]
          ?.question;

      if (firstQuestion) {
        setCurrentQuestion(
          firstQuestion
        );

        setCurrentQuestionIndex(0);

        console.log(
          "CURRENT QUESTION:",
          firstQuestion
        );
      }
    } catch (error) {
      console.error(
        "AVATAR ERROR:",
        error
      );

      setError(
        "Failed to start avatar"
      );
    } finally {
      setLoadingAvatar(false);
    }
  };

  /*
   * Move to next interview question
   */
  const nextQuestion = () => {
    if (
      !interviewData?.InterviewQuestions
    ) {
      return;
    }

    const nextIndex =
      currentQuestionIndex + 1;

    if (
      nextIndex >=
      interviewData.InterviewQuestions.length
    ) {
      console.log(
        "INTERVIEW FINISHED"
      );

      setCurrentQuestion(
        "Interview completed!"
      );

      return;
    }

    const nextQuestion =
      interviewData
        .InterviewQuestions[nextIndex]
        .question;

    setCurrentQuestionIndex(
      nextIndex
    );

    setCurrentQuestion(
      nextQuestion
    );

    console.log(
      "NEXT QUESTION:",
      nextQuestion
    );
  };

  /*
   * Stop LiveAvatar
   */
  const stopAvatar = async () => {
    try {
      if (sessionRef.current) {
        await sessionRef.current.stop();

        sessionRef.current = null;

        setSessionState(
          SessionState.DISCONNECTED
        );
      }
    } catch (error) {
      console.error(
        "Error stopping avatar:",
        error
      );
    }
  };

  /*
   * Cleanup when leaving page
   */
  useEffect(() => {
    return () => {
      if (sessionRef.current) {
        sessionRef.current.stop();
        sessionRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

      {/* Header */}

      <h1 className="text-3xl font-bold mb-3">
        AI Mock Interview
      </h1>

      <p className="text-gray-400 mb-8">
        Interview ID: {interviewId}
      </p>


      {/* Job information */}

      {interviewData && (
        <div className="mb-8 text-center">

          <h2 className="text-xl font-semibold">
            {interviewData.jobTitle}
          </h2>

          <p className="text-gray-400 mt-2">
            {interviewData.jobDescription}
          </p>

        </div>
      )}


      {/* Avatar */}

      <div className="w-[700px] h-[500px] bg-gray-900 rounded-2xl overflow-hidden relative">

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={false}
          className="w-full h-full object-cover"
        />

        {sessionState !==
          SessionState.CONNECTED && (
          <div className="absolute inset-0 flex items-center justify-center">

            <p className="text-gray-400">

              {loadingAvatar
                ? "Starting AI interviewer..."
                : "AI Avatar"}

            </p>

          </div>
        )}

      </div>


      {/* Error */}

      {error && (
        <p className="text-red-500 mt-4">
          {error}
        </p>
      )}


      {/* Current question */}

      {currentQuestion && (
        <div className="mt-8 w-[700px] bg-gray-900 rounded-xl p-6">

          <p className="text-sm text-gray-500">
            Question{" "}
            {currentQuestionIndex + 1}
            {" / "}
            {interviewData
              ?.InterviewQuestions
              ?.length || 0}
          </p>

          <p className="text-lg font-medium mt-2">
            {currentQuestion}
          </p>

        </div>
      )}


      {/* Controls */}

      <div className="flex gap-4 mt-8">

        {sessionState ===
        SessionState.CONNECTED ? (

          <>
            <button
              onClick={nextQuestion}
              className="bg-[#22C55E] text-black px-6 py-3 rounded-lg font-semibold"
            >
              Next Question
            </button>

            <button
              onClick={stopAvatar}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              End Interview
            </button>
          </>

        ) : (

          <button
            onClick={startAvatar}
            disabled={loadingAvatar}
            className="bg-[#22C55E] text-black px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {loadingAvatar
              ? "Starting..."
              : "Start AI Interview"}
          </button>

        )}

      </div>

    </div>
  );
};

export default Page;


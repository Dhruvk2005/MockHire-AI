"use client";

import { useCallback } from "react";
import { useLiveAvatarContext } from "./context";

export const useTextChat = (
  mode: "FULL" | "LITE"
) => {
  const { sessionRef } =
    useLiveAvatarContext();

  const sendMessage = useCallback(
    async (message: string) => {
      if (!message.trim()) {
        return;
      }

      const session =
        sessionRef.current;

      if (!session) {
        throw new Error(
          "LiveAvatar session is not available"
        );
      }

      /*
       * FULL MODE
       *
       * We are not using FULL mode.
       */
      if (mode === "FULL") {
        await session.message(message);

        return message;
      }

      /*
       * LITE MODE
       *
       * LiveAvatar LITE does not allow:
       *
       * session.message()
       *
       * So we use:
       *
       * Question
       *    ↓
       * Gemini 2.5 Flash
       *    ↓
       * Interviewer response
       *    ↓
       * ElevenLabs
       *    ↓
       * PCM 24k audio
       *    ↓
       * LiveAvatar repeatAudio()
       */

      if (mode === "LITE") {
        try {
          /*
           * =====================================
           * STEP 1
           * Gemini 2.5 Flash
           * =====================================
           */

          console.log(
            "SENDING QUESTION TO GEMINI:",
            message
          );

          const geminiResponse =
            await fetch(
              "/api/gemini-chat",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  message,
                }),
              }
            );

          if (!geminiResponse.ok) {
            const errorText =
              await geminiResponse.text();

            console.error(
              "GEMINI ERROR:",
              errorText
            );

            throw new Error(
              "Gemini request failed"
            );
          }

          const geminiData =
            await geminiResponse.json();

          const interviewerText =
            geminiData.response;

          if (!interviewerText) {
            throw new Error(
              "Gemini returned empty response"
            );
          }

          console.log(
            "GEMINI INTERVIEWER RESPONSE:",
            interviewerText
          );


          /*
           * =====================================
           * STEP 2
           * ElevenLabs Text-to-Speech
           * =====================================
           */

          console.log(
            "SENDING TEXT TO ELEVENLABS..."
          );

          const speechResponse =
            await fetch(
              "/api/elevenlabs-text-to-speech",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  text: interviewerText,
                }),
              }
            );

          if (!speechResponse.ok) {
            const errorText =
              await speechResponse.text();

            console.error(
              "ELEVENLABS ERROR:",
              errorText
            );

            throw new Error(
              "ElevenLabs request failed"
            );
          }

          const speechData =
            await speechResponse.json();

          const audio =
            speechData.audio;

          if (!audio) {
            throw new Error(
              "ElevenLabs returned no audio"
            );
          }

          console.log(
            "ELEVENLABS AUDIO RECEIVED"
          );


          /*
           * =====================================
           * STEP 3
           * LiveAvatar LITE
           * =====================================
           */

          console.log(
            "SENDING AUDIO TO LIVEAVATAR..."
          );

          await session.repeatAudio(
            audio
          );

          console.log(
            "AVATAR SPEAKING"
          );


          /*
           * Return the generated
           * interviewer text.
           */

          return interviewerText;

        } catch (error) {
          console.error(
            "LITE TEXT CHAT ERROR:",
            error
          );

          throw error;
        }
      }
    },
    [sessionRef, mode]
  );

  return {
    sendMessage,
  };
};
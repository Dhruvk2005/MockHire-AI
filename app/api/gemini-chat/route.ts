
import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an AI interviewer conducting a technical job interview.

The user will provide an interview question.

Your job is to turn that question into a natural interviewer's spoken question.

Keep the response short and conversational.

Do not answer the interview question yourself.

Do not explain the question.

Do not give hints.

For example:

Input:
"What is your name and academic qualification?"

Output:
"Let's start with a simple introduction. Could you tell me your name and academic qualification?"

Another example:

Input:
"Explain your experience with React."

Output:
"Can you tell me about your experience working with React?"

Your response will be converted into speech by an AI avatar, so make it sound natural when spoken.
`;

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const { message } = body;

    if (!message) {
      return NextResponse.json(
        {
          error: "message is required",
        },
        {
          status: 400,
        }
      );
    }

    const apiKey =
      process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "GEMINI_API_KEY is not configured",
        },
        {
          status: 500,
        }
      );
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",

        contents: message,

        config: {
          systemInstruction:
            SYSTEM_PROMPT,

          temperature: 0.7,

          maxOutputTokens: 100,
        },
      });

    const text =
      response.text?.trim();

    if (!text) {
      return NextResponse.json(
        {
          error:
            "Gemini returned an empty response",
        },
        {
          status: 500,
        }
      );
    }

    console.log(
      "GEMINI RESPONSE:",
      text
    );

    return NextResponse.json({
      response: text,
    });
  } catch (error) {
    console.error(
      "GEMINI ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Failed to generate Gemini response",
      },
      {
        status: 500,
      }
    );
  }
}


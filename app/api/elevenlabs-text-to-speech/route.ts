
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { text } = body;

    if (!text) {
      return NextResponse.json(
        {
          error: "text is required",
        },
        {
          status: 400,
        }
      );
    }

    const apiKey =
      process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "ELEVENLABS_API_KEY is not configured",
        },
        {
          status: 500,
        }
      );
    }

    /*
     * ElevenLabs voice ID
     *
     * Replace this with a voice ID
     * available to your ElevenLabs account.
     */
    const voiceId =
      "JBFqnCBsd6RMkjVDRZzb";

    /*
     * Generate speech
     *
     * pcm_24000 =
     * 16-bit PCM audio at 24 kHz.
     *
     * This is the format we want for
     * the LiveAvatar LITE audio pipeline.
     */
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=pcm_24000`,
      {
        method: "POST",

        headers: {
          "xi-api-key": apiKey,

          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          text,

          model_id:
            "eleven_flash_v2_5",
        }),
      }
    );

    if (!response.ok) {
      const errorText =
        await response.text();

      console.error(
        "ELEVENLABS API ERROR:",
        errorText
      );

      return NextResponse.json(
        {
          error:
            "ElevenLabs request failed",

          details: errorText,
        },
        {
          status: response.status,
        }
      );
    }

    /*
     * ElevenLabs returns raw audio bytes.
     */
    const audioBuffer =
      await response.arrayBuffer();

    /*
     * Convert audio bytes → Base64
     *
     * LiveAvatar repeatAudio()
     * can receive the Base64 audio.
     */
    const audioBase64 =
      Buffer.from(audioBuffer).toString(
        "base64"
      );

    console.log(
      "ELEVENLABS AUDIO GENERATED"
    );

    return NextResponse.json({
      audio: audioBase64,
    });
  } catch (error) {
    console.error(
      "ELEVENLABS SERVER ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Failed to generate speech",
      },
      {
        status: 500,
      }
    );
  }
}


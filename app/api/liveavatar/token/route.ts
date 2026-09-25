import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch(
      "https://api.liveavatar.com/v1/sessions/token",
      {
        method: "POST",
        headers: {
          "X-API-KEY": process.env.LIVEAVATAR_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "LITE",
          avatar_id: "073b60a9-89a8-45aa-8902-c358f64d2852",
        }),
      }
    );

    const data = await response.json();

    console.log("LIVEAVATAR API RESPONSE:", data);

    if (!response.ok) {
      return NextResponse.json(
        { error: data },
        { status: response.status }
      );
    }

    return NextResponse.json({
      session_token: data.data.session_token,
      session_id: data.data.session_id,
    });
  } catch (error) {
    console.error("LIVEAVATAR SERVER ERROR:", error);

    return NextResponse.json(
      { error: "Failed to create LiveAvatar session" },
      { status: 500 }
    );
  }
}
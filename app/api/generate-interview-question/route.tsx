import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_URL_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_URL_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function POST(req: NextRequest) {
  try {
    console.log("API HIT");

    const formData = await req.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded." },
        { status: 400 }
      );
    }

    console.log("File Name:", file.name);
    console.log("File Size:", file.size);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: `resume-${Date.now()}.pdf`,
      useUniqueFileName: true,
      isPrivateFile: false,
    });

    console.log(uploadResponse);


    

    return NextResponse.json(
      {
        success: true,
        url: uploadResponse.url,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("========== ERROR ==========");
    console.error(error);
    console.error("Message:", error?.message);
    console.error("Stack:", error?.stack);

    return NextResponse.json(
      {
        success: false,
        error: error?.message,
      },
      { status: 500 }
    );
  }
}
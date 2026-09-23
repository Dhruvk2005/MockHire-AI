import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";
import axios from "axios";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_URL_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_URL_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function POST(req: NextRequest) {
  try {
    console.log("================================");
    console.log("1. API HIT");
    console.log("================================");



    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const jobTitle = formData.get("jobTitle") as string | null;
    const jobDescription = formData.get("jobDescription") as string | null;

    if (file) {



      console.log("✅ File received");
      console.log("File name:", file.name);
      console.log("File size:", file.size);
      console.log("File type:", file.type);



      console.log("================================");
      console.log("2. Converting file to buffer");
      console.log("================================");

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      console.log("✅ Buffer created");
      console.log("Buffer size:", buffer.length);



      console.log("================================");
      console.log("3. Uploading to ImageKit");
      console.log("================================");

      const uploadResponse = await imagekit.upload({
        file: buffer,
        fileName: `resume-${Date.now()}.pdf`,
        useUniqueFileName: true,
        isPrivateFile: false,
      });

      console.log("✅ ImageKit upload successful");
      console.log("ImageKit URL:", uploadResponse.url);
      console.log("File ID:", uploadResponse.fileId);

      if (!uploadResponse.url) {
        throw new Error("ImageKit did not return a URL");
      }



      console.log("================================");
      console.log("4. Sending URL to n8n");
      console.log("================================");

      const webhookUrl =
        "http://localhost:5678/webhook/e80f9b48-9dcf-4be4-bf6e-a1a50baa5ef5";

      console.log("Webhook URL:", webhookUrl);

     const n8nResponse = await axios.post(
    webhookUrl,
    {
        resumeUrl: uploadResponse.url,
        jobTitle: jobTitle,
        jobDescription: jobDescription
    },
    {
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 60000,
    }
);

      console.log("================================");
      console.log("5. n8n RESPONSE");
      console.log("================================");

      console.log("Status:", n8nResponse.status);
      console.log("Data:", n8nResponse.data);



      return NextResponse.json(
        {
          success: true,
          message: "Resume uploaded and sent to n8n successfully",
          resumeUrl: uploadResponse.url,
          jobTitle,
          jobDescription,
          n8nResponse: n8nResponse.data,
        },
        { status: 200 }
      );

    } else {

      const webhookUrl =
        "http://localhost:5678/webhook/e80f9b48-9dcf-4be4-bf6e-a1a50baa5ef5";

      console.log("Webhook URL:", webhookUrl);

      const n8nResponse = await axios.post(
        webhookUrl,
        {
          resumeUrl: null,
          jobTitle: jobTitle,
          jobDescription: jobDescription
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 60000,
        }
      );

      return NextResponse.json({
        success: true,
        message: "Job description sent to n8n successfully",
        n8nResponse: n8nResponse.data,
      });

    }
  } catch (error: any) {
    console.log("================================");
    console.log("❌ ERROR OCCURRED");
    console.log("================================");

    console.log("Message:", error?.message);

    if (axios.isAxiosError(error)) {
      console.log("This is an Axios error");

      if (error.response) {
        console.log("Axios Status:", error.response.status);
        console.log("Axios Data:", error.response.data);
      } else if (error.request) {
        console.log("❌ Request sent but no response received");
        console.log(error.message);
      } else {
        console.log("Axios configuration error");
        console.log(error.message);
      }
    } else {
      console.log("Non-Axios error:");
      console.log(error);
    }

    console.log("================================");

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Something went wrong",

        axiosError: axios.isAxiosError(error)
          ? {
            status: error.response?.status || null,
            data: error.response?.data || null,
          }
          : null,
      },
      {
        status: 500,
      }
    );
  }
}
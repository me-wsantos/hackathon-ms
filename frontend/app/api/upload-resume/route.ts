import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { extractJsonMarkdown } from "@/app/utils/extractJsonMarkdown";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (file === undefined) return NextResponse.json({ status: "fail", message: "Arquivo não encontrado!" });

  const extension = file.name.slice(file.name.lastIndexOf("."));

  const validExtensions = [".pdf", ".png", ".jpg", ".jpeg"];
  if (!validExtensions.includes(extension)) {
    return NextResponse.json({ status: "fail", message: "Formato de arquivo inválido" });
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfBase64 = Buffer.from(arrayBuffer).toString('base64');

    const resume = {
      file_type: "pdf",
      cv: pdfBase64
    }

    const serviceUrl = process.env.SERVICE_EXTRACT_URL;

    if (!serviceUrl) {
      return NextResponse.json({ status: "fail", error: "SERVICE_EXTRACT_URL is not defined" });
    }

    const result = await axios.post(serviceUrl, resume, {
      headers: { 'Content-Type': 'application/json' }
    });

    const extractedText = extractJsonMarkdown(result.data);
    return NextResponse.json({ status: "success", data: extractedText });

  } catch (e) {
    console.log(e)
    return NextResponse.json({ status: "fail", error: e });
  }
}
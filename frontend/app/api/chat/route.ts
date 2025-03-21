import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { chat, perfil } = await request.json();

  if (!chat || !perfil) return NextResponse.json({ status: "fail", message: "Mensagem do usuário incompleta!" });

  try {
    const serviceUrl = process.env.CHAT_OPENAI || ""
    const result = await axios.post(serviceUrl, { chat, perfil }, {
      headers: { 'Content-Type': 'application/json' }
    });

    const response = {
      role: "assistant",
      content: result.data
    }
    return NextResponse.json({ status: "success", response });
  } catch (e) {
    console.log(e)
    return NextResponse.json({ status: "fail", error: e });
  }
}
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { perfil } = await request.json();

  if (!perfil) return NextResponse.json({ status: "fail", message: "Perfil não encontrado!" });
  
  try {
    const serviceUrl = process.env.INTERVIEW_URL || ""
    const result = await axios.post(serviceUrl, { perfil }, {
      headers: { 'Content-Type': 'application/json' }
    });

    return NextResponse.json({ status: "success", data: result.data });

  } catch (e) {
    console.log(e)
    return NextResponse.json({ status: "fail", error: e });
  }
}
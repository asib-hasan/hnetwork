import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Contact lead captured:", body);
    return NextResponse.json({ success: true, message: "Inquiry received successfully." });
  } catch {
    return NextResponse.json({ error: "Failed to process request." }, { status: 400 });
  }
}

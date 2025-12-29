import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check if the BLOB_READ_WRITE_TOKEN is set
    const token = process.env.BLOB_READ_WRITE_TOKEN
    const hasToken = !!token
    const tokenFirstChars = hasToken ? token.substring(0, 10) + "..." : "none"

    return NextResponse.json({
      status: "ok",
      hasToken,
      tokenFirstChars,
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: error.message,
      },
      { status: 500 },
    )
  }
}

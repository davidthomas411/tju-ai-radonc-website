import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Log to check if the token is available
    console.log("BLOB_READ_WRITE_TOKEN exists:", !!process.env.BLOB_READ_WRITE_TOKEN)

    const form = await request.formData()
    const file = form.get("file") as File
    const filename = form.get("filename") as string

    if (!file || !filename) {
      return NextResponse.json({ error: "File and filename are required" }, { status: 400 })
    }

    // Get the file buffer and size
    const buffer = await file.arrayBuffer()
    const blob = new Blob([buffer])

    // Upload to Vercel Blob with the correct content length
    const { url } = await put(filename, blob, {
      access: "public",
      contentType: file.type,
      token: process.env.BLOB_READ_WRITE_TOKEN, // Explicitly pass the token
    })

    return NextResponse.json({ url, success: true })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error occurred",
        success: false,
      },
      { status: 500 },
    )
  }
}

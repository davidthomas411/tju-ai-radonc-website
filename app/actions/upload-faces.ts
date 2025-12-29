"use server"

import { put } from "@vercel/blob"

export async function uploadFaceImages(formData: FormData) {
  const facultyName = formData.get("facultyName") as string

  if (!facultyName) {
    return { success: false, error: "Faculty name is required" }
  }

  const files = formData.getAll("files") as File[]

  if (files.length === 0) {
    return { success: false, error: "No files provided" }
  }

  try {
    const uploadedUrls: string[] = []

    for (const file of files) {
      const blob = await put(`faces/${facultyName}/${file.name}`, file, {
        access: "public",
      })
      uploadedUrls.push(blob.url)
    }

    // Return the base path for the FaceTracker component
    const basePath = uploadedUrls[0].split("/").slice(0, -1).join("/")

    return {
      success: true,
      uploadedCount: uploadedUrls.length,
      basePath,
    }
  } catch (err) {
    return {
      success: false,
      error: `Failed to upload: ${(err as Error).message}`,
    }
  }
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function UploadPage() {
  const [results, setResults] = useState<Array<{ filename: string; url: string }>>([])
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])

  function addLog(message: string) {
    setLogs((prev) => [...prev, `${new Date().toISOString().split("T")[1].split(".")[0]}: ${message}`])
  }

  async function uploadVideo(file: File, filename: string) {
    addLog(`Starting upload for ${filename}`)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("filename", filename)

    try {
      addLog("Sending request to API...")
      const response = await fetch("/api/upload-video", {
        method: "POST",
        body: formData,
      })

      addLog(`Received response: ${response.status}`)
      const result = await response.json()

      if (!response.ok) {
        addLog(`Error: ${result.error || "Unknown error"}`)
        throw new Error(result.error || `Upload failed with status: ${response.status}`)
      }

      addLog("Upload successful!")
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred"
      addLog(`Error: ${errorMessage}`)
      setError(errorMessage)
      throw err
    }
  }

  async function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsUploading(true)
    setError(null)
    setResults([])
    setLogs([])

    const formData = new FormData(event.currentTarget)
    const file = formData.get("file") as File

    if (!file) {
      setError("Please select a file")
      setIsUploading(false)
      return
    }

    try {
      // Generate a unique filename with timestamp
      const timestamp = new Date().getTime()
      const fileExt = file.name.split(".").pop()
      const uniqueFilename = `videos/video_${timestamp}.${fileExt}`

      addLog(`Uploading file: ${file.name} as ${uniqueFilename}`)
      addLog(`File size: ${(file.size / 1024 / 1024).toFixed(2)} MB`)

      // Upload the video with a specific name
      const result = await uploadVideo(file, uniqueFilename)
      setResults([{ filename: uniqueFilename, url: result.url }])
    } catch (error) {
      console.error("Upload failed:", error)
      // Error is already set in uploadVideo function
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Upload Videos to Vercel Blob</h1>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-600">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleUpload} className="space-y-4 border p-6 rounded-lg bg-gray-50">
        <div>
          <label htmlFor="file" className="block mb-2 font-medium">
            Select video file
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept="video/mp4,video/quicktime"
            required
            className="border p-2 w-full rounded"
          />
          <p className="text-sm text-gray-500 mt-1">
            Select one video file at a time. Repeat the upload process for each video.
          </p>
        </div>

        <Button type="submit" disabled={isUploading} className="w-full">
          {isUploading ? "Uploading..." : "Upload Video"}
        </Button>
      </form>

      {logs.length > 0 && (
        <div className="mt-6 border rounded p-4 bg-gray-50">
          <h3 className="font-bold mb-2">Upload Logs:</h3>
          <div className="bg-black text-green-400 p-3 rounded font-mono text-sm h-40 overflow-y-auto">
            {logs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Upload Results</h2>
          <div className="border rounded p-4 bg-white">
            <p className="font-bold mb-2">Copy this URL to update your video-sync.tsx file:</p>
            {results.map((result, index) => (
              <div key={index} className="mb-2">
                <p>
                  <strong>{result.filename}:</strong>
                </p>
                <code className="block p-2 bg-gray-100 rounded overflow-x-auto whitespace-nowrap">{result.url}</code>
              </div>
            ))}

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="font-medium">Next steps:</p>
              <ol className="list-decimal ml-5 mt-2 space-y-1">
                <li>Upload each video one by one</li>
                <li>Copy each URL and update your code</li>
                <li>
                  In <code>components/video-sync.tsx</code>, replace the video URLs
                </li>
                <li>
                  In <code>app/page.tsx</code>, update the hero video URL
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

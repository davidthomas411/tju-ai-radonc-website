"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FallbackVideosPage() {
  const [videoStatus, setVideoStatus] = useState<Record<string, boolean>>({})

  const videoUrls = {
    github: {
      view1: "https://raw.githubusercontent.com/davidthomas411/a-sgrt/main/view1.mp4",
      view2: "https://raw.githubusercontent.com/davidthomas411/a-sgrt/main/view2.mp4",
      view3: "https://raw.githubusercontent.com/davidthomas411/a-sgrt/main/view3.mp4",
      view4: "https://raw.githubusercontent.com/davidthomas411/a-sgrt/main/view4.mp4",
    },
    jsdelivr: {
      view1: "https://cdn.jsdelivr.net/gh/davidthomas411/a-sgrt@main/view1.mp4",
      view2: "https://cdn.jsdelivr.net/gh/davidthomas411/a-sgrt@main/view2.mp4",
      view3: "https://cdn.jsdelivr.net/gh/davidthomas411/a-sgrt@main/view3.mp4",
      view4: "https://cdn.jsdelivr.net/gh/davidthomas411/a-sgrt@main/view4.mp4",
    },
  }

  const checkVideo = (source: "github" | "jsdelivr", view: string) => {
    const video = document.createElement("video")
    video.muted = true
    video.crossOrigin = "anonymous"

    video.onloadeddata = () => {
      setVideoStatus((prev) => ({ ...prev, [`${source}_${view}`]: true }))
    }

    video.onerror = () => {
      setVideoStatus((prev) => ({ ...prev, [`${source}_${view}`]: false }))
    }

    video.src = videoUrls[source][view as keyof typeof videoUrls.github]
    video.load()
  }

  const checkAllVideos = () => {
    Object.keys(videoUrls.github).forEach((view) => {
      checkVideo("github", view)
      checkVideo("jsdelivr", view)
    })
  }

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-6">Video Troubleshooting</h1>

      <div className="mb-8">
        <Button onClick={checkAllVideos}>Check All Video URLs</Button>
        <Link href="/" className="ml-4 text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">GitHub Raw URLs</h2>
          <ul className="space-y-4">
            {Object.entries(videoUrls.github).map(([view, url]) => (
              <li key={`github_${view}`} className="border-b pb-2">
                <p className="font-medium">{view}:</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 break-all hover:underline text-sm"
                >
                  {url}
                </a>
                <div className="mt-2">
                  Status:{" "}
                  {videoStatus[`github_${view}`] === undefined ? (
                    "Not checked"
                  ) : videoStatus[`github_${view}`] ? (
                    <span className="text-green-600 font-medium">Working ✓</span>
                  ) : (
                    <span className="text-red-600 font-medium">Not working ✗</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">jsDelivr CDN URLs</h2>
          <ul className="space-y-4">
            {Object.entries(videoUrls.jsdelivr).map(([view, url]) => (
              <li key={`jsdelivr_${view}`} className="border-b pb-2">
                <p className="font-medium">{view}:</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 break-all hover:underline text-sm"
                >
                  {url}
                </a>
                <div className="mt-2">
                  Status:{" "}
                  {videoStatus[`jsdelivr_${view}`] === undefined ? (
                    "Not checked"
                  ) : videoStatus[`jsdelivr_${view}`] ? (
                    <span className="text-green-600 font-medium">Working ✓</span>
                  ) : (
                    <span className="text-red-600 font-medium">Not working ✗</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg border">
        <h2 className="text-xl font-bold mb-4">Troubleshooting Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>If GitHub Raw URLs are not working but jsDelivr URLs are, update your code to use the jsDelivr URLs.</li>
          <li>
            If neither set of URLs works, you may need to host your videos elsewhere (like Cloudinary or another video
            hosting service).
          </li>
          <li>Make sure your videos are properly formatted (MP4 with H.264 encoding works best for web).</li>
          <li>Check that your GitHub repository is public and the videos are in the main branch.</li>
        </ul>
      </div>
    </div>
  )
}

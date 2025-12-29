"use client"

import { useEffect, useRef } from "react"

// Vercel Blob URLs for the videos
const VIDEO_URLS = {
  view1: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view1.mp4",
  view2: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view2.mp4",
  view3: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view3.mp4",
  view4: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view4.mp4",
}

export default function VideoSync() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const video3Ref = useRef<HTMLVideoElement>(null)
  const video4Ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current, video4Ref.current].filter(
      Boolean,
    ) as HTMLVideoElement[]

    // Function to sync all videos to the first one
    const syncVideos = () => {
      const mainVideo = videos[0]
      if (!mainVideo) return

      videos.slice(1).forEach((video) => {
        if (Math.abs(video.currentTime - mainVideo.currentTime) > 0.3) {
          video.currentTime = mainVideo.currentTime
        }

        if (mainVideo.paused) {
          video.pause()
        } else {
          video.play().catch(() => {
            // Autoplay might be blocked
          })
        }
      })
    }

    // Set up event listeners for syncing
    videos.forEach((video) => {
      video.addEventListener("play", syncVideos)
      video.addEventListener("seeked", syncVideos)
    })

    // Try to start all videos
    videos.forEach((video) => {
      video.play().catch(() => {
        // Autoplay might be blocked
      })
    })

    // Periodic sync (not perfect but helps)
    const syncInterval = setInterval(syncVideos, 2000)

    return () => {
      clearInterval(syncInterval)
      videos.forEach((video) => {
        video.removeEventListener("play", syncVideos)
        video.removeEventListener("seeked", syncVideos)
      })
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800">
        <video
          ref={video1Ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={VIDEO_URLS.view1}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800">
        <video
          ref={video2Ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={VIDEO_URLS.view2}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800">
        <video
          ref={video3Ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={VIDEO_URLS.view3}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800">
        <video
          ref={video4Ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={VIDEO_URLS.view4}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

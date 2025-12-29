"use client"

import { useRef } from "react"
import { useGazeTracking } from "@/hooks/use-gaze-tracking"
import Image from "next/image"

interface FaceTrackerProps {
  blobFaceId: string // e.g., "JV_1" for Dr. Vinogradskiy
  fallbackImage?: string // Optional fallback placeholder image
  className?: string
  alt?: string
  size?: number
}

export function FaceTracker({
  blobFaceId,
  fallbackImage,
  className = "",
  alt = "Team member",
  size = 256,
}: FaceTrackerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const basePath = `https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/faces/${blobFaceId}`
  const { currentImage, isLoading, error } = useGazeTracking(containerRef, basePath)

  if (error && fallbackImage) {
    return (
      <div className={`relative overflow-hidden rounded-full ${className}`} style={{ width: size, height: size }}>
        <Image
          src={fallbackImage || "/placeholder.svg"}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  if (error && !fallbackImage) {
    return (
      <div className={`relative overflow-hidden rounded-full ${className}`} style={{ width: size, height: size }}>
        <Image
          src={`/generic-placeholder-icon.png?height=${size}&width=${size}&query=${encodeURIComponent(alt)}`}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover bg-gray-100 dark:bg-gray-800"
        />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 ${className}`}
      style={{ width: size, height: size }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="w-8 h-8 border-4 border-jefferson-bright-blue border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {currentImage && (
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover select-none pointer-events-none"
          priority
        />
      )}
    </div>
  )
}

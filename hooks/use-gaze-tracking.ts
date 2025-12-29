"use client"

import { useState, useEffect, type RefObject } from "react"

// Must match your generation parameters from face_looker
const P_MIN = -15
const P_MAX = 15
const STEP = 3
const SIZE = 256

interface GazeTrackingResult {
  currentImage: string | null
  isLoading: boolean
  error: Error | null
}

function formatPupilValue(value: number): string {
  if (value === 0) {
    return "0p0"
  }
  return value < 0 ? `m${Math.abs(value)}p0` : `${value}p0`
}

export function useGazeTracking(containerRef: RefObject<HTMLElement>, basePath: string): GazeTrackingResult {
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const centerImage = `${basePath}/gaze_px0p0_py0p0_${SIZE}.webp`
    const img = new Image()

    img.onload = () => {
      setCurrentImage(centerImage)
      setIsLoading(false)
    }
    img.onerror = () => {
      setError(new Error("Failed to load face images"))
      setIsLoading(false)
    }
    img.src = centerImage

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Normalize to -1 to 1
      const normalizedX = (x / rect.width) * 2 - 1
      const normalizedY = -((y / rect.height) * 2 - 1)

      // Map to pupil position range
      const px = Math.round((normalizedX * P_MAX) / STEP) * STEP
      const py = Math.round((normalizedY * P_MAX) / STEP) * STEP

      // Clamp to valid range
      const clampedPx = Math.max(P_MIN, Math.min(P_MAX, px))
      const clampedPy = Math.max(P_MIN, Math.min(P_MAX, py))

      const pxStr = formatPupilValue(clampedPx)
      const pyStr = formatPupilValue(clampedPy)
      const newImage = `${basePath}/gaze_px${pxStr}_py${pyStr}_${SIZE}.webp`

      setCurrentImage(newImage)
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const rect = container.getBoundingClientRect()
      const x = touch.clientX - rect.left
      const y = touch.clientY - rect.top

      const normalizedX = (x / rect.width) * 2 - 1
      const normalizedY = -((y / rect.height) * 2 - 1)

      const px = Math.round((normalizedX * P_MAX) / STEP) * STEP
      const py = Math.round((normalizedY * P_MAX) / STEP) * STEP

      const clampedPx = Math.max(P_MIN, Math.min(P_MAX, px))
      const clampedPy = Math.max(P_MIN, Math.min(P_MAX, py))

      const pxStr = formatPupilValue(clampedPx)
      const pyStr = formatPupilValue(clampedPy)
      const newImage = `${basePath}/gaze_px${pxStr}_py${pyStr}_${SIZE}.webp`
      setCurrentImage(newImage)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [containerRef, basePath])

  return { currentImage, isLoading, error }
}

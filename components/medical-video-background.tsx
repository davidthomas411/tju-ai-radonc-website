"use client"

import { useEffect, useRef, useState } from "react"

interface MedicalVideoBackgroundProps {
  videoSrc: string
  className?: string
}

export function MedicalVideoBackground({ videoSrc, className = "" }: MedicalVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    handleChange()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause()
        return
      }
      videoRef.current.play().catch((error) => {
        console.log("[v0] Video autoplay prevented:", error)
      })
    }
  }, [prefersReducedMotion])

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={!prefersReducedMotion}
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
    </div>
  )
}

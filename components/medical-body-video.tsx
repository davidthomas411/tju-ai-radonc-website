"use client"

import { useEffect, useRef, useState } from "react"

interface MedicalBodyVideoProps {
  className?: string
}

export function MedicalBodyVideo({ className = "" }: MedicalBodyVideoProps) {
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
        <source src="https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/whole_body_3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-white/80 pointer-events-none" />
    </div>
  )
}

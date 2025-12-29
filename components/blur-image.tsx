"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BlurImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function BlurImage({ src, alt, width, height, className }: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn("duration-700 ease-in-out", isLoading ? "scale-110 blur-sm" : "scale-100 blur-0")}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

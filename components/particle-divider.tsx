"use client"

import { useEffect, useRef, useState } from "react"

interface ParticleDividerProps {
  height?: number
}

const ISODOSE_COLORS = [
  { stop: 0, color: [220, 47, 110] }, // Deep pink/magenta (100% dose)
  { stop: 0.2, color: [245, 139, 44] }, // Orange (80%)
  { stop: 0.35, color: [245, 184, 44] }, // Gold (70%)
  { stop: 0.5, color: [126, 211, 33] }, // Lime green (50%)
  { stop: 0.7, color: [44, 204, 164] }, // Turquoise (30%)
  { stop: 1, color: [65, 105, 225] }, // Royal blue (20%)
]

export default function ParticleDivider({ height = 80 }: ParticleDividerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      const ctx = canvas.getContext("2d", { alpha: true })
      if (ctx) ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d", { alpha: true })
    if (!canvas || !ctx) return

    const animate = () => {
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)

      ctx.clearRect(0, 0, width, height)

      timeRef.current += 0.015

      // Draw smooth horizontal bands with vertical wave distortion
      const numBands = 120 // Dense horizontal bands for smooth appearance
      const bandHeight = height / numBands

      for (let i = 0; i < numBands; i++) {
        const y = i * bandHeight
        const normalizedY = i / numBands

        const wave1 = Math.sin(timeRef.current * 0.8 + normalizedY * Math.PI * 2) * 3
        const wave2 = Math.sin(timeRef.current * 1.2 + normalizedY * Math.PI * 3 + 1) * 2

        // Determine color based on vertical position with wave offset
        const centerDist = Math.abs(normalizedY - 0.5) * 2
        const distortedDist = centerDist + wave1 * 0.02 + wave2 * 0.015

        // Interpolate color from isodose palette
        let color = [65, 105, 225] // Default blue
        for (let j = 0; j < ISODOSE_COLORS.length - 1; j++) {
          const current = ISODOSE_COLORS[j]
          const next = ISODOSE_COLORS[j + 1]
          if (distortedDist >= current.stop && distortedDist <= next.stop) {
            const t = (distortedDist - current.stop) / (next.stop - current.stop)
            color = [
              current.color[0] + (next.color[0] - current.color[0]) * t,
              current.color[1] + (next.color[1] - current.color[1]) * t,
              current.color[2] + (next.color[2] - current.color[2]) * t,
            ]
            break
          }
        }

        const alpha = (0.3 - centerDist * 0.25) * 0.5

        // Draw horizontal gradient band with wave distortion
        const gradient = ctx.createLinearGradient(0, y, width, y)

        // Horizontal wave for flowing beam effect
        const numSegments = 8
        for (let seg = 0; seg <= numSegments; seg++) {
          const segPos = seg / numSegments
          const xWave = Math.sin(timeRef.current * 0.5 + segPos * Math.PI * 2 + normalizedY * 2) * 0.1
          const segAlpha = alpha * (0.8 + Math.sin(xWave * Math.PI) * 0.2)

          gradient.addColorStop(
            segPos,
            `rgba(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])}, ${segAlpha})`,
          )
        }

        ctx.fillStyle = gradient
        ctx.fillRect(0, y + wave1 + wave2, width, bandHeight + 1)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="w-full relative bg-transparent" style={{ height }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}

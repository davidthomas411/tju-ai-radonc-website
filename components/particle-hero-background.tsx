"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  color: string
  size: number
  vx: number
  vy: number
  angle: number
  burstSpeed: number
  distFromCenter: number
}

const ISODOSE_COLORS = [
  "#8B0000", // Dark red (100% - hotspot)
  "#B22222", // Fire brick red (95%)
  "#DC143C", // Crimson (85%)
  "#FF4500", // Orange red (75%)
  "#FF8C00", // Dark orange (65%)
  "#FFA500", // Orange (55%)
  "#FFD700", // Gold (45%)
  "#ADFF2F", // Yellow green (35%)
  "#00CED1", // Turquoise (25%)
  "#4169E1", // Royal blue (15%)
]

const BACKGROUND = "#0a0f1a"

function getIsodoseColor(normalizedDist: number): string {
  const index = Math.min(9, Math.floor(normalizedDist * 10))
  return ISODOSE_COLORS[index]
}

export { ParticleHeroBackground }
export default function ParticleHeroBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const hotspotRef = useRef({ x: 0, y: 0 })
  const maxDistRef = useRef(0)
  const animationRef = useRef<number>(0)
  const cycleRef = useRef<"forming" | "stable" | "radiating" | "returning">("forming")
  const cycleStartRef = useRef(0)
  const prefersReducedMotionRef = useRef(false)
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (error) {
      console.log("[v0] ParticleHeroBackground error:", error)
    }
  }, [error])

  const initParticles = useCallback((canvas: HTMLCanvasElement, logoImg: HTMLImageElement | null) => {
    try {
      if (initializedRef.current) return

      const ctx = canvas.getContext("2d", { alpha: false })
      if (!ctx) {
        setError("Failed to get canvas context")
        return
      }

      const { width, height } = canvas
      const particles: Particle[] = []
      const centerX = width * 0.75 // Shifted from width/2 to 75% across
      const centerY = height / 2

      const tempCanvas = new OffscreenCanvas(width, height)
      const tempCtx = tempCanvas.getContext("2d")
      if (!tempCtx) return

      const logoSize = Math.min(width * 0.45, height * 0.55)

      if (logoImg) {
        const aspectRatio = logoImg.width / logoImg.height
        let drawWidth = logoSize * aspectRatio
        let drawHeight = logoSize
        if (drawWidth > width * 0.85) {
          drawWidth = width * 0.85
          drawHeight = drawWidth / aspectRatio
        }
        tempCtx.drawImage(logoImg, centerX - drawWidth / 2, centerY - drawHeight / 2, drawWidth, drawHeight)
      } else {
        tempCtx.fillStyle = "#FFFFFF"
        const sw = logoSize * 0.8
        const sh = logoSize
        const sx = centerX - sw / 2
        const sy = centerY - sh / 2
        tempCtx.beginPath()
        tempCtx.moveTo(sx, sy)
        tempCtx.lineTo(sx + sw, sy)
        tempCtx.lineTo(sx + sw, sy + sh * 0.6)
        tempCtx.quadraticCurveTo(sx + sw / 2, sy + sh, sx, sy + sh * 0.6)
        tempCtx.closePath()
        tempCtx.fill()
      }

      const imageData = tempCtx.getImageData(0, 0, width, height)
      const data = imageData.data

      const gap = Math.max(4, Math.floor(Math.min(width, height) / 120))

      let minX = width,
        maxX = 0,
        minY = height,
        maxY = 0
      for (let y = 0; y < height; y += gap) {
        const rowOffset = y * width
        for (let x = 0; x < width; x += gap) {
          if (data[(rowOffset + x) * 4 + 3] > 50) {
            if (x < minX) minX = x
            if (x > maxX) maxX = x
            if (y < minY) minY = y
            if (y > maxY) maxY = y
          }
        }
      }

      const hotspotX = maxX - (maxX - minX) * 0.15
      const hotspotY = minY + (maxY - minY) * 0.15
      hotspotRef.current = { x: hotspotX, y: hotspotY }

      let maxDist = 0
      for (let y = 0; y < height; y += gap) {
        const rowOffset = y * width
        for (let x = 0; x < width; x += gap) {
          if (data[(rowOffset + x) * 4 + 3] > 50) {
            const dx = x - hotspotX
            const dy = y - hotspotY
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist > maxDist) maxDist = dist
          }
        }
      }
      maxDistRef.current = maxDist

      for (let y = 0; y < height; y += gap) {
        const rowOffset = y * width
        for (let x = 0; x < width; x += gap) {
          if (data[(rowOffset + x) * 4 + 3] > 50) {
            const dx = x - hotspotX
            const dy = y - hotspotY
            const distFromHotspot = Math.sqrt(dx * dx + dy * dy)
            const normalizedDist = maxDist > 0 ? distFromHotspot / maxDist : 0

            const dxCenter = x - width / 2
            const dyCenter = y - height / 2
            const distFromCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter)

            const dxOrigin = x - centerX
            const dyOrigin = y - centerY
            const angleFromLogoCenter = Math.atan2(dyOrigin, dxOrigin)

            particles.push({
              x: width / 2 + (Math.random() - 0.5) * width,
              y: height / 2 + (Math.random() - 0.5) * height,
              originX: x,
              originY: y,
              color: getIsodoseColor(normalizedDist),
              size: 2.5,
              vx: 0,
              vy: 0,
              angle: angleFromLogoCenter,
              burstSpeed: 15 + Math.random() * 10 + normalizedDist * 10,
              distFromCenter: distFromCenter,
            })
          }
        }
      }

      particlesRef.current = particles
      cycleRef.current = "forming"
      cycleStartRef.current = performance.now()
      initializedRef.current = true
    } catch (err) {
      console.log("[v0] Error initializing particles:", err)
      setError(err instanceof Error ? err.message : "Unknown error")
    }
  }, [])

  const animate = useCallback(() => {
    try {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext("2d", { alpha: false })
      if (!canvas || !ctx) return

      const reduceMotion = prefersReducedMotionRef.current

      const now = performance.now()
      const elapsed = now - cycleStartRef.current
      const phase = cycleRef.current

      if (phase === "forming" && elapsed > 2000) {
        cycleRef.current = "stable"
        cycleStartRef.current = now
      } else if (phase === "stable" && elapsed > 3000) {
        cycleRef.current = "radiating"
        cycleStartRef.current = now
      } else if (phase === "radiating" && elapsed > 2500) {
        cycleRef.current = "returning"
        cycleStartRef.current = now
      } else if (phase === "returning" && elapsed > 1500) {
        cycleRef.current = "stable"
        cycleStartRef.current = now
      }

      ctx.fillStyle = BACKGROUND
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const currentPhase = cycleRef.current
      const currentElapsed = now - cycleStartRef.current

      const hotspot = hotspotRef.current
      const isMouseActive =
        currentPhase === "stable" && mouse.x > 0 && mouse.x < canvas.width && mouse.y > 0 && mouse.y < canvas.height
      const currentHotspot = isMouseActive ? mouse : hotspot
      const maxDist = maxDistRef.current

      const len = particles.length
      for (let i = 0; i < len; i++) {
        const p = particles[i]

        if (reduceMotion) {
          p.x = p.originX
          p.y = p.originY
        } else if (currentPhase === "forming") {
          const progress = Math.min(1, currentElapsed / 1500)
          const ease = 1 - Math.pow(1 - progress, 3)
          p.x += (p.originX - p.x) * ease * 0.15
          p.y += (p.originY - p.y) * ease * 0.15
        } else if (currentPhase === "radiating") {
          const progress = Math.min(1, currentElapsed / 2500)
          const ease = progress * progress
          p.x += Math.cos(p.angle) * p.burstSpeed * ease
          p.y += Math.sin(p.angle) * p.burstSpeed * ease
        } else if (currentPhase === "returning") {
          const progress = Math.min(1, currentElapsed / 1500)
          const ease = 1 - Math.pow(1 - progress, 3)
          p.x += (p.originX - p.x) * ease * 0.2
          p.y += (p.originY - p.y) * ease * 0.2
        } else {
          p.vx += (p.originX - p.x) * 0.08
          p.vy += (p.originY - p.y) * 0.08
          p.vx *= 0.92
          p.vy *= 0.92
          p.x += p.vx
          p.y += p.vy
        }

        const dx = p.originX - currentHotspot.x
        const dy = p.originY - currentHotspot.y
        const distFromHotspot = Math.sqrt(dx * dx + dy * dy)
        const normalizedDist = maxDist > 0 ? distFromHotspot / maxDist : 0
        p.color = getIsodoseColor(normalizedDist)

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#FFFFFF"
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduceMotion) {
        animationRef.current = requestAnimationFrame(animate)
      }
    } catch (err) {
      console.log("[v0] Error animating particles:", err)
      setError(err instanceof Error ? err.message : "Unknown error")
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = () => {
      prefersReducedMotionRef.current = mediaQuery.matches
      if (mediaQuery.matches && animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = 0
        animate()
      }
    }

    handleChange()
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [animate])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let logoImg: HTMLImageElement | null = null

    const setup = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const { width, height } = parent.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      initParticles(canvas, logoImg)
      if (!animationRef.current) {
        animate()
      }
      setIsReady(true)
    }

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      logoImg = img
      setup()
    }
    img.onerror = () => setup()
    img.src = "/images/jefferson-j-logo.svg"

    const handleResize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const { width, height } = parent.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      initializedRef.current = false
    }
  }, [initParticles, animate])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      role="presentation"
      style={{ opacity: isReady ? 1 : 0, transition: "opacity 0.3s" }}
    />
  )
}

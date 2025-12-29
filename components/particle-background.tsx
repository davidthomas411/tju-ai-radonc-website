"use client"

import { useEffect, useRef, useCallback, useState } from "react"

interface ParticleBackgroundProps {
  variant?: "shield"
  colorScheme?: "isodose" | "blue" | "mono"
  opacity?: number
  enableRadiation?: boolean
  radiationInterval?: number
  interactive?: boolean
  backgroundColor?: string
}

// Isodose color palette (radiation therapy treatment planning colors)
const ISODOSE_COLORS = [
  "#DC2F6E", // Deep pink/magenta - 100% dose (center)
  "#E85A4F", // Coral/salmon - 90%
  "#F58B2C", // Orange - 80%
  "#F5B82C", // Gold - 70%
  "#CDD825", // Yellow-green - 60%
  "#7ED321", // Lime green - 50%
  "#2CCCA4", // Turquoise - 40%
  "#2CA8CC", // Cyan - 30%
  "#4169E1", // Royal blue - 20%
]

const BLUE_COLORS = ["#0066CC", "#0099FF", "#33BBFF", "#66CCFF", "#99DDFF"]
const MONO_COLORS = ["#FFFFFF"]

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  baseX: number
  baseY: number
  color: string
  size: number
  vx: number
  vy: number
}

export default function ParticleBackground({
  variant = "shield",
  colorScheme = "isodose",
  opacity = 0.3,
  enableRadiation = true,
  radiationInterval = 6000,
  interactive = true,
  backgroundColor = "#0a1628",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const phaseRef = useRef<"forming" | "stable" | "radiating" | "returning">("forming")
  const phaseTimerRef = useRef<number>(0)
  const [isReady, setIsReady] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const getColors = useCallback(() => {
    switch (colorScheme) {
      case "blue":
        return BLUE_COLORS
      case "mono":
        return MONO_COLORS
      default:
        return ISODOSE_COLORS
    }
  }, [colorScheme])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  // Initialize particles based on variant
  const initParticles = useCallback(
    (width: number, height: number) => {
      const particles: Particle[] = []
      const colors = getColors()
      const centerX = width / 2
      const centerY = height / 2

      // Load J shield logo and sample particles from it
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        const offscreen = document.createElement("canvas")
        const logoSize = Math.min(width, height) * 0.75
        offscreen.width = logoSize
        offscreen.height = logoSize
        const offCtx = offscreen.getContext("2d")
        if (!offCtx) return

        offCtx.drawImage(img, 0, 0, logoSize, logoSize)
        const imageData = offCtx.getImageData(0, 0, logoSize, logoSize)
        const data = imageData.data

        const offsetX = (width - logoSize) / 2
        const offsetY = (height - logoSize) / 2
        const gap = Math.max(5, Math.floor(logoSize / 120))

        for (let y = 0; y < logoSize; y += gap) {
          for (let x = 0; x < logoSize; x += gap) {
            const i = (y * logoSize + x) * 4
            const alpha = data[i + 3]
            if (alpha > 128) {
              const px = x + offsetX
              const py = y + offsetY
              const dist = Math.sqrt((px - centerX) ** 2 + (py - centerY) ** 2)
              const maxDist = Math.sqrt(centerX ** 2 + centerY ** 2)
              const colorIndex = Math.min(Math.floor((dist / maxDist) * colors.length), colors.length - 1)

              particles.push({
                x: centerX + (Math.random() - 0.5) * width,
                y: centerY + (Math.random() - 0.5) * height,
                targetX: px,
                targetY: py,
                baseX: px,
                baseY: py,
                color: colors[colorIndex],
                size: 2.5 + Math.random(),
                vx: 0,
                vy: 0,
              })
            }
          }
        }

        particlesRef.current = particles
        setIsReady(true)
      }
      img.src = "/images/jefferson-j-logo.svg"
    },
    [getColors],
  )

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d", { alpha: false })
    if (!canvas || !ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const width = canvas.width / dpr
    const height = canvas.height / dpr
    const particles = particlesRef.current
    const mouse = mouseRef.current
    const phase = phaseRef.current

    // Clear canvas with background color
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update phase timer
    phaseTimerRef.current++

    // Phase transitions for radiation effect
    if (enableRadiation) {
      const fps = 60
      if (phase === "forming" && phaseTimerRef.current > fps * 2) {
        phaseRef.current = "stable"
        phaseTimerRef.current = 0
      } else if (phase === "stable" && phaseTimerRef.current > (radiationInterval / 1000) * fps) {
        phaseRef.current = "radiating"
        phaseTimerRef.current = 0
      } else if (phase === "radiating" && phaseTimerRef.current > fps * 1.5) {
        phaseRef.current = "returning"
        phaseTimerRef.current = 0
      } else if (phase === "returning" && phaseTimerRef.current > fps * 2) {
        phaseRef.current = "stable"
        phaseTimerRef.current = 0
      }
    }

    const centerX = width / 2
    const centerY = height / 2

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      if (phase === "radiating") {
        // Explode outward
        const dx = p.baseX - centerX
        const dy = p.baseY - centerY
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        p.targetX = p.baseX + (dx / dist) * 200
        p.targetY = p.baseY + (dy / dist) * 200
      } else if (phase === "returning" || phase === "stable") {
        p.targetX = p.baseX
        p.targetY = p.baseY
      }

      // Mouse interaction
      if (interactive && phase !== "radiating") {
        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < 80) {
          const force = (80 - mDist) / 80
          p.vx += (mdx / mDist) * force * 3
          p.vy += (mdy / mDist) * force * 3
        }
      }

      // Spring physics
      const springStrength = phase === "forming" ? 0.08 : phase === "radiating" ? 0.15 : 0.06
      p.vx += (p.targetX - p.x) * springStrength
      p.vy += (p.targetY - p.y) * springStrength
      p.vx *= 0.9
      p.vy *= 0.9
      p.x += p.vx
      p.y += p.vy

      // Draw particle
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()

      // White core for visibility
      ctx.fillStyle = "rgba(255,255,255,0.6)"
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2)
      ctx.fill()
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [enableRadiation, radiationInterval, interactive, backgroundColor])

  // Handle resize
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      const ctx = canvas.getContext("2d")
      if (ctx) ctx.scale(dpr, dpr)
      initParticles(rect.width, rect.height)
    }

    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [initParticles])

  // Mouse tracking
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !interactive) return

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX
      const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY
      if (clientX !== undefined && clientY !== undefined) {
        mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top }
      }
    }

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener("mousemove", handleMove)
    canvas.addEventListener("touchmove", handleMove)
    canvas.addEventListener("mouseleave", handleLeave)

    return () => {
      canvas.removeEventListener("mousemove", handleMove)
      canvas.removeEventListener("touchmove", handleMove)
      canvas.removeEventListener("mouseleave", handleLeave)
    }
  }, [interactive])

  useEffect(() => {
    if (isReady && isVisible) {
      animationRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isReady, isVisible, animate])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity }} />
    </div>
  )
}

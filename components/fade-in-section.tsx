"use client"

import { useState } from "react"

import type React from "react"

import { useRef, useEffect } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
}

export function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const domRef = useRef<HTMLDivElement>(null)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{
        transitionDelay: `${delay}s`,
      }}
      ref={domRef}
    >
      {children}
    </div>
  )
}

export default FadeInSection

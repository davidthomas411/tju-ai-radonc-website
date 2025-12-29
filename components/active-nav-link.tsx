"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface ActiveNavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ActiveNavLink({ href, children, className = "" }: ActiveNavLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href)
      if (!section) return

      const rect = section.getBoundingClientRect()
      const isInView = rect.top <= 100 && rect.bottom >= 100

      setIsActive(isInView)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [href])

  return (
    <a
      href={href}
      className={`text-base font-medium hover:text-jefferson-bright-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-jefferson-bright-blue after:transition-all after:duration-300 hover:after:w-full ${
        isActive ? "text-white font-bold after:w-full" : "text-white/90"
      } ${className}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </a>
  )
}

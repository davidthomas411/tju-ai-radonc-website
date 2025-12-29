"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

interface Stat {
  title: string
  value: string
  description: string
}

export default function ModernHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const stats: Stat[] = [
    {
      title: "Grant Funding",
      value: "$8M+",
      description: "in AI-related grants",
    },
    {
      title: "Funding Sources",
      value: "Multiple",
      description: "Grants from NCI, NIH, Industry, Cancer Center",
    },
    {
      title: "Clinical Trials",
      value: "4",
      description: "Prospective Clinical Trials",
    },
    {
      title: "Patents",
      value: "3",
      description: "Patent applications",
    },
    {
      title: "Publications",
      value: "10+",
      description: "Peer-reviewed journal publications per year",
    },
    {
      title: "Presentations",
      value: "15-20",
      description: "Presentations at National/International Conferences per year",
    },
  ]

  useEffect(() => {
    if (shouldReduceMotion) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % stats.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [shouldReduceMotion, stats.length])

  return (
    <div className="w-full">
      <div className="space-y-10">
        <div className="pt-6 relative h-32">
          {shouldReduceMotion ? (
            <div className="absolute inset-0">
              <div className="flex flex-col">
                <div className="flex items-end gap-2">
                  <span className="text-6xl font-bold text-white tracking-tight">{stats[activeIndex].value}</span>
                  <span className="text-2xl text-white/80 mb-1">{stats[activeIndex].title}</span>
                </div>
                <p className="text-white/70 text-lg">{stats[activeIndex].description}</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="flex flex-col">
                  <div className="flex items-end gap-2">
                    <span className="text-6xl font-bold text-white tracking-tight">{stats[activeIndex].value}</span>
                    <span className="text-2xl text-white/80 mb-1">{stats[activeIndex].title}</span>
                  </div>
                  <p className="text-white/70 text-lg">{stats[activeIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex space-x-2">
            {stats.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-jefferson-bright-blue" : "bg-white/30"
                }`}
                aria-label={`View ${stats[index].title} statistic`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="px-8 text-base bg-jefferson-bright-blue hover:bg-jefferson-bright-blue/90 text-jefferson-deep-blue"
          >
            <Link href="/projects">Our Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

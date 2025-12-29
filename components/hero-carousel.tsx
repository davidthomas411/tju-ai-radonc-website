"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CarouselItem {
  title: string
  description: string
  stat: string
  color: string
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const items: CarouselItem[] = [
    {
      title: "AI-Related Grants",
      description: "Secured significant funding to advance AI research in radiation oncology",
      stat: ">$8,000,000",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Diverse Funding Sources",
      description: "Grants from multiple prestigious organizations",
      stat: "NCI, NIH, Industry, Cancer Center",
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Clinical Trials",
      description: "Evaluating novel AI and ML methods in clinical care",
      stat: "4 Prospective Trials",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Patent Applications",
      description: "Innovative AI technologies with commercial potential",
      stat: "3 Patents",
      color: "bg-amber-50 border-amber-200",
    },
    {
      title: "Research Publications",
      description: "Sharing our findings with the scientific community",
      stat: "10+ Journal Publications/Year",
      color: "bg-red-50 border-red-200",
    },
    {
      title: "Conference Presentations",
      description: "Presenting our work at major scientific meetings",
      stat: "15-20 Presentations/Year",
      color: "bg-teal-50 border-teal-200",
    },
  ]

  const next = () => {
    setCurrent((current + 1) % items.length)
  }

  const prev = () => {
    setCurrent((current - 1 + items.length) % items.length)
  }

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      next()
    }, 5000)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className={`border-2 h-full ${item.color}`}>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="text-4xl font-bold text-primary">{item.stat}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${current === index ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

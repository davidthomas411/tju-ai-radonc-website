"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getLatestNews } from "@/lib/news-data"
import { Newspaper, ChevronRight } from "lucide-react"

export function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const newsItems = getLatestNews(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [newsItems.length])

  if (newsItems.length === 0) return null

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Newspaper className="h-5 w-5" />
            <span className="font-semibold text-sm">Latest News:</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {newsItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <Link href="/news" className="flex items-center gap-2 hover:underline">
                    <span className="text-sm truncate">{item.title}</span>
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link href="/news" className="text-sm font-medium hover:underline flex-shrink-0 hidden sm:block">
            View All News
          </Link>
        </div>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  variant?: "light" | "dark"
}

export default function BreadcrumbNav({ items, variant = "light" }: BreadcrumbNavProps) {
  const isDark = variant === "dark"
  const navTextClass = isDark ? "text-white/80" : "text-slate"
  const linkClass = isDark ? "text-white/80 hover:text-white" : "hover:text-jefferson-bright-blue"
  const currentClass = isDark ? "text-white" : "text-jefferson-deep-blue"
  const chevronClass = isDark ? "text-white/40" : "text-slate/50"

  return (
    <nav className={`flex items-center space-x-2 text-sm mb-6 ${navTextClass}`} aria-label="Breadcrumb">
      <Link href="/" className={`flex items-center transition-colors duration-200 ${linkClass}`}>
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className={`h-4 w-4 ${chevronClass}`} />
          {index === items.length - 1 || !item.href ? (
            <span className={`font-medium ${currentClass}`}>{item.label}</span>
          ) : (
            <Link href={item.href} className={`transition-colors duration-200 ${linkClass}`}>
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface MobileNavItem {
  label: string
  href: string
}

interface MobileNavProps {
  items?: MobileNavItem[]
}

const defaultItems: MobileNavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "News", href: "/news" },
  { label: "Publications", href: "/publications" },
  { label: "Students", href: "/students" },
  { label: "Patents & IP", href: "/patents" },
  { label: "About", href: "/about" },
]

export default function MobileNav({ items = defaultItems }: MobileNavProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ""
    buttonRef.current?.focus()
  }, [])

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev
      document.body.style.overflow = next ? "hidden" : ""
      return next
    })
  }

  const isActiveRoute = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => {
    if (!isOpen) return

    const panel = panelRef.current
    if (!panel) return

    const focusables = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    first?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key === "Tab" && focusables.length > 1) {
        const activeElement = document.activeElement
        if (event.shiftKey && activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [closeMenu, isOpen])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMenu}
        ref={buttonRef}
        className="bg-white/10 hover:bg-white/20 border-white/20"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[60] w-3/4 max-w-sm bg-jefferson-deep-blue/98 backdrop-blur-lg pt-20 px-6 shadow-2xl border-l border-white/10"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              id="mobile-nav-panel"
              ref={panelRef}
            >
              <div className="flex flex-col items-center mb-8">
                <Link href="/" className="flex items-center">
                  <div className="relative w-56 h-16" style={{ minWidth: "224px", minHeight: "64px" }}>
                    <Image
                      src="/images/jefferson-logo.png"
                      alt="Thomas Jefferson University"
                      fill
                      className="object-contain"
                      sizes="224px"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col space-y-4 text-left">
                {items.map((item) => {
                  const isAnchor = item.href.startsWith("#")
                  const isActive = !isAnchor && isActiveRoute(item.href)
                  const itemClass = `text-lg font-medium py-4 px-4 rounded-lg transition-all duration-200 border-b border-white/10 ${
                    isActive ? "text-jefferson-bright-blue" : "text-white hover:bg-white/10"
                  }`

                  if (isAnchor) {
                    return (
                      <a key={item.label} href={item.href} className={itemClass} onClick={closeMenu}>
                        {item.label}
                      </a>
                    )
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={itemClass}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

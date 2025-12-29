"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import JeffersonLogo from "@/components/jefferson-logo"
import MobileNav from "@/components/mobile-nav"

const baseLinkClass =
  "text-base font-medium hover:text-jefferson-bright-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-jefferson-bright-blue after:transition-all after:duration-300 hover:after:w-full"

const pageNav = [
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "News", href: "/news" },
  { label: "Publications", href: "/publications" },
  { label: "About", href: "/about" },
]

const pageMobileNav = [
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "News", href: "/news" },
  { label: "Publications", href: "/publications" },
  { label: "Students", href: "/students" },
  { label: "Patents & IP", href: "/patents" },
  { label: "About", href: "/about" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={`w-full border-b bg-jefferson-deep-blue text-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-jefferson-deep-blue/95 shadow-lg" : "shadow-md"
      }`}
    >
      <div
        className={`container flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
          isScrolled ? "h-20" : "h-24"
        }`}
      >
        <JeffersonLogo isScrolled={isScrolled} />
        <nav className="hidden md:flex gap-6 items-center" aria-label="Main">
          {pageNav.map((item) => {
            const isActive = isActiveRoute(item.href)
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${baseLinkClass} ${isActive ? "text-white font-bold after:w-full" : "text-white/90"}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 bg-white/10 hover:bg-jefferson-bright-blue hover:border-jefferson-bright-blue transition-all duration-200 border-white/20"
            asChild
          >
            <Link href="mailto:David.thomas2@jefferson.edu">
              <Mail className="h-5 w-5 text-white" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
          <MobileNav items={pageMobileNav} />
        </div>
      </div>
    </header>
  )
}

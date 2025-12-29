"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects",
    },
    {
      href: "/team",
      label: "Team",
      active: pathname === "/team",
    },
    {
      href: "/news",
      label: "News",
      active: pathname === "/news",
    },
    {
      href: "/publications",
      label: "Publications",
      active: pathname === "/publications",
    },
  ]

  return (
    <nav className="flex items-center space-x-8">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-cyan-400",
            route.active ? "text-white" : "text-white/80",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

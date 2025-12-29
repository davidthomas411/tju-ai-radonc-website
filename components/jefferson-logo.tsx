import Image from "next/image"
import Link from "next/link"

interface JeffersonLogoProps {
  className?: string
  isScrolled?: boolean
}

export default function JeffersonLogo({ className = "", isScrolled = false }: JeffersonLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Link href="/" className="flex items-center group relative">
        <div
          className={`relative transition-all duration-500 ease-out group-hover:scale-105 ${
            isScrolled ? "w-0 h-0 opacity-0 -translate-x-4" : "w-56 h-16 opacity-100 translate-x-0"
          }`}
        >
          <Image
            src="/images/jefferson-logo.png"
            alt="Thomas Jefferson University"
            fill
            className="object-contain object-left"
            priority
            sizes="224px"
          />
        </div>

        <div
          className={`relative transition-all duration-500 ease-out group-hover:scale-105 ${
            isScrolled ? "w-12 h-12 opacity-100 translate-x-0" : "w-0 h-0 opacity-0 translate-x-4"
          }`}
        >
          <Image
            src="/images/jefferson-j-logo.svg"
            alt="Jefferson University"
            fill
            className="object-contain"
            priority
            sizes="48px"
          />
        </div>
      </Link>
    </div>
  )
}

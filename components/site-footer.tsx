import Image from "next/image"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-jefferson-deep-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 jefferson-transverse-lines opacity-10" />
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative w-20 h-20 md:hidden" style={{ minWidth: "80px", minHeight: "80px" }}>
            <Image
              src="/images/jefferson-logo.png"
              alt="Thomas Jefferson University"
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
          <p className="text-sm text-white/80">© 2025 Thomas Jefferson University | Sidney Kimmel Medical College</p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-white/80 hover:text-jefferson-bright-blue transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-white/80 hover:text-jefferson-bright-blue transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

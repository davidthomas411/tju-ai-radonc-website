import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Center for Excellence in AI | Thomas Jefferson University",
  description:
    "Advancing clinical AI and machine learning in radiation oncology through research, collaboration, and education.",
  metadataBase: new URL("https://tjuradoncai.vercel.app/"),
  authors: [{ name: "Dr. David Thomas", url: "https://www.thomas-lab.com" }],
  creator: "Thomas Lab at Jefferson University",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

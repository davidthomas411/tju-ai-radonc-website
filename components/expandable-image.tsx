"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Maximize2, X } from "lucide-react"

interface ExpandableImageProps {
  src: string
  alt: string
  caption?: string
}

export default function ExpandableImage({ src, alt, caption }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="relative aspect-[4/3] w-full cursor-pointer" onClick={() => setIsOpen(true)}>
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Button
            size="sm"
            variant="secondary"
            className="absolute bottom-2 right-2 opacity-80 hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(true)
            }}
          >
            <Maximize2 className="h-4 w-4 mr-1" />
            Expand
          </Button>
        </div>
        {caption && <p className="text-xs text-center p-2 text-gray-500">{caption}</p>}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          <div className="relative w-full h-[80vh]">
            <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" sizes="90vw" />
            <Button
              size="sm"
              variant="outline"
              className="absolute top-2 right-2 z-10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {caption && (
            <div className="p-4 bg-white border-t">
              <p className="text-sm text-center text-gray-700">{caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

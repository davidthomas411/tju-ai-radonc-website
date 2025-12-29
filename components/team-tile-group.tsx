"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Mail, ExternalLink } from "lucide-react"

interface TeamMember {
  name: string
  title: string
  description: string
  imageSrc: string
}

interface TeamTileGroupProps {
  title: string
  members: TeamMember[]
}

export function TeamTileGroup({ title, members }: TeamTileGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  // Show max 5 cards in the fan, use +X for remaining
  const displayMembers = members.slice(0, 5)
  const remainingCount = members.length - 5

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-jefferson-deep-blue to-jefferson-bright-blue bg-clip-text text-transparent">
        {title}
      </h2>

      <div className="flex justify-center">
        <div
          className={cn("relative transition-all duration-500 cursor-pointer", isExpanded ? "w-full" : "w-80 h-96")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? (
            <>
              <div className="relative w-full h-full">
                {displayMembers.map((member, index) => {
                  // Calculate rotation and offset for fan effect
                  const totalCards = displayMembers.length + (remainingCount > 0 ? 1 : 0)
                  const centerIndex = (totalCards - 1) / 2
                  const offset = index - centerIndex

                  // Normal state: tighter fan
                  const normalRotation = offset * 3
                  const normalTranslateX = offset * 15
                  const normalTranslateY = Math.abs(offset) * 5

                  // Hover state: wider fan
                  const hoverRotation = offset * 8
                  const hoverTranslateX = offset * 35
                  const hoverTranslateY = Math.abs(offset) * 3

                  const rotation = isHovered ? hoverRotation : normalRotation
                  const translateX = isHovered ? hoverTranslateX : normalTranslateX
                  const translateY = isHovered ? hoverTranslateY : normalTranslateY

                  return (
                    <div
                      key={index}
                      className={cn(
                        "absolute left-1/2 top-1/2 w-48 h-64 -ml-24 -mt-32 transition-all duration-300",
                        isHovered && "shadow-2xl scale-105",
                      )}
                      style={{
                        transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`,
                        zIndex: 10 + index,
                      }}
                    >
                      <div className="w-full h-full overflow-hidden border-2 border-white shadow-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg">
                        <div className="relative w-full h-full">
                          <Image
                            src={member.imageSrc || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <div className="w-12 h-12 rounded-full bg-jefferson-bright-blue/90 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {getInitials(member.name)}
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                              {member.name.split(",")[0]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {remainingCount > 0 && (
                  <div
                    className={cn(
                      "absolute left-1/2 top-1/2 w-48 h-64 -ml-24 -mt-32 transition-all duration-300",
                      isHovered && "shadow-2xl scale-105",
                    )}
                    style={{
                      transform: `translate(${isHovered ? (displayMembers.length - 2) * 35 : (displayMembers.length - 2) * 15}px, ${isHovered ? 3 : 5}px) rotate(${isHovered ? (displayMembers.length - 2) * 8 : (displayMembers.length - 2) * 3}deg)`,
                      zIndex: 10 + displayMembers.length,
                    }}
                  >
                    <div className="w-full h-full overflow-hidden border-2 border-jefferson-bright-blue shadow-xl bg-gradient-to-br from-jefferson-deep-blue to-jefferson-bright-blue rounded-lg">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white font-bold text-6xl">+{remainingCount}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-max">
                <div className="px-4 py-2 text-base font-semibold bg-gradient-to-r from-jefferson-deep-blue to-jefferson-bright-blue text-white border-0 shadow-lg rounded-full">
                  {title.split(" ").slice(-2).join(" ")} • {members.length}{" "}
                  {members.length === 1 ? "member" : "members"}
                </div>
              </div>
            </>
          ) : (
            <div className="w-full border-2 border-jefferson-bright-blue shadow-2xl focus-visible:ring-4 focus-visible:ring-jefferson-bright-blue/20 animate-in zoom-in-95 duration-300 rounded-lg bg-white dark:bg-gray-900">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-jefferson-deep-blue">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {members.length} {members.length === 1 ? "member" : "members"}
                    </p>
                  </div>
                  <button
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsExpanded(false)
                    }}
                  >
                    Close
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                  {members.map((member, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-jefferson-bright-blue hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white dark:ring-gray-800 shadow-md group-hover:ring-jefferson-bright-blue transition-all">
                          <Image
                            src={member.imageSrc || "/placeholder.svg"}
                            alt={member.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-jefferson-deep-blue mb-1 truncate">{member.name}</h4>
                          <p className="text-xs text-jefferson-bright-blue font-medium mb-2 line-clamp-2">
                            {member.title}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">{member.description}</p>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="flex items-center gap-1 text-xs text-jefferson-bright-blue hover:text-jefferson-deep-blue transition-colors">
                          <Mail className="w-3 h-3" />
                          Contact
                        </button>
                        <button className="flex items-center gap-1 text-xs text-jefferson-bright-blue hover:text-jefferson-deep-blue transition-colors">
                          <ExternalLink className="w-3 h-3" />
                          Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { FaceTracker } from "@/components/face-tracker"
import type { FacultyMember } from "@/lib/faculty-data"

interface TeamMemberCardProps {
  member: FacultyMember
  showDescription?: boolean
}

export default function TeamMemberCard({ member, showDescription = false }: TeamMemberCardProps) {
  return (
    <Link href={`/team/${member.slug}`} className="block group h-full">
      <div className="flex h-full flex-col overflow-hidden border-2 hover:border-jefferson-bright-blue transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-lg bg-white dark:bg-gray-900">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-jefferson-deep-blue/5 to-jefferson-bright-blue/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 overflow-hidden rounded-full ring-4 ring-white shadow-xl group-hover:scale-110 transition-transform duration-300">
              <FaceTracker
                blobFaceId={member.blobFaceId}
                fallbackImage={member.fallbackImage}
                alt={member.name}
                size={192}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 text-center">
          <h3 className="text-xl font-bold text-jefferson-deep-blue mb-1">{member.name}</h3>
          <p className="text-sm font-medium text-jefferson-bright-blue mb-2">{member.title}</p>
          {member.subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{member.subtitle}</p>
          )}
          {showDescription && member.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2">{member.description}</p>
          )}
        </div>
      </div>
    </Link>
  )
}

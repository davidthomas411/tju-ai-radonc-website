import { BookOpen, Heart, Shield, Target } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type ProjectAreaTone = "blue" | "green" | "red" | "navy"

export interface ProjectArea {
  id: string
  title: string
  navLabel?: string
  description: string
  highlights: string[]
  icon: LucideIcon
  tone: ProjectAreaTone
}

export const projectAreas: ProjectArea[] = [
  {
    id: "quality-safety",
    title: "Quality & Safety",
    description: "AI and ML projects that elevate precision, safety, and reliability in care delivery.",
    highlights: ["AI automated contouring", "AI automated treatment planning", "ML for adaptive radiotherapy"],
    icon: Shield,
    tone: "blue",
  },
  {
    id: "reducing-side-effects",
    title: "Reducing Side Effects",
    description: "Clinical AI designed to predict and prevent toxicity throughout treatment.",
    highlights: ["AI-based functional imaging", "Toxicity risk modeling", "Dose and response prediction"],
    icon: Heart,
    tone: "green",
  },
  {
    id: "improving-cure-rates",
    title: "Improving Cure Rates",
    description: "Machine learning that strengthens detection, decision support, and outcomes.",
    highlights: ["Early detection AI", "Treatment response modeling", "Prognostic signatures"],
    icon: Target,
    tone: "red",
  },
  {
    id: "education",
    title: "AI & ML Education",
    navLabel: "Education",
    description: "Training clinicians, physicists, and students to apply AI in real-world care.",
    highlights: ["NVIDIA-certified training", "Residency curriculum integration", "Student AI projects"],
    icon: BookOpen,
    tone: "navy",
  },
]

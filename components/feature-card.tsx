import { Target, Package, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Target":
        return <Target className="h-10 w-10 text-primary" />
      case "Package":
        return <Package className="h-10 w-10 text-primary" />
      case "Brain":
        return <Brain className="h-10 w-10 text-primary" />
      default:
        return <Target className="h-10 w-10 text-primary" />
    }
  }

  return (
    <Card className="flex flex-col items-center text-center p-6 space-y-4">
      {getIcon(icon)}
      <CardContent className="p-0 space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

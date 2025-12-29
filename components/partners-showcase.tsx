export default function PartnersShowcase() {
  const partners = [
    {
      name: "MIM Software",
      logo: "/placeholder.svg?height=60&width=180&text=MIM+Software",
    },
    {
      name: "NIH National Cancer Institute",
      logo: "/placeholder.svg?height=60&width=180&text=NIH+NCI",
    },
    {
      name: "Varian Medical Systems",
      logo: "/placeholder.svg?height=60&width=180&text=Varian",
    },
    {
      name: "Medical Physics",
      logo: "/placeholder.svg?height=60&width=180&text=Medical+Physics",
    },
  ]

  return (
    <div className="py-8">
      <h3 className="text-center text-lg font-medium text-gray-600 mb-6">Our Partners & Collaborators</h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
            <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12 object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

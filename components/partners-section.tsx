export default function PartnersSection() {
  const partners = [
    {
      name: "MIM Software",
      logo: "/placeholder.svg?height=40&width=140&text=MIM+Software",
    },
    {
      name: "NIH National Cancer Institute",
      logo: "/placeholder.svg?height=40&width=140&text=NIH+NCI",
    },
    {
      name: "Varian Medical Systems",
      logo: "/placeholder.svg?height=40&width=140&text=Varian",
    },
    {
      name: "Medical Physics",
      logo: "/placeholder.svg?height=40&width=140&text=Medical+Physics",
    },
  ]

  return (
    <div className="w-full relative overflow-hidden bg-transparent py-10">
      <div className="border-t pt-8">
        <div className="flex flex-wrap justify-between items-center gap-x-8 gap-y-6">
          {partners.map((partner, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

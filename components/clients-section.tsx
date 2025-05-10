import Image from "next/image"

export default function ClientsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">Our Clients</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="h-24 w-48 relative mb-6">
              <Image src="/placeholder.svg?height=96&width=192" alt="Pfizer logo" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Expertise in Pfizer Covid Production and Process Engineering
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-24 w-48 relative mb-6">
              <Image src="/placeholder.svg?height=96&width=192" alt="Novartis logo" fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">Novartis</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

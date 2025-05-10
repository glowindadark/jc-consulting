import Link from "next/link"

interface HeroSectionProps {
  title: string
  ctaText: string
  ctaLink: string
}

export default function HeroSection({ title, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="relative h-[80vh] flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">{title}</h1>
          <Link
            href={ctaLink}
            className="inline-block bg-white text-gray-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}

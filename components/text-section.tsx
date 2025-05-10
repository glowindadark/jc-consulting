interface TextSectionProps {
  title: string
  content: string
}

export default function TextSection({ title, content }: TextSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </section>
  )
}

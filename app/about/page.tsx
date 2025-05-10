import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">About JC-Consulting</h1>

            <div className="prose prose-lg max-w-none">
              <p>
                This is the about page. You can add your company history, mission, values, and team information here.
              </p>
              <p>
                Customize this page with information about your consulting services, expertise in the pharmaceutical
                industry, and what makes your approach unique.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

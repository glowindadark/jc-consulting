import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import TextSection from "@/components/text-section"
import ClientsSection from "@/components/clients-section"
import CtaSection from "@/components/cta-section"

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection
          title="JC-Consulting, pragmatically engineering your process and projects."
          ctaText="Get Started"
          ctaLink="/contact"
        />

        <TextSection
          title="Making a Difference in the Pharmaceutical Industry."
          content="At JC Consulting, we are proud to have recently completed several successful projects in the pharmaceutical industry. From improving facilities and streamlining production processes to managing complex projects, we bring our expertise and dedication to every assignment. Check out our website for more information on our services and how we can help your business succeed."
        />

        <ClientsSection />

        <CtaSection
          title="Let's Work Together"
          content="We're always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  )
}

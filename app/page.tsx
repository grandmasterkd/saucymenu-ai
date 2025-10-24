import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProblemsSection } from "@/components/problems-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main>
      <Navigation />
        <HeroSection />
        <FeaturesSection />    
        <ProblemsSection />  
        <FAQSection />
        <CTASection />
        <Footer />
    </main>
  )
}

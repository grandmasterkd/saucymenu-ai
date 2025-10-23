import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
// import { GrowthSection } from "@/components/growth-section"
import { ProblemsSection } from "@/components/problems-section"
// import { SolutionsSection } from "@/components/solutions-section"
// import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="">
        <HeroSection />
        <FeaturesSection />
        {/* <GrowthSection /> */}
        <ProblemsSection />
        {/* <SolutionsSection /> */}
        {/* <PricingSection /> */}
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}

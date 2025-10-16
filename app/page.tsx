import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TargetSection } from "@/components/target-section"
// import { GrowthSection } from "@/components/growth-section"
import { ProblemsSection } from "@/components/problems-section"
import { SolutionsSection } from "@/components/solutions-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TargetSection />
      {/* <GrowthSection /> */}
      <ProblemsSection />
      <SolutionsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}

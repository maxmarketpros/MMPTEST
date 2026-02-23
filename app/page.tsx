import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CoreDeliverablesPillars } from "@/components/core-deliverables-pillars"
import { TargetedTakeoverMap } from "@/components/targeted-takeover-map"
import { CostOfInaction } from "@/components/cost-of-inaction"
import { GrowthCommandCenter } from "@/components/growth-command-center"
import { PricingSection } from "@/components/pricing-section"
import { OnboardingTimeline } from "@/components/onboarding-timeline"

export default function Home() {
  return (
    <main style={{ background: "var(--wash)" }}>
      <Navbar />
      <HeroSection />
      <CoreDeliverablesPillars />
      <TargetedTakeoverMap />
      <CostOfInaction />
      <PricingSection />
      <OnboardingTimeline />
      <GrowthCommandCenter />
    </main>
  )
}

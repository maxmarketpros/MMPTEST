import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CoreDeliverablesPillars } from "@/components/core-deliverables-pillars"
import { TargetedTakeoverMap } from "@/components/targeted-takeover-map"
import { GrowthCommandCenter } from "@/components/growth-command-center"
import { PricingSection } from "@/components/pricing-section"
import { OnboardingTimeline } from "@/components/onboarding-timeline"
import { WebsiteShowcaseSection } from "@/components/website-showcase-section"

export default function Home() {
  return (
    <main style={{ background: "var(--wash)" }}>
      <Navbar />
      <HeroSection />
      <CoreDeliverablesPillars />
      <TargetedTakeoverMap />
      <WebsiteShowcaseSection />
      <PricingSection />
      <OnboardingTimeline />
      <GrowthCommandCenter />
    </main>
  )
}

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DeliverablesSection } from "@/components/deliverables-section"

export default function Home() {
  return (
    <main style={{ background: "var(--wash)" }}>
      <Navbar />
      <HeroSection />
      <DeliverablesSection />
    </main>
  )
}

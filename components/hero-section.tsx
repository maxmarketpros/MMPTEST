import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BeforeAfterCard } from "./before-after-card"
import { PartnerLogos } from "./partner-logos"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--wash)" }}>
      {/* Noise overlay — very subtle */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
        style={{
          backgroundImage: "url(/hero/noise.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Dot pattern — faded with mask so it stays near the right visual */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(ellipse 50% 60% at 75% 45%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 60% at 75% 45%, black 10%, transparent 70%)",
        }}
      />

      {/* Radial blobs */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 z-0 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,176,240,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 z-0 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      {/* SVG Ribbon Stack — bottom-right layered gradient bands (BIGGER) */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          bottom: "-220px",
          right: "-640px",
          width: "2000px",
          height: "700px",
          transform: "rotate(-10deg)",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)",
        }}
      >
        {/* Glow layer behind everything */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 2000 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(60px)", opacity: 0.22 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glow-grad" x1="0" y1="0" x2="2000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00B0F0" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#00B0F0" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#2563EB" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0 300 C400 220, 800 150, 1200 200 C1600 250, 1800 380, 2000 350 L2000 520 C1800 540, 1600 430, 1200 400 C800 370, 400 450, 0 420 Z" fill="url(#glow-grad)" />
        </svg>

        {/* Band 1 — base (most opaque) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 2000 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.65, filter: "blur(1px)" }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="band1-grad" x1="0" y1="0" x2="2000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00B0F0" stopOpacity="0.08" />
              <stop offset="25%" stopColor="#00B0F0" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#2563EB" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d="M0 260 C320 210, 700 130, 1100 180 C1500 230, 1750 400, 2000 360 L2000 490 C1750 530, 1500 380, 1100 340 C700 300, 320 400, 0 370 Z" fill="url(#band1-grad)" />
        </svg>

        {/* Band 2 — mid (lighter, offset down) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 2000 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.45, filter: "blur(6px)" }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="band2-grad" x1="0" y1="0" x2="2000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00B0F0" stopOpacity="0.04" />
              <stop offset="30%" stopColor="#00B0F0" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#2563EB" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path d="M0 320 C360 270, 740 200, 1140 250 C1540 300, 1780 440, 2000 410 L2000 540 C1780 570, 1540 440, 1140 410 C740 380, 360 480, 0 450 Z" fill="url(#band2-grad)" />
        </svg>

        {/* Band 3 — soft diffuse (offset further) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 2000 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.28, filter: "blur(14px)" }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="band3-grad" x1="0" y1="0" x2="2000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00B0F0" stopOpacity="0.0" />
              <stop offset="30%" stopColor="#00B0F0" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="70%" stopColor="#2563EB" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M0 370 C380 310, 760 250, 1160 290 C1560 330, 1800 470, 2000 450 L2000 570 C1800 590, 1560 480, 1160 450 C760 420, 380 520, 0 490 Z" fill="url(#band3-grad)" />
        </svg>

        {/* Band 4 — thin highlight stroke lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 2000 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.22 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="band4-grad" x1="0" y1="0" x2="2000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00B0F0" stopOpacity="0.0" />
              <stop offset="25%" stopColor="#00B0F0" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#2563EB" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M0 280 C340 235, 720 165, 1120 205 C1520 245, 1760 370, 2000 340" stroke="url(#band4-grad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M0 400 C370 350, 750 290, 1150 330 C1550 370, 1790 490, 2000 465" stroke="url(#band4-grad)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-8 pt-12 sm:pt-16 lg:pb-12 lg:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left column */}
          <div className="lg:col-span-6">
            {/* Eyebrow pill */}
            <div
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium shadow-sm"
              style={{
                background: "rgba(255,255,255,0.80)",
                borderColor: "var(--hairline)",
                color: "var(--text-700)",
              }}
            >
              Trusted by 500+ local service businesses
            </div>

            {/* Headline */}
            <h1
              className="mt-6 max-w-[560px] text-[36px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[48px] lg:text-[64px] lg:leading-[1.03]"
              style={{ color: "var(--ink-900)" }}
            >
              <span className="relative inline-block">
                Grow on Google.
                {/* Gradient highlight bar behind the baseline */}
                <span
                  className="absolute -z-10 rounded-full bottom-[2px] sm:bottom-[4px] lg:bottom-[8px]"
                  style={{
                    height: "8px",
                    left: "-6px",
                    right: "-6px",
                    background:
                      "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))",
                    opacity: 0.35,
                  }}
                />
              </span>
              <br />
              {'Get more calls &\u00A0booked\u00A0jobs.'}
            </h1>

            {/* Subhead */}
            <p
              className="mt-5 max-w-md text-base font-medium leading-relaxed sm:text-lg"
              style={{ color: "var(--text-700)", lineHeight: 1.6 }}
            >
              {'Done-for-you local SEO, web design, and lead generation\u2014built for service businesses.'}
              <br />
              Convert more leads with reviews, messaging, and fast follow-up tools in one place.
            </p>

            {/* CTA row */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold tracking-[-0.01em] text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-px"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-cyan) 0%, var(--brand-blue) 100%)",
                }}
              >
                Book a free demo
              </Link>
              <Link
                href="#pricing"
                className="group inline-flex items-center gap-1.5 text-[15px] font-semibold tracking-[-0.01em] transition-colors hover:text-[var(--brand-blue)]"
                style={{ color: "var(--ink-900)" }}
              >
                {'See plans & pricing'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Micro reassurance */}
            <p
              className="mt-5 text-sm font-medium"
              style={{ color: "var(--muted-600)" }}
            >
              {'Free strategy \u00B7 Done-for-you setup \u00B7 For service businesses'}
            </p>
          </div>

          {/* Right column */}
          <div className="relative lg:col-span-6">
            {/* Primary aura — soft radial glow behind the card */}
            <div
              className="pointer-events-none absolute hidden lg:block"
              style={{
                right: "-80px",
                top: "90px",
                width: "860px",
                height: "520px",
                borderRadius: "9999px",
                background:
                  "radial-gradient(ellipse at center, rgba(0,176,240,0.22) 0%, rgba(37,99,235,0.14) 40%, transparent 70%)",
                filter: "blur(22px)",
                maskImage:
                  "radial-gradient(closest-side, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "radial-gradient(closest-side, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                zIndex: 0,
              }}
            />
            {/* Secondary lower glow — subtle depth boost */}
            <div
              className="pointer-events-none absolute hidden lg:block"
              style={{
                right: "-220px",
                bottom: "40px",
                width: "900px",
                height: "420px",
                borderRadius: "9999px",
                background:
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.10) 0%, transparent 70%)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />
            <div className="relative z-[1]">
              <BeforeAfterCard />
            </div>
          </div>
        </div>
      </div>

      {/* Featured partners — inside hero wash */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-12">
        <PartnerLogos />
      </div>
    </section>
  )
}

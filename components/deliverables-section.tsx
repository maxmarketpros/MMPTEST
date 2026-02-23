"use client"

import Link from "next/link"
import {
  ArrowRight,
  Monitor,
  MapPin,
  Star,
  Inbox,
  Layers,
  Zap,
  Search,
  BadgeCheck,
  MessageSquare,
  Phone,
} from "lucide-react"

/* ─── Micro-row ─── */
function MicroRow({
  icon,
  label,
  descriptor,
}: {
  icon: React.ReactNode
  label: string
  descriptor: string
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
        style={{
          background: "rgba(0,176,240,0.08)",
          color: "var(--brand-cyan)",
        }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <p className="text-sm leading-snug" style={{ color: "var(--text-700)" }}>
        <span className="font-medium" style={{ color: "var(--ink-900)" }}>
          {label}
        </span>
        {" \u2014 "}
        {descriptor}
      </p>
    </div>
  )
}

/* ─── Card shell ─── */
function DeliverableCard({
  icon,
  title,
  description,
  rows,
  output,
  isPrimary = false,
  className = "",
}: {
  icon: React.ReactNode
  title: string
  description: string
  rows: { icon: React.ReactNode; label: string; descriptor: string }[]
  output: string
  isPrimary?: boolean
  className?: string
}) {
  return (
    <div
      className={`group flex flex-col rounded-[22px] border transition-all duration-300 hover:-translate-y-[3px] ${className}`}
      style={{
        background: "var(--card)",
        borderColor: "rgba(11,18,32,0.08)",
        boxShadow: "0 24px 60px rgba(11,18,32,0.10)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 28px 80px rgba(11,18,32,0.12)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 24px 60px rgba(11,18,32,0.10)"
      }}
    >
      <div className={isPrimary ? "p-6 lg:p-7" : "p-5 lg:p-6"}>
        {/* Accent bar */}
        <div
          className="mt-1 h-[2px] w-[72px] rounded-full transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))",
            opacity: 0.7,
          }}
        />

        {/* Icon plate + title */}
        <div className="mt-5 flex items-center gap-3.5">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
            style={{
              background: "rgba(0,176,240,0.10)",
              borderColor: "rgba(0,176,240,0.25)",
              color: "var(--brand-cyan)",
            }}
            aria-hidden="true"
          >
            {icon}
          </span>
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--ink-900)" }}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="mt-3 leading-relaxed"
          style={{
            fontSize: "14.5px",
            color: "var(--text-700)",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>

        {/* Micro-rows */}
        <div className="mt-5 flex flex-col gap-3">
          {rows.map((row) => (
            <MicroRow
              key={row.label}
              icon={row.icon}
              label={row.label}
              descriptor={row.descriptor}
            />
          ))}
        </div>

        {/* Output line */}
        <div
          className="mt-5 border-t pt-4"
          style={{ borderColor: "rgba(11,18,32,0.08)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted-600)" }}>
            <span className="font-semibold">Output:</span> {output}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─── Section ─── */
export function DeliverablesSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--wash)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 pb-14 pt-14 lg:pb-20 lg:pt-20">
        {/* ── Header row ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2
              className="text-balance text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[36px]"
              style={{ color: "var(--ink-900)" }}
            >
              Everything you need to rank locally.
            </h2>
            <p
              className="mt-3 text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--text-700)", lineHeight: 1.6 }}
            >
              Google Business Profile optimization, an SEO-first website,
              reputation tools, and a simple CRM{"\u2014"}built for service
              businesses.
            </p>
          </div>

          {/* CTA group */}
          <div className="flex shrink-0 items-center gap-5">
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold tracking-[-0.01em] text-white shadow-lg transition-all hover:-translate-y-px hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-cyan) 0%, var(--brand-blue) 100%)",
              }}
            >
              Book a free demo
            </Link>
            <Link
              href="#pricing"
              className="group hidden items-center gap-1.5 text-[15px] font-semibold tracking-[-0.01em] transition-colors hover:text-[var(--brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2 sm:inline-flex"
              style={{ color: "var(--ink-900)" }}
            >
              {"See plans & pricing"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* ── Feature matrix ── */}
        <div className="relative mt-14">
          {/* Background decor — behind cards only */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            {/* Dot texture */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(37,99,235,0.06) 1.2px, transparent 1.2px)",
                backgroundSize: "14px 14px",
                opacity: 0.5,
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)",
              }}
            />
            {/* Cyan blob — left bottom */}
            <div
              className="absolute -bottom-20 -left-40 h-[500px] w-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,176,240,0.10) 0%, transparent 70%)",
              }}
            />
            {/* Blue blob — right top */}
            <div
              className="absolute -right-32 -top-20 h-[400px] w-[400px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Grid */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Primary card — left */}
            <DeliverableCard
              className="lg:col-span-5"
              isPrimary
              icon={<Monitor className="h-5 w-5" />}
              title="SEO-Optimized Website"
              description="A custom website built to rank locally and turn visits into calls."
              rows={[
                {
                  icon: <Layers className="h-3.5 w-3.5" />,
                  label: "Structure",
                  descriptor: "Service + location page system",
                },
                {
                  icon: <Zap className="h-3.5 w-3.5" />,
                  label: "Performance",
                  descriptor: "Speed + mobile-first build",
                },
                {
                  icon: <Search className="h-3.5 w-3.5" />,
                  label: "On-page SEO",
                  descriptor: "Titles, internal links, local schema",
                },
              ]}
              output="live SEO-first site + core pages"
            />

            {/* Right stack — 3 supporting cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <DeliverableCard
                icon={<MapPin className="h-5 w-5" />}
                title="Google Business Profile"
                description="Set up and optimize your GBP so you show up where customers are searching."
                rows={[
                  {
                    icon: <BadgeCheck className="h-3.5 w-3.5" />,
                    label: "Verification",
                    descriptor: "Setup + profile completion",
                  },
                  {
                    icon: <Layers className="h-3.5 w-3.5" />,
                    label: "Optimization",
                    descriptor: "Categories, services, service areas",
                  },
                  {
                    icon: <Search className="h-3.5 w-3.5" />,
                    label: "Trust signals",
                    descriptor: "Posts, photos, best-practice checklist",
                  },
                ]}
                output="optimized GBP + baseline checklist"
              />

              <DeliverableCard
                icon={<Star className="h-5 w-5" />}
                title="Reviews & Reputation"
                description="Build trust with a steady flow of reviews and a clean reputation presence."
                rows={[
                  {
                    icon: <MessageSquare className="h-3.5 w-3.5" />,
                    label: "Requests",
                    descriptor: "Review request system setup",
                  },
                  {
                    icon: <Search className="h-3.5 w-3.5" />,
                    label: "Monitoring",
                    descriptor: "Review monitoring + response workflow",
                  },
                  {
                    icon: <BadgeCheck className="h-3.5 w-3.5" />,
                    label: "On-site trust",
                    descriptor: "Badges, testimonials, proof blocks",
                  },
                ]}
                output="review system + reputation workflow"
              />

              <DeliverableCard
                className="sm:col-span-2"
                icon={<Inbox className="h-5 w-5" />}
                title="CRM + Lead Inbox"
                description="Capture and manage leads in one place with your white-label CRM."
                rows={[
                  {
                    icon: <Phone className="h-3.5 w-3.5" />,
                    label: "Inbox",
                    descriptor: "Calls, forms, messages in one place",
                  },
                  {
                    icon: <Layers className="h-3.5 w-3.5" />,
                    label: "Pipeline",
                    descriptor: "Contact management + stages",
                  },
                  {
                    icon: <Zap className="h-3.5 w-3.5" />,
                    label: "Follow-up",
                    descriptor: "Simple routing + reminders",
                  },
                ]}
                output="CRM workspace + lead routing setup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

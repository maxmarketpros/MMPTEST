"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="relative z-50 w-full" role="navigation" aria-label="Main navigation">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Max Market Pros home">
          <Image
            src="/brand/logo.png"
            alt="Max Market Pros"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Center links — desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium tracking-[-0.01em] transition-colors hover:text-[var(--brand-blue)]"
              style={{ color: "var(--text-700)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions — desktop */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="#login"
            className="text-[15px] font-medium transition-colors hover:text-[var(--brand-blue)]"
            style={{ color: "var(--ink-900)" }}
          >
            Log in
          </Link>
          <Link
            href="#demo"
            className="inline-flex h-11 items-center rounded-full px-6 text-[15px] font-semibold tracking-[-0.01em] text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, var(--brand-cyan) 0%, var(--brand-blue) 100%)",
            }}
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" style={{ color: "var(--ink-900)" }} />
          ) : (
            <Menu className="h-6 w-6" style={{ color: "var(--ink-900)" }} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-b bg-white px-6 pb-6 pt-2 shadow-lg lg:hidden" style={{ borderColor: "var(--hairline)" }}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium"
                style={{ color: "var(--text-700)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr style={{ borderColor: "var(--hairline)" }} />
            <Link
              href="#login"
              className="text-base font-medium"
              style={{ color: "var(--ink-900)" }}
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="#demo"
              className="inline-flex h-11 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, var(--brand-cyan) 0%, var(--brand-blue) 100%)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

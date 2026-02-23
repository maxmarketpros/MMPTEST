"use client"

import { useRef, useState, useCallback } from "react"
import {
  Star,
  TrendingUp,
  LayoutGrid,
  Search,
  FileText,
  BadgeCheck,
  ArrowRight,
} from "lucide-react"

/* ───── Google-yellow Star Row ───── */
function StarRow({
  filled,
  total = 5,
  muted,
}: {
  filled: number
  total?: number
  muted?: boolean
}) {
  return (
    <div className="flex items-center" style={{ gap: "2px" }}>
      {Array.from({ length: total }).map((_, i) => (
        <Star
          key={i}
          style={{
            width: "16px",
            height: "16px",
            fill: i < filled ? "#FBBC04" : "transparent",
            stroke: i < filled ? "transparent" : "rgba(60,64,67,0.20)",
            strokeWidth: i < filled ? 0 : 2,
            opacity: muted ? 0.4 : 1,
          }}
        />
      ))}
    </div>
  )
}

/* ───── KPI chip ───── */
function KpiChip({
  label,
  value,
  delta,
  muted,
}: {
  label: string
  value: string
  delta?: string
  muted?: boolean
}) {
  return (
    <div className="relative flex-1">
      {/* Delta pill floating above the box */}
      {delta && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
          <span
            className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-full border px-2 py-0.5 text-[11px] font-bold shadow-sm"
            style={{
              background: "rgba(52,168,83,0.12)",
              color: "#1e7e34",
              borderColor: "rgba(52,168,83,0.25)",
            }}
          >
            <TrendingUp className="h-2.5 w-2.5" />
            {delta}
          </span>
        </div>
      )}
      <div
        className="flex flex-col gap-0.5 rounded-lg border px-3 py-2.5"
        style={{
          background: delta ? "rgba(52,168,83,0.04)" : muted ? "rgba(0,0,0,0.015)" : "var(--wash)",
          borderColor: delta
            ? "rgba(52,168,83,0.18)"
            : muted ? "rgba(11,18,32,0.05)" : "rgba(11,18,32,0.06)",
        }}
      >
        <span
          className="text-[10px] font-medium uppercase tracking-wider"
          style={{ color: muted ? "rgba(95,99,104,0.5)" : "var(--muted-600)" }}
        >
          {label}
        </span>
        <span
          className="text-xl font-bold"
          style={{
            color: delta ? "#1e7e34" : muted ? "rgba(11,18,32,0.35)" : "var(--ink-900)",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  )
}

/* ───── Mini illustrative map ───── */
function MiniMap({ accented }: { accented?: boolean }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg border"
      style={{
        height: "80px",
        background: accented ? "#F4F9F5" : "#F7F8F9",
        borderColor: accented ? "rgba(52,168,83,0.12)" : "rgba(11,18,32,0.05)",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 120"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Roads */}
        <path
          d="M0 45 C100 35, 200 55, 300 40 C350 35, 380 42, 400 38"
          stroke={accented ? "rgba(60,64,67,0.10)" : "rgba(60,64,67,0.05)"}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 75 C120 68, 230 82, 350 72 C380 69, 395 74, 400 72"
          stroke={accented ? "rgba(60,64,67,0.07)" : "rgba(60,64,67,0.03)"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Blocks */}
        <rect x="30" y="15" width="50" height="25" rx="3" fill={accented ? "rgba(66,133,244,0.06)" : "rgba(66,133,244,0.02)"} />
        <rect x="240" y="12" width="60" height="22" rx="3" fill={accented ? "rgba(66,133,244,0.06)" : "rgba(66,133,244,0.02)"} />
        <rect x="310" y="60" width="45" height="28" rx="3" fill={accented ? "rgba(66,133,244,0.05)" : "rgba(66,133,244,0.015)"} />
        {/* Park */}
        <ellipse cx="180" cy="95" rx="40" ry="18" fill={accented ? "rgba(52,168,83,0.08)" : "rgba(52,168,83,0.02)"} />
      </svg>

      {/* Pins */}
      {accented ? (
        <>
          <div
            className="absolute rounded-full"
            style={{
              width: 9, height: 9,
              top: "25%", left: "30%",
              background: "#4285F4",
              boxShadow: "0 0 0 3px rgba(66,133,244,0.22), 0 1px 3px rgba(0,0,0,0.12)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 9, height: 9,
              top: "48%", left: "56%",
              background: "#4285F4",
              boxShadow: "0 0 0 3px rgba(66,133,244,0.22), 0 1px 3px rgba(0,0,0,0.12)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 9, height: 9,
              top: "35%", left: "75%",
              background: "#4285F4",
              boxShadow: "0 0 0 3px rgba(66,133,244,0.22), 0 1px 3px rgba(0,0,0,0.12)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 6, height: 6,
              top: "58%", left: "42%",
              background: "#34A853",
              boxShadow: "0 0 0 2px rgba(52,168,83,0.22)",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute rounded-full"
            style={{
              width: 6, height: 6,
              top: "35%", left: "42%",
              background: "rgba(11,18,32,0.10)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 5, height: 5,
              top: "52%", left: "60%",
              background: "rgba(11,18,32,0.06)",
            }}
          />
        </>
      )}

      {/* Label chip */}
      <div
        className="absolute bottom-1.5 left-1.5 rounded-full border px-2 py-0.5 text-[9px] font-medium"
        style={{
          background: accented ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
          color: accented ? "#1e7e34" : "rgba(95,99,104,0.7)",
          borderColor: accented ? "rgba(52,168,83,0.18)" : "rgba(11,18,32,0.06)",
        }}
      >
        {accented ? "More map exposure" : "Not in top 3"}
      </div>
    </div>
  )
}

/* ───── Bottom feature pill ───── */
function FeaturePill({
  icon,
  label,
  iconColor,
}: {
  icon: React.ReactNode
  label: string
  iconColor: string
}) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5" style={{ fontSize: "12px" }}>
      <span className="flex items-center" style={{ color: iconColor }}>
        {icon}
      </span>
      <span className="font-medium" style={{ color: "var(--text-700)" }}>
        {label}
      </span>
    </span>
  )
}

/* ═════════════════════════════════════════════════
   MAIN COMPONENT
   ═════════════════════════════════════════════════ */
export function BeforeAfterCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width  // 0 to 1
      const y = (e.clientY - rect.top) / rect.height   // 0 to 1
      const rotateY = (x - 0.5) * 16   // ±8 degrees
      const rotateX = (0.5 - y) * 12   // ±6 degrees
      setTilt({ rotateX, rotateY, glareX: x * 100, glareY: y * 100 })
    })
  }, [])

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 })
  }, [])

  return (
    <div
      className="relative w-full max-w-[92vw] lg:max-w-[1040px] lg:translate-x-6 lg:translate-y-2"
      style={{ perspective: "1200px" }}
    >
      {/* ─── Main card ─── */}
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl border"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          background: "var(--card)",
          borderColor: "var(--hairline)",
          boxShadow: isHovered
            ? "0 50px 100px rgba(11,18,32,0.22), 0 20px 40px rgba(11,18,32,0.10), 0 0 0 1px rgba(0,0,0,0.03)"
            : "0 40px 90px rgba(11,18,32,0.18), 0 0 0 1px rgba(0,0,0,0.03)",
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${isHovered ? "translateZ(12px)" : "translateZ(0px)"}`,
          transition: isHovered
            ? "transform 0.1s ease-out, box-shadow 0.3s ease"
            : "transform 0.5s ease-out, box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Glare highlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Chrome top bar */}
        <div
          className="flex h-10 items-center border-b px-4"
          style={{
            borderColor: "rgba(11,18,32,0.06)",
            background: "#F6F9FC",
          }}
        >

          {/* Google G icon + title */}
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 186.69 190.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(1184.583 765.171)">
                <path d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4" />
                <path d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z" fill="#34a853" />
                <path d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05" />
                <path d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z" fill="#ea4335" />
              </g>
            </svg>
            <span
              className="text-[13px] font-semibold"
              style={{ color: "var(--ink-900)", opacity: 0.85 }}
            >
              {"Google Results \u2014 Snapshot"}
            </span>
          </div>

          <div className="flex-1" />

          {/* "More Leads from Google" pill */}
          <div
            className="hidden items-center gap-1.5 rounded-full border px-2.5 py-0.5 sm:flex"
            style={{
              background: "rgba(52,168,83,0.06)",
              borderColor: "rgba(52,168,83,0.22)",
            }}
          >
            <TrendingUp className="h-3 w-3" style={{ color: "#34A853" }} />
            <span className="text-[11px] font-semibold" style={{ color: "#1e7e34" }}>
              More Leads from Google
            </span>
          </div>
        </div>

        {/* Inner content — the two panels with a divider */}
        <div className="overflow-hidden p-5 sm:p-6">
          <div className="grid gap-0 sm:grid-cols-[1fr_auto_1fr]">

            {/* ─── BEFORE panel ─── */}
            <div
              className="flex flex-col gap-3 rounded-xl p-5"
              style={{
                background: "rgba(0,0,0,0.012)",
              }}
            >
              {/* Badge */}
              <div>
                <span
                  className="inline-block rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                  style={{
                    background: "rgba(11,18,32,0.04)",
                    color: "rgba(95,99,104,0.6)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Before
                </span>
              </div>

              {/* Business name */}
              <div>
                <p
                  className="font-semibold"
                  style={{ color: "var(--ink-900)", fontSize: "16px", opacity: 0.5 }}
                >
                  Your Business
                </p>
                <p
                  className="mt-0.5"
                  style={{ color: "var(--muted-600)", fontSize: "13px", opacity: 0.5 }}
                >
                  {"Service business \u2022 Irvine, CA"}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <StarRow filled={3} muted />
                <span
                  className="text-[14px] font-semibold"
                  style={{ color: "var(--ink-900)", opacity: 0.35 }}
                >
                  3.9
                </span>
                <span style={{ color: "rgba(95,99,104,0.35)", fontSize: "12px" }}>
                  (12)
                </span>
              </div>

              {/* Map */}
              <MiniMap />

              {/* KPI row */}
              <div className="flex gap-3">
                <KpiChip label="Calls / week" value="4" muted />
                <KpiChip label="Website visits" value="22" muted />
              </div>
            </div>

            {/* ─── CENTER DIVIDER with arrow ─── */}
            <div className="hidden items-center justify-center sm:flex" style={{ width: "36px" }}>
              <div className="flex flex-col items-center gap-2">
                {/* Vertical dashed line */}
                <div
                  style={{
                    width: "1px",
                    height: "60px",
                    background: "repeating-linear-gradient(to bottom, rgba(11,18,32,0.08) 0px, rgba(11,18,32,0.08) 4px, transparent 4px, transparent 8px)",
                  }}
                />
                {/* Arrow circle */}
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "linear-gradient(135deg, #34A853, #4285F4)",
                    boxShadow: "0 4px 12px rgba(52,168,83,0.3), 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
                {/* Vertical dashed line */}
                <div
                  style={{
                    width: "1px",
                    height: "60px",
                    background: "repeating-linear-gradient(to bottom, rgba(11,18,32,0.08) 0px, rgba(11,18,32,0.08) 4px, transparent 4px, transparent 8px)",
                  }}
                />
              </div>
            </div>

            {/* Mobile divider arrow (horizontal) */}
            <div className="flex items-center justify-center py-3 sm:hidden">
              <div className="flex items-center gap-3">
                <div
                  style={{
                    height: "1px",
                    width: "40px",
                    background: "repeating-linear-gradient(to right, rgba(11,18,32,0.08) 0px, rgba(11,18,32,0.08) 4px, transparent 4px, transparent 8px)",
                  }}
                />
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "28px",
                    height: "28px",
                    background: "linear-gradient(135deg, #34A853, #4285F4)",
                    boxShadow: "0 3px 10px rgba(52,168,83,0.25)",
                    transform: "rotate(90deg)",
                  }}
                >
                  <ArrowRight className="h-3.5 w-3.5 text-white" />
                </div>
                <div
                  style={{
                    height: "1px",
                    width: "40px",
                    background: "repeating-linear-gradient(to right, rgba(11,18,32,0.08) 0px, rgba(11,18,32,0.08) 4px, transparent 4px, transparent 8px)",
                  }}
                />
              </div>
            </div>

            {/* ─── AFTER panel ─── */}
            <div
              className="relative flex flex-col gap-3 overflow-hidden rounded-xl border-2 p-5"
              style={{
                background: "linear-gradient(170deg, rgba(52,168,83,0.05) 0%, #ffffff 40%)",
                borderColor: "rgba(52,168,83,0.28)",
                boxShadow:
                  "0 16px 40px rgba(52,168,83,0.12), 0 6px 16px rgba(11,18,32,0.06)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute inset-x-0 top-0"
                style={{
                  height: "3px",
                  background: "linear-gradient(90deg, #34A853, #4285F4)",
                }}
              />

              {/* Badge */}
              <div>
                <span
                  className="inline-block rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                  style={{
                    background: "rgba(52,168,83,0.10)",
                    color: "#1e7e34",
                    letterSpacing: "0.08em",
                  }}
                >
                  After
                </span>
              </div>

              {/* Business name — WITH verified badge */}
              <div>
                <p
                  className="flex items-center gap-1 font-semibold"
                  style={{ color: "var(--ink-900)", fontSize: "16px" }}
                >
                  Your Business
                  <BadgeCheck
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#1A73E8",
                      fill: "#1A73E8",
                      stroke: "#fff",
                      strokeWidth: 2.5,
                    }}
                  />
                </p>
                <p
                  className="mt-0.5"
                  style={{ color: "var(--muted-600)", fontSize: "13px" }}
                >
                  {"Service business \u2022 Irvine, CA"}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <StarRow filled={4} />
                <span
                  className="text-[14px] font-semibold"
                  style={{ color: "var(--ink-900)" }}
                >
                  4.7
                </span>
                <span style={{ color: "rgba(95,99,104,0.8)", fontSize: "12px" }}>
                  (128)
                </span>
              </div>

              {/* Map */}
              <MiniMap accented />

              {/* KPI row */}
              <div className="flex gap-3 pt-1">
                <KpiChip label="Calls / week" value="18" delta="+350%" />
                <KpiChip label="Website visits" value="96" delta="+336%" />
              </div>
            </div>
          </div>

          {/* ─── Bottom feature pills row ─── */}
          <div
            className="mt-4 flex flex-wrap items-center justify-center border-t pt-3"
            style={{
              borderColor: "rgba(11,18,32,0.06)",
              gap: "6px 20px",
            }}
          >
            <FeaturePill
              icon={<LayoutGrid className="h-3.5 w-3.5" />}
              label="New Website"
              iconColor="#4285F4"
            />
            <FeaturePill
              icon={<Search className="h-3.5 w-3.5" />}
              label="SEO Optimized"
              iconColor="#EA4335"
            />
            <FeaturePill
              icon={<Star className="h-3.5 w-3.5" style={{ fill: "#FBBC04", stroke: "transparent" }} />}
              label="Review Generation"
              iconColor="#FBBC04"
            />
            <FeaturePill
              icon={<FileText className="h-3.5 w-3.5" />}
              label="Lead Forms"
              iconColor="#34A853"
            />
          </div>

          {/* Disclaimer */}
          <p
            className="mt-2.5 text-center text-[10px]"
            style={{ color: "var(--muted-600)", opacity: 0.7 }}
          >
            Illustrative example. Results vary by industry, competition, and
            location.
          </p>
        </div>
      </div>
    </div>
  )
}

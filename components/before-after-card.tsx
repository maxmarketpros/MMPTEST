import {
  Phone,
  MapPin,
  Globe,
  Star,
  TrendingUp,
  LayoutGrid,
  Search,
  FileText,
  BadgeCheck,
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
            width: "15px",
            height: "15px",
            fill: i < filled ? "#FBBC04" : "transparent",
            stroke: i < filled ? "transparent" : "rgba(60,64,67,0.20)",
            strokeWidth: i < filled ? 0 : 2,
            opacity: muted ? 0.55 : 1,
          }}
        />
      ))}
    </div>
  )
}

/* ───── Action button: icon-only on desktop, icon+label on mobile ───── */
function ActionButton({
  icon,
  label,
  iconColor,
}: {
  icon: React.ReactNode
  label: string
  iconColor: string
}) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-1.5 rounded-full border font-medium"
      style={{
        border: "1px solid rgba(60,64,67,0.16)",
        background: "#fff",
        color: "var(--ink-900)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
      aria-label={label}
    >
      {/* Mobile: icon + text, full chip */}
      <span
        className="flex items-center gap-1.5 md:hidden"
        style={{ padding: "0 12px", height: "32px", fontSize: "12px" }}
      >
        <span style={{ color: iconColor }} className="shrink-0 flex items-center">
          {icon}
        </span>
        <span className="truncate">{label}</span>
      </span>
      {/* Desktop: icon only, circular */}
      <span
        className="hidden items-center justify-center md:flex"
        style={{ width: "36px", height: "36px" }}
      >
        <span style={{ color: iconColor }} className="flex items-center">
          {icon}
        </span>
        <span className="sr-only">{label}</span>
      </span>
    </button>
  )
}

/* ───── KPI chip ───── */
function KpiChip({
  label,
  value,
  delta,
}: {
  label: string
  value: string
  delta?: string
}) {
  return (
    <div
      className="flex flex-1 flex-col gap-0.5 rounded-xl border px-3 py-2"
      style={{
        background: "var(--wash)",
        borderColor: delta
          ? "rgba(52,168,83,0.15)"
          : "rgba(11,18,32,0.06)",
      }}
    >
      <span
        className="text-[11px] font-medium"
        style={{ color: "var(--muted-600)" }}
      >
        {label}
      </span>
      <div className="flex items-center gap-1.5">
        <span
          className="text-lg font-semibold sm:text-xl"
          style={{ color: "var(--ink-900)" }}
        >
          {value}
        </span>
        {delta && (
          <span
            className="inline-flex items-center gap-0.5 rounded-full border px-2 py-0.5 text-xs font-semibold"
            style={{
              background: "rgba(52,168,83,0.08)",
              color: "#1e7e34",
              borderColor: "rgba(52,168,83,0.18)",
            }}
          >
            <TrendingUp className="h-2.5 w-2.5" />
            {delta}
          </span>
        )}
      </div>
    </div>
  )
}

/* ───── Detailed illustrative map ───── */
function MapPlaceholder({
  label,
  accented,
}: {
  label: string
  accented?: boolean
}) {
  return (
    <div
      className="relative h-20 w-full overflow-hidden rounded-xl border sm:h-28"
      style={{
        background: "#F6F9FC",
        borderColor: "rgba(60,64,67,0.08)",
      }}
    >
      {/* Neighborhood blocks + park + water */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 140"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Neighborhood blocks */}
        <rect x="20" y="18" width="60" height="35" rx="4" fill="rgba(66,133,244,0.05)" />
        <rect x="110" y="50" width="50" height="40" rx="4" fill="rgba(66,133,244,0.04)" />
        <rect x="250" y="15" width="70" height="30" rx="4" fill="rgba(66,133,244,0.05)" />
        <rect x="320" y="70" width="55" height="35" rx="4" fill="rgba(66,133,244,0.04)" />
        {/* Park (green) */}
        <ellipse cx="200" cy="110" rx="45" ry="22" fill="rgba(52,168,83,0.08)" />
        {/* Water strip (blue) */}
        <path d="M0 120 C50 115, 120 125, 180 118 C240 111, 310 122, 400 116 L400 140 L0 140 Z" fill="rgba(66,133,244,0.06)" />
        {/* Major roads */}
        <path
          d="M0 55 C70 42, 150 62, 220 48 C280 38, 350 52, 400 45"
          stroke="rgba(60,64,67,0.10)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M0 85 C90 78, 170 90, 260 82 C320 76, 360 86, 400 80"
          stroke="rgba(60,64,67,0.07)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Cross streets */}
        <path
          d="M100 0 C105 30, 95 70, 100 140"
          stroke="rgba(60,64,67,0.06)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M280 0 C275 35, 285 75, 278 140"
          stroke="rgba(60,64,67,0.05)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Very faint dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(11,18,32,0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          opacity: 0.4,
        }}
      />

      {/* Pins: Before = muted/red, After = blue/green */}
      {accented ? (
        <>
          <div
            className="absolute rounded-full"
            style={{
              width: 10, height: 10,
              top: "28%", left: "30%",
              background: "#4285F4",
              boxShadow: "0 0 0 3px rgba(66,133,244,0.25), 0 2px 4px rgba(0,0,0,0.12)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 10, height: 10,
              top: "50%", left: "58%",
              background: "#4285F4",
              boxShadow: "0 0 0 3px rgba(66,133,244,0.22), 0 2px 4px rgba(0,0,0,0.12)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 10, height: 10,
              top: "38%", left: "76%",
              background: "#4285F4",
              boxShadow: "0 0 0 3px rgba(66,133,244,0.22), 0 2px 4px rgba(0,0,0,0.12)",
            }}
          />
          {/* Activity dot */}
          <div
            className="absolute rounded-full"
            style={{
              width: 7, height: 7,
              top: "60%", left: "44%",
              background: "#34A853",
              boxShadow: "0 0 0 2px rgba(52,168,83,0.25)",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute rounded-full"
            style={{
              width: 9, height: 9,
              top: "35%", left: "40%",
              background: "#EA4335",
              boxShadow: "0 0 0 2px rgba(234,67,53,0.18)",
              opacity: 0.7,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 6, height: 6,
              top: "55%", left: "58%",
              background: "rgba(11,18,32,0.12)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 5, height: 5,
              top: "30%", left: "72%",
              background: "rgba(11,18,32,0.08)",
            }}
          />
        </>
      )}

      {/* Label chip */}
      <div
        className="absolute bottom-2 left-2 rounded-full border px-2.5 py-1 text-[10px] font-medium backdrop-blur-sm"
        style={{
          background: accented ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.90)",
          color: accented ? "#1e7e34" : "#c5221f",
          borderColor: accented ? "rgba(52,168,83,0.20)" : "rgba(234,67,53,0.18)",
        }}
      >
        {label}
      </div>
    </div>
  )
}

/* ───── Status dot + label ───── */
function StatusLabel({
  label,
  variant,
}: {
  label: string
  variant: "red" | "green"
}) {
  return (
    <span className="flex items-center gap-1.5 text-xs font-medium">
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{
          background: variant === "red" ? "#EA4335" : "#34A853",
        }}
      />
      <span
        style={{
          color: variant === "red" ? "#c5221f" : "#1e7e34",
        }}
      >
        {label}
      </span>
    </span>
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
    <span className="inline-flex shrink-0 items-center gap-1.5" style={{ fontSize: "13px" }}>
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
  return (
    <div className="relative w-full max-w-[92vw] lg:max-w-[1040px] lg:translate-x-6 lg:translate-y-2 lg:scale-[1.08]">
      {/* ─── Main card ─── */}
      <div
        className="relative overflow-hidden rounded-2xl border"
        style={{
          background: "var(--card)",
          borderColor: "var(--hairline)",
          boxShadow:
            "0 40px 90px rgba(11,18,32,0.18), 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      >
        {/* Chrome top bar */}
        <div
          className="flex h-11 items-center border-b px-4"
          style={{
            borderColor: "rgba(11,18,32,0.06)",
            background: "#F6F9FC",
          }}
        >
          {/* Traffic light dots */}
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "rgba(255,95,87,0.85)" }}
            />
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "rgba(254,188,46,0.85)" }}
            />
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "rgba(40,200,64,0.85)" }}
            />
          </div>

          {/* Google G icon + title */}
          <div className="ml-2 flex items-center gap-2">
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
              style={{ color: "var(--ink-900)", opacity: 0.9 }}
            >
              {"Google Results \u2014 Snapshot"}
            </span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* "More Leads from Google" pill — right side of chrome bar */}
          <div
            className="hidden items-center gap-1.5 rounded-full border px-3 py-1 sm:flex"
            style={{
              background: "rgba(52,168,83,0.06)",
              borderColor: "rgba(52,168,83,0.22)",
            }}
          >
            <TrendingUp className="h-3.5 w-3.5" style={{ color: "#34A853" }} />
            <span className="text-xs font-semibold" style={{ color: "#1e7e34" }}>
              More Leads from Google
            </span>
          </div>
        </div>

        {/* Inner content */}
        <div className="px-5 pb-5 pt-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* ─── BEFORE panel ─── */}
            <div
              className="flex flex-col gap-2.5 rounded-xl border p-5"
              style={{
                background: "rgba(234,67,53,0.025)",
                borderColor: "rgba(234,67,53,0.18)",
                opacity: 0.94,
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between">
                <span
                  className="rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide"
                  style={{
                    background: "rgba(234,67,53,0.08)",
                    color: "#c5221f",
                    borderColor: "rgba(234,67,53,0.18)",
                  }}
                >
                  Before
                </span>
                <StatusLabel label="Low visibility" variant="red" />
              </div>

              {/* Business name — NO badge */}
              <div>
                <p
                  className="font-semibold"
                  style={{ color: "var(--ink-900)", fontSize: "16px" }}
                >
                  Your Business
                </p>
                <p
                  className="mt-0.5"
                  style={{ color: "var(--muted-600)", fontSize: "13px" }}
                >
                  {"Service business \u2022 Irvine, CA"}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <StarRow filled={3} muted />
                <span
                  className="font-semibold"
                  style={{ color: "var(--ink-900)", opacity: 0.7, fontSize: "14px" }}
                >
                  3.9
                </span>
                <span style={{ color: "rgba(95,99,104,0.8)", fontSize: "12px" }}>
                  (12)
                </span>
              </div>

              {/* Action buttons — icon-only desktop, full on mobile */}
              <div className="flex items-center gap-2">
                <ActionButton
                  icon={<Phone className="h-4 w-4" />}
                  label="Call"
                  iconColor="rgba(60,64,67,0.55)"
                />
                <ActionButton
                  icon={<MapPin className="h-4 w-4" />}
                  label="Directions"
                  iconColor="rgba(60,64,67,0.55)"
                />
                <ActionButton
                  icon={<Globe className="h-4 w-4" />}
                  label="Website"
                  iconColor="rgba(60,64,67,0.55)"
                />
              </div>

              {/* Map placeholder */}
              <MapPlaceholder label="Not in top 3" />

              {/* KPI row */}
              <div className="flex gap-3">
                <KpiChip label="Calls / week" value="4" />
                <KpiChip label="Website visits" value="22" />
              </div>
            </div>

            {/* ─── AFTER panel ─── */}
            <div
              className="flex flex-col gap-2.5 rounded-xl border p-5"
              style={{
                background:
                  "linear-gradient(180deg, rgba(52,168,83,0.04), rgba(255,255,255,1) 60%)",
                borderColor: "rgba(52,168,83,0.22)",
                boxShadow:
                  "0 14px 35px rgba(11,18,32,0.10), 0 0 0 1px rgba(52,168,83,0.12)",
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between">
                <span
                  className="rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide"
                  style={{
                    background: "rgba(52,168,83,0.10)",
                    color: "#1e7e34",
                    borderColor: "rgba(52,168,83,0.20)",
                    boxShadow: "0 0 0 1px rgba(66,133,244,0.08)",
                  }}
                >
                  After
                </span>
                <StatusLabel label="Visibility improving" variant="green" />
              </div>

              {/* Business name — WITH verified badge */}
              <div>
                <p
                  className="flex items-center gap-1.5 font-semibold"
                  style={{ color: "var(--ink-900)", fontSize: "16px" }}
                >
                  Your Business
                  <BadgeCheck
                    style={{
                      width: "18px",
                      height: "18px",
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
              <div className="flex items-center gap-2">
                <StarRow filled={4} />
                <span
                  className="font-semibold"
                  style={{ color: "var(--ink-900)", fontSize: "14px" }}
                >
                  4.7
                </span>
                <span style={{ color: "rgba(95,99,104,0.8)", fontSize: "12px" }}>
                  (128)
                </span>
              </div>

              {/* Action buttons — icon-only desktop, full on mobile */}
              <div className="flex items-center gap-2">
                <ActionButton
                  icon={<Phone className="h-4 w-4" />}
                  label="Call"
                  iconColor="#34A853"
                />
                <ActionButton
                  icon={<MapPin className="h-4 w-4" />}
                  label="Directions"
                  iconColor="#4285F4"
                />
                <ActionButton
                  icon={<Globe className="h-4 w-4" />}
                  label="Website"
                  iconColor="#5F6368"
                />
              </div>

              {/* Map placeholder */}
              <MapPlaceholder label="More map exposure" accented />

              {/* KPI row */}
              <div className="flex gap-3">
                <KpiChip label="Calls / week" value="18" delta="+350%" />
                <KpiChip label="Website visits" value="96" delta="+336%" />
              </div>
            </div>
          </div>

          {/* ─── Bottom feature pills row ─── */}
          <div
            className="mt-4 flex flex-wrap items-center justify-center border-t pt-4"
            style={{
              borderColor: "rgba(11,18,32,0.06)",
              gap: "8px 24px",
            }}
          >
            <FeaturePill
              icon={<LayoutGrid className="h-4 w-4" />}
              label="New Website"
              iconColor="#4285F4"
            />
            <FeaturePill
              icon={<Search className="h-4 w-4" />}
              label="SEO Optimized"
              iconColor="#EA4335"
            />
            <FeaturePill
              icon={<Star className="h-4 w-4" style={{ fill: "#FBBC04", stroke: "transparent" }} />}
              label="Review Generation"
              iconColor="#FBBC04"
            />
            <FeaturePill
              icon={<FileText className="h-4 w-4" />}
              label="Lead Forms"
              iconColor="#34A853"
            />
          </div>

          {/* Disclaimer */}
          <p
            className="mt-3 text-center text-[11px]"
            style={{ color: "var(--muted-600)", opacity: 0.8 }}
          >
            Illustrative example. Results vary by industry, competition, and
            location.
          </p>
        </div>
      </div>
    </div>
  )
}

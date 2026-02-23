import { Phone, FileText, Video } from "lucide-react"

function MetricTile({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon?: React.ReactNode
}) {
  return (
    <div
      className="flex flex-1 flex-col items-start gap-1 rounded-xl border px-4 py-3"
      style={{
        background: "var(--wash)",
        borderColor: "var(--hairline)",
      }}
    >
      <span
        className="text-xs font-medium"
        style={{ color: "var(--muted-600)" }}
      >
        {label}
      </span>
      <div className="flex items-center gap-2">
        <span
          className="text-2xl font-bold"
          style={{ color: "var(--ink-900)" }}
        >
          {value}
        </span>
        {icon}
      </div>
    </div>
  )
}

function LeadRow({
  title,
  source,
  time,
}: {
  title: string
  source: string
  time: string
}) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
        style={{ background: "var(--wash)" }}
      >
        <FileText
          className="h-4 w-4"
          style={{ color: "var(--brand-blue)" }}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="truncate text-sm font-medium"
          style={{ color: "var(--ink-900)" }}
        >
          {title}
        </p>
        <p className="text-xs" style={{ color: "var(--muted-600)" }}>
          {source} &middot; {time}
        </p>
      </div>
    </div>
  )
}

export function GrowthReportCard() {
  return (
    <div className="relative w-full">
      {/* Floating Avg rating badge — top right */}
      <div
        className="absolute -right-2 -top-3 z-20 flex items-center gap-2 rounded-2xl border px-4 py-2.5 shadow-lg backdrop-blur-md sm:-right-4"
        style={{
          background: "rgba(255,255,255,0.85)",
          borderColor: "rgba(255,255,255,0.60)",
        }}
      >
        <div
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-cyan), var(--brand-blue))",
          }}
        >
          <span className="text-xs font-bold text-white">+</span>
        </div>
        <div>
          <span
            className="text-xs font-medium"
            style={{ color: "var(--muted-600)" }}
          >
            Avg rating
          </span>
          <p
            className="text-sm font-bold"
            style={{ color: "var(--ink-900)" }}
          >
            4.9/5
          </p>
        </div>
      </div>

      {/* Main card */}
      <div
        className="relative overflow-hidden rounded-2xl border shadow-2xl"
        style={{
          background: "var(--card)",
          borderColor: "var(--hairline)",
          boxShadow:
            "0 25px 60px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
        }}
      >
        {/* Window chrome */}
        <div
          className="flex h-11 items-center gap-2 border-b px-4"
          style={{
            borderColor: "var(--hairline)",
            background: "var(--wash)",
          }}
        >
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: "#FF5F57" }}
          />
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: "#FEBC2E" }}
          />
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: "#28C840" }}
          />
        </div>

        <div className="p-5 sm:p-6">
          {/* Header */}
          <h3
            className="mb-5 text-base font-semibold"
            style={{ color: "var(--ink-900)" }}
          >
            {"Local Growth Report \u2014 Irvine, CA"}
          </h3>

          {/* Metric tiles — 4 columns on sm+ */}
          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {/* Traffic tile — accent */}
            <div
              className="flex flex-col items-start gap-1 rounded-xl border px-4 py-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,176,240,0.08), rgba(37,99,235,0.08))",
                borderColor: "rgba(37,99,235,0.15)",
              }}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className="text-xs font-bold"
                  style={{ color: "var(--brand-blue)" }}
                >
                  +
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--brand-blue)" }}
                >
                  Traffic
                </span>
              </div>
              <span
                className="text-lg font-bold"
                style={{ color: "var(--brand-blue)" }}
              >
                +247%
              </span>
            </div>
            <MetricTile
              label="Calls"
              value="142"
              icon={
                <Phone
                  className="h-3.5 w-3.5"
                  style={{ color: "var(--muted-600)" }}
                />
              }
            />
            <MetricTile label="Forms" value="36" />
            <MetricTile
              label="Booked jobs"
              value="18"
              icon={
                <Video
                  className="h-3.5 w-3.5"
                  style={{ color: "var(--brand-blue)" }}
                />
              }
            />
          </div>

          {/* Lower area — chart + new leads */}
          <div className="grid gap-4 lg:grid-cols-5">
            {/* Chart */}
            <div
              className="rounded-xl border p-4 lg:col-span-3"
              style={{ borderColor: "var(--hairline)" }}
            >
              <p
                className="mb-3 text-sm font-semibold"
                style={{ color: "var(--ink-900)" }}
              >
                Google visibility{" "}
                <span
                  className="font-normal"
                  style={{ color: "var(--muted-600)" }}
                >
                  (last 30 days)
                </span>
              </p>
              <div className="relative h-36 w-full sm:h-44">
                <svg
                  viewBox="0 0 400 160"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[0, 40, 80, 120].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="400"
                      y2={y}
                      stroke="rgba(0,0,0,0.05)"
                      strokeWidth="1"
                    />
                  ))}
                  {/* Y-axis labels */}
                  <text x="2" y="12" fontSize="10" fill="var(--muted-600)">
                    240
                  </text>
                  <text x="2" y="52" fontSize="10" fill="var(--muted-600)">
                    180
                  </text>
                  <text x="2" y="92" fontSize="10" fill="var(--muted-600)">
                    120
                  </text>
                  <text x="2" y="132" fontSize="10" fill="var(--muted-600)">
                    60
                  </text>
                  {/* Area fill */}
                  <defs>
                    <linearGradient
                      id="chartGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="var(--brand-blue)"
                        stopOpacity="0.15"
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--brand-blue)"
                        stopOpacity="0.01"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M30,130 Q80,125 120,110 T200,95 T280,60 T340,35 T380,20 L380,160 L30,160 Z"
                    fill="url(#chartGrad)"
                  />
                  {/* Line */}
                  <path
                    d="M30,130 Q80,125 120,110 T200,95 T280,60 T340,35 T380,20"
                    fill="none"
                    stroke="var(--brand-blue)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Dots */}
                  {(
                    [
                      [30, 130],
                      [120, 110],
                      [200, 95],
                      [280, 60],
                      [340, 35],
                      [380, 20],
                    ] as [number, number][]
                  ).map(([cx, cy], i) => (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="4"
                      fill="white"
                      stroke="var(--brand-blue)"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
                {/* +247% tag */}
                <div
                  className="absolute bottom-8 right-12 rounded-lg px-2.5 py-1 text-xs font-bold sm:bottom-12 sm:right-16"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,176,240,0.12), rgba(37,99,235,0.12))",
                    color: "var(--brand-blue)",
                  }}
                >
                  +247%
                </div>
              </div>
              {/* X-axis */}
              <div
                className="mt-2 flex justify-between text-[10px]"
                style={{ color: "var(--muted-600)" }}
              >
                <span>240</span>
                <span>180</span>
                <span>120</span>
                <span>5/10</span>
                <span>00:01</span>
              </div>
            </div>

            {/* New leads */}
            <div
              className="hidden rounded-xl border p-4 lg:col-span-2 lg:block"
              style={{ borderColor: "var(--hairline)" }}
            >
              <p
                className="mb-2 text-sm font-semibold"
                style={{ color: "var(--ink-900)" }}
              >
                New leads
              </p>
              <div
                className="flex flex-col divide-y"
                style={{ borderColor: "var(--hairline)" }}
              >
                <LeadRow
                  title="Emergency plumber"
                  source="manatees"
                  time="2 hrs"
                />
                <LeadRow
                  title="AC repair quote"
                  source="irvmages"
                  time="1 hrs"
                />
                <LeadRow
                  title="Cracked window"
                  source="113 mopeno"
                  time="1 hrs"
                />
                <LeadRow
                  title="Rodent removal"
                  source="irvmages"
                  time="1 hrs"
                />
                <LeadRow
                  title="Bathroom remodel"
                  source="tramges"
                  time="1 hrs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

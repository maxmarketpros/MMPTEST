"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, ArrowDown, MousePointerClick, Navigation } from "lucide-react"
import Image from "next/image"

type Showcase = {
    id: string
    name: string
    industry: string
    url: string
    displayUrl: string
    description: string
    color: string
    kpis: { label: string; value: string }[]
    images: {
        desktop: string
        mobile: string
    }
}

const showcases: Showcase[] = [
    {
        id: "iohi",
        name: "Inside Out Home Improvements",
        industry: "Remodeling & Construction",
        url: "https://get-iohi.com/",
        displayUrl: "get-iohi.com",
        description: "We transformed a dated digital presence into a high-converting machine, ensuring this established Genesee County remodeler ranks #1 for their most profitable high-ticket services.",
        color: "from-blue-500/20 to-indigo-500/20",
        kpis: [
            { label: "Traffic Growth", value: "+215%" },
            { label: "Search Rank", value: "#1" },
            { label: "Avg Ticket", value: "$45k" },
        ],
        images: {
            desktop: "/showcase/iohi-desktop.jpg",
            mobile: "/showcase/iohi-mobile.jpg"
        }
    },
    {
        id: "solpool",
        name: "SOL Pool Tile Cleaning",
        industry: "Pool Restoration Services",
        url: "https://solpooltile.com/",
        displayUrl: "solpooltile.com",
        description: "By optimizing their local footprint and building a lightning-fast, visually stunning landing page, we automated their lead flow so they can focus entirely on massive volume.",
        color: "from-sky-400/20 to-blue-400/20",
        kpis: [
            { label: "Lead Volume", value: "3x Grow" },
            { label: "New Reviews", value: "13+/mo" },
            { label: "Local Reach", value: "Expanded" },
        ],
        images: {
            desktop: "/showcase/solpool-desktop.jpg",
            mobile: "/showcase/solpool-mobile.jpg"
        }
    },
    {
        id: "gopherbusters",
        name: "Gopherbusters",
        industry: "Pest Control",
        url: "https://gopherbustersus.com/",
        displayUrl: "gopherbustersus.com",
        description: "We built an aggressive local SEO foundation paired with our CRM automation. They now capture leads for specialized removal services they previously missed out on.",
        color: "from-emerald-500/20 to-teal-500/20",
        kpis: [
            { label: "Cost/Acquisition", value: "-45%" },
            { label: "Time to Page 1", value: "60 Days" },
            { label: "Automations", value: "Active" },
        ],
        images: {
            desktop: "/showcase/gopher-desktop.jpg",
            mobile: "/showcase/gopher-mobile.jpg"
        }
    },
    {
        id: "allexterior",
        name: "All Exterior Solutions",
        industry: "Roofing & Gutters",
        url: "https://allexteriorsolutions.org/",
        displayUrl: "allexteriorsolutions.org",
        description: "A complete infrastructure overhaul. We redesigned their web experience to reflect their massive service area, resulting in consistent, high-quality residential replacement leads.",
        color: "from-orange-500/20 to-red-500/20",
        kpis: [
            { label: "Clients Served", value: "1,000+" },
            { label: "Service Area", value: "100+ Cities" },
            { label: "Lead Quality", value: "Highest" },
        ],
        images: {
            desktop: "/showcase/allexterior-desktop.jpg",
            mobile: "/showcase/allexterior-mobile.jpg"
        }
    }
]

export function WebsiteShowcaseSection() {
    const [activeId, setActiveId] = useState<string>(showcases[0].id)

    // Find the currently active showcase object
    const activeShowcase = showcases.find(s => s.id === activeId) || showcases[0]

    return (
        <section className="relative w-full overflow-hidden py-16 lg:py-24 border-t border-slate-100/50" style={{ background: "var(--wash)" }}>

            {/* Soft Radial Blobs instead of complex SVG Ribbon */}
            <div
                className="pointer-events-none absolute -left-40 top-0 z-0 h-[600px] w-[600px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(0,176,240,0.06) 0%, transparent 70%)",
                }}
            />
            <div
                className="pointer-events-none absolute -right-20 top-1/4 z-0 h-[500px] w-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1300px] px-6 lg:px-12">

                {/* Minimalist Section Header */}
                <div className="mb-10 lg:mb-14 text-center max-w-3xl mx-auto flex flex-col items-center">
                    {/* Eyebrow Pill */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] sm:text-[12px] font-bold tracking-widest text-slate-500 uppercase shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                        Featured Builds
                    </div>

                    {/* Main Headline */}
                    <h2
                        className="text-[32px] sm:text-[36px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[44px] lg:text-[48px]"
                        style={{ color: "var(--ink-900)" }}
                    >
                        Websites built for <br className="hidden sm:block" />
                        <span className="relative inline-block text-[#00B0F0] mt-2">
                            booked jobs.
                            {/* Blue Underline Highlight */}
                            <span
                                className="absolute left-0 bottom-1 w-full h-[30%] bg-[#00B0F0]/20 -z-10 rounded-sm"
                            />
                        </span>
                    </h2>
                    <p className="mt-5 sm:mt-6 max-w-[600px] text-[15px] sm:text-[17px] font-medium leading-[1.6] text-[var(--text-700)] text-center px-2 text-pretty mx-auto">
                        We don't just build digital brochures. We build high-velocity assets that rank locally and convert traffic into booked jobs.
                    </p>
                </div>

                {/* The Tab Controls */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 z-10 relative px-2">
                    {showcases.map((showcase) => {
                        const isActive = activeId === showcase.id
                        return (
                            <button
                                key={showcase.id}
                                onClick={() => setActiveId(showcase.id)}
                                className={`
                                    relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[13px] sm:text-[14px] font-bold transition-all duration-300 border shadow-sm
                                    ${isActive
                                        ? 'bg-white border-blue-100 shadow-md ring-1 ring-blue-500/10 text-blue-600'
                                        : 'bg-white/50 border-slate-200/50 hover:bg-white/80 hover:border-slate-300/80 text-slate-500 hover:text-slate-900'
                                    }
                                `}
                            >
                                <span className="relative z-10">{showcase.name}</span>
                            </button>
                        )
                    })}
                </div>

                {/* The Interactive Content Area */}
                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <ShowcaseView key={activeShowcase.id} showcase={activeShowcase} />
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}

function ShowcaseView({ showcase }: { showcase: Showcase }) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Smooth scroll parallax for the mobile device
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const mobileY = useTransform(scrollYProgress, [0, 1], [30, -30])

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-16 lg:gap-20 items-center lg:flex-row"
        >
            {/* ---- VISUALS COLUMN (The Mockups) ---- */}
            <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-start group perspective-1000">
                {/* Dynamic Brand Gradient Aura */}
                <motion.div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[100px] opacity-60 -z-10 bg-gradient-to-br ${showcase.color}`}
                    layoutId="dynamic-brand-aura"
                    transition={{ duration: 1, ease: "easeInOut" }}
                />

                {/* Macbook Proxy Frame */}
                <div className="relative z-10 w-full max-w-[600px] rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-700 hover:scale-[1.02] ml-0 lg:ml-8 transform-gpu preserve-3d group-hover:rotate-y-2 group-hover:-rotate-x-2">
                    {/* Mac Chrome Top Bar */}
                    <div className="h-8 bg-[#f8f9fa] border-b border-black/5 flex items-center px-4 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/10" />
                        <div className="flex-1 text-center">
                            <div className="inline-block bg-white border border-black/5 rounded-md px-3 mt-1 py-0.5 text-[9px] font-medium text-slate-500 font-mono tracking-widest shadow-sm">
                                {showcase.displayUrl}
                            </div>
                        </div>
                    </div>
                    {/* Desktop Screenshot - Forced Scrolling context */}
                    <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                        <Image
                            src={showcase.images.desktop}
                            alt={`${showcase.name} Desktop`}
                            fill
                            className="object-cover object-top transition-all duration-[25000ms] ease-linear group-hover:object-bottom"
                        />
                    </div>
                </div>

                {/* iPhone Proxy Frame (Floating & Parallax) */}
                <motion.div
                    style={{ y: mobileY }}
                    className="absolute z-20 top-1/2 -translate-y-1/2 w-[160px] sm:w-[200px] rounded-[32px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_40px_80px_-20px_rgba(0,0,0,0.25)] border-[6px] border-slate-900 overflow-hidden right-0 sm:-right-8 lg:-right-4"
                >
                    {/* Mobile Screenshot */}
                    <div className="relative aspect-[9/19.5] bg-slate-200 overflow-hidden">
                        <Image
                            src={showcase.images.mobile}
                            alt={`${showcase.name} Mobile`}
                            fill
                            className="object-cover object-top transition-all duration-[25000ms] ease-linear group-hover:object-bottom"
                        />
                    </div>
                </motion.div>

                {/* Subtle Hover Indicator Arrow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 lg:left-[45%] lg:-translate-x-0 z-30 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none hidden sm:flex flex-col items-center gap-2 text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Hover</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
            </div>

            {/* ---- TEXT COLUMN (The Clean Narrative) ---- */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 sm:px-8 z-10">
                <div className="mb-6">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#2563EB" }}>
                        {showcase.industry}
                    </p>
                    <h3 className="text-[32px] sm:text-[40px] font-bold leading-[1.1] tracking-[-0.03em]" style={{ color: "var(--ink-900)" }}>
                        {showcase.name}
                    </h3>
                </div>

                <div className="h-[1px] w-full my-8" style={{ background: "var(--hairline)" }} />

                <div className="grid grid-cols-3 gap-4 mb-8">
                    {showcase.kpis.map((kpi, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-[24px] sm:text-[28px] font-bold leading-none mb-1" style={{ color: "var(--ink-900)" }}>{kpi.value}</span>
                            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider" style={{ color: "var(--text-500)" }}>{kpi.label}</span>
                        </div>
                    ))}
                </div>

                <p className="text-[16px] sm:text-[18px] leading-[1.6] mb-10 text-pretty font-medium max-w-[480px]" style={{ color: "var(--text-600)" }}>
                    {showcase.description}
                </p>

                <div>
                    <a
                        href={showcase.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-[14px] font-bold shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-md group"
                        style={{ color: "var(--ink-900)" }}
                    >
                        View Live Site
                        <ArrowUpRight className="w-4 h-4 transition-colors" style={{ color: "var(--text-400)" }} />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

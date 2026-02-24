"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Star, CheckCircle2, TrendingUp, Search, MousePointer2, Settings, MessageSquare, Phone } from "lucide-react"

// Types
type CaseStudy = {
    id: string
    name: string
    industry: string
    avatar: string
    quote: string
    author: string
    title: string
    kpis: {
        label: string
        value: string
        trend: string
    }[]
    details: {
        timeframe: string
        engineUsed: string
        primaryWin: string
    }
    brandColor: string
    brandGradient: string
    mockupType: "browser" | "pipeline" | "phone" | "map"
}

// Data Matrix
const caseStudies: CaseStudy[] = [
    {
        id: "iohi",
        name: "Inside Out Home Improvements",
        industry: "Home Remodeling",
        avatar: "IO",
        quote: "Max Market Pros didn't just build a website. They handed us a machine that spits out 5-10 high-ticket remodeling jobs every single month.",
        author: "Team IOHI",
        title: "Owners, Genesee County MI",
        kpis: [
            { label: "Organic Traffic", value: "+215%", trend: "Up" },
            { label: "Kitchen Remodeling", value: "Ranked #1", trend: "Up" },
            { label: "Avg Ticket", value: "$45k", trend: "Stable" },
        ],
        details: {
            timeframe: "90 Days",
            engineUsed: "ServicePro",
            primaryWin: "Local SEO Dominance"
        },
        brandColor: "#2563EB", // brand-blue
        brandGradient: "from-blue-500 to-indigo-600",
        mockupType: "browser"
    },
    {
        id: "solpool",
        name: "SOL Pool Tile Cleaning",
        industry: "Pool Restoration",
        avatar: "SP",
        quote: "We used to rely purely on word of mouth. Now, our Google Business Profile is a lead-generation engine that brings in consistent, high-margin pool cleaning jobs every week.",
        author: "Luis & Omar",
        title: "Founders, Rancho Cucamonga CA",
        kpis: [
            { label: "Average Rating", value: "4.9★", trend: "Stable" },
            { label: "New Reviews", value: "13+/mo", trend: "Up" },
            { label: "Lead Volume", value: "3x Growth", trend: "Up" },
        ],
        details: {
            timeframe: "60 Days",
            engineUsed: "LocalMark",
            primaryWin: "GBP Optimization"
        },
        brandColor: "#0EA5E9", // Sky Blue
        brandGradient: "from-sky-400 to-blue-500",
        mockupType: "pipeline"
    },
    {
        id: "gopher",
        name: "Gopherbusters",
        industry: "Pest Control",
        avatar: "GB",
        quote: "The system completely streamlined our intake. We're capturing leads for gopher and mole removal that we didn't even know existed in the Phoenix market, all automatically.",
        author: "Gopherbusters Team",
        title: "Operations, Phoenix AZ",
        kpis: [
            { label: "Cost-Per-Acquisition", value: "-45%", trend: "Down" },
            { label: "Time to Page 1", value: "60 Days", trend: "Fast" },
            { label: "Booking System", value: "Automated", trend: "Stable" },
        ],
        details: {
            timeframe: "120 Days",
            engineUsed: "ServicePro",
            primaryWin: "CRM Automation"
        },
        brandColor: "#10B981", // Emerald
        brandGradient: "from-emerald-400 to-teal-500",
        mockupType: "phone"
    },
    {
        id: "allexterior",
        name: "All Exterior Solutions",
        industry: "Roofing & Gutters",
        avatar: "AE",
        quote: "The lead quality since switching to this infrastructure has been night and day. We are booking more whole-house gutter and roofing replacements without having to chase people down.",
        author: "Jacob & Dennis",
        title: "Owners, Northwest Ohio",
        kpis: [
            { label: "Clients Served", value: "1,000+", trend: "Up" },
            { label: "Service Area", value: "Expanded", trend: "Up" },
            { label: "5-Star Feedback", value: "Consistent", trend: "Stable" },
        ],
        details: {
            timeframe: "75 Days",
            engineUsed: "Signature",
            primaryWin: "Territory Expansion"
        },
        brandColor: "#8B5CF6", // Violet
        brandGradient: "from-violet-500 to-purple-600",
        mockupType: "map"
    }
]

export function CaseStudiesSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeClient = caseStudies[activeIndex]

    return (
        <section
            className="relative w-full overflow-hidden border-t border-slate-100/50 py-20 sm:py-32"
            style={{ backgroundColor: "var(--wash)" }}
        >
            {/* 1px hairline gradient divider Top */}
            <div
                className="absolute inset-x-0 top-0 h-[1px]"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(11,18,32,0.06) 50%, transparent)"
                }}
            />

            {/* Noise layer (3% opacity) */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: "url(/hero/noise.png)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />

            {/* Dynamic Background Aura */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] sm:h-[800px] sm:w-[1200px] rounded-full blur-[120px] transition-colors duration-1000 ease-in-out opacity-10"
                style={{ backgroundColor: activeClient.brandColor }}
            />

            <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-12">

                {/* Section Header */}
                <div className="mb-12 sm:mb-16 text-center flex flex-col items-center">
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/60 px-3 py-1 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em] text-slate-500 shadow-sm backdrop-blur-md">
                        <TrendingUp className="h-3.5 w-3.5 text-emerald-500" strokeWidth={2.5} />
                        Proven ROI
                    </div>
                    <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--ink-900)] max-w-[800px] flex flex-col items-center">
                        We build engines that <span className="relative z-10 inline-block">
                            generate revenue.
                            {/* Highlight underline */}
                            <span
                                className="absolute -z-10 rounded-md opacity-[0.22]"
                                style={{
                                    left: "-4px",
                                    right: "-4px",
                                    bottom: "4px",
                                    height: "12px",
                                    background: "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))"
                                }}
                            />
                        </span>
                    </h2>
                    <p className="mt-5 sm:mt-6 max-w-[650px] text-[15px] sm:text-[17px] font-medium leading-[1.6] text-[var(--text-700)] text-center px-2">
                        Don't just take our word for it. See the exact numbers, strategies, and systems we used to scale these local service businesses.
                    </p>
                </div>

                {/* 2-Column VIP Layout Container */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch max-w-lg lg:max-w-none mx-auto">

                    {/* Left Column: The Tab Roster (35%) */}
                    <div className="w-full lg:w-[32%] shrink-0 flex flex-col gap-3 relative z-20">
                        {caseStudies.map((client, idx) => {
                            const isActive = activeIndex === idx
                            return (
                                <button
                                    key={client.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`group relative flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 border ${isActive
                                        ? "bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-[0_8px_30px_-15px_rgba(11,18,32,0.12)] scale-[1.02]"
                                        : "border-transparent hover:bg-white/40 bg-white/20"
                                        }`}
                                >
                                    {/* Active Indicator Bar */}
                                    <div
                                        className={`absolute left-0 top-1/2 h-1/2 w-[3px] -translate-y-1/2 rounded-r-full transition-all duration-500 bg-gradient-to-b ${client.brandGradient} ${isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                                    />

                                    {/* Avatar */}
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[14px] font-bold shadow-sm ring-1 transition-all duration-300 ${isActive
                                            ? "bg-white text-slate-800 ring-slate-100"
                                            : "bg-slate-50/50 text-slate-500 ring-transparent group-hover:bg-white/80 group-hover:ring-slate-100"
                                            }`}
                                        style={isActive ? { color: client.brandColor } : {}}
                                    >
                                        {client.avatar}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0 pr-2">
                                        <h3 className={`truncate text-[15px] sm:text-[16px] font-bold transition-colors ${isActive ? "text-[var(--ink-900)]" : "text-slate-600 group-hover:text-slate-900"}`}>
                                            {client.name}
                                        </h3>
                                        <p className="truncate text-[13px] font-semibold text-slate-400 mt-0.5">
                                            {client.industry}
                                        </p>
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* Right Column: The Command Center Display (65%) */}
                    <div className="flex-1 w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[28px] sm:rounded-[40px] shadow-[0_40px_90px_-20px_rgba(11,18,32,0.1),inset_0_0_0_1px_rgba(255,255,255,0.8)] flex flex-col overflow-hidden relative min-h-[600px]">

                        {/* Top Inner Sheen */}
                        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-10" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex-1 flex flex-col relative z-20 h-full"
                            >
                                {/* --- Top Zone (The Human Element) --- */}
                                <div className="p-6 sm:p-10 pb-0">
                                    <div className="flex items-center gap-1.5 mb-5 sm:mb-6">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} className="h-4 w-4 sm:h-5 sm:w-5 text-[#FBBC04]" fill="currentColor" strokeWidth={1} />
                                        ))}
                                        <span className="ml-2 inline-flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                            <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-500" />
                                            Verified Client
                                        </span>
                                    </div>

                                    <h4 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-[1.2] tracking-tight text-[var(--ink-900)] relative">
                                        <span className="absolute -left-3 sm:-left-4 -top-2 sm:-top-3 text-[40px] sm:text-[60px] text-slate-200 font-serif leading-none select-none">"</span>
                                        {activeClient.quote}
                                        <span className="text-[40px] sm:text-[60px] text-slate-200 font-serif leading-none select-none -translate-y-8 inline-block -mb-8">"</span>
                                    </h4>

                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="h-[1px] w-8 bg-slate-200" />
                                        <p className="text-[14px] sm:text-[15px] font-semibold text-slate-600">
                                            <strong className="text-slate-900">{activeClient.author}</strong> — {activeClient.title}
                                        </p>
                                    </div>
                                </div>

                                {/* --- Middle Zone (The Visual Engine) --- */}
                                <div className="flex-1 relative mt-8 sm:mt-12 flex items-center justify-center min-h-[220px] px-6">
                                    {/* Glowing backdrop specifically for the mockup */}
                                    <div
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[150px] w-[60%] rounded-full blur-[60px] opacity-20"
                                        style={{ backgroundColor: activeClient.brandColor }}
                                    />

                                    {/* The Mockups */}
                                    <div className="relative z-10 w-full max-w-lg mx-auto flex justify-center items-center">

                                        {/* FLOATING KPI CHIPS */}
                                        <div className="absolute -left-2 sm:-left-6 top-0 sm:top-4 z-20 animate-[float_4s_ease-in-out_infinite_alternate]">
                                            <div className="flex items-center gap-2 sm:gap-3 rounded-full bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] ring-1 ring-slate-100">
                                                <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                                                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={3} style={{ color: activeClient.brandColor }} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">{activeClient.kpis[0].label}</p>
                                                    <p className="text-[14px] sm:text-[16px] font-black text-slate-800 leading-none mt-0.5">{activeClient.kpis[0].value}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute -right-2 sm:-right-6 top-12 sm:top-20 z-20 animate-[float_5s_ease-in-out_infinite_alternate-reverse]">
                                            <div className="flex items-center gap-2 sm:gap-3 rounded-full bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] ring-1 ring-slate-100">
                                                <div>
                                                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 text-right">{activeClient.kpis[1].label}</p>
                                                    <p className="text-[14px] sm:text-[16px] font-black text-slate-800 leading-none mt-0.5 text-right">{activeClient.kpis[1].value}</p>
                                                </div>
                                                <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                                                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={2.5} style={{ color: activeClient.brandColor }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute -left-4 sm:left-4 -bottom-4 sm:-bottom-6 z-20 animate-[float_4.5s_ease-in-out_infinite_alternate]">
                                            <div className="rounded-xl bg-slate-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.2)] ring-1 ring-white/10 flex items-center gap-2 sm:gap-2.5">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ backgroundColor: activeClient.brandColor }} />
                                                <span className="text-[11px] sm:text-[13px] font-bold whitespace-nowrap">{activeClient.kpis[2].label}: <span className="opacity-80 font-medium">{activeClient.kpis[2].value}</span></span>
                                            </div>
                                        </div>


                                        {/* CSS animations for floating */}
                                        <style dangerouslySetInnerHTML={{
                                            __html: `
                                                @keyframes float {
                                                    0% { transform: translateY(0px); }
                                                    100% { transform: translateY(-12px); }
                                                }
                                            `}} />

                                        {/* RENDER MOCKUP BASED ON TYPE */}
                                        {activeClient.mockupType === "browser" && (
                                            <div className="w-[85%] sm:w-[320px] rounded-t-xl bg-white shadow-2xl border border-slate-200/50 overflow-hidden translate-y-4">
                                                <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                                                    <div className="ml-2 flex-1 h-5 bg-white border border-slate-200/60 rounded-md flex items-center px-2">
                                                        <Search className="h-2.5 w-2.5 text-slate-300" />
                                                    </div>
                                                </div>
                                                <div className="p-4 space-y-3">
                                                    <div className="h-4 w-1/3 rounded bg-blue-100" />
                                                    <div className="space-y-1.5">
                                                        <div className="h-2 w-full rounded bg-slate-100" />
                                                        <div className="h-2 w-5/6 rounded bg-slate-100" />
                                                        <div className="h-2 w-4/6 rounded bg-slate-100" />
                                                    </div>
                                                    <div className="mt-4 flex gap-2">
                                                        <div className="h-24 w-1/2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center relative overflow-hidden group">
                                                            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            <MousePointer2 className="h-4 w-4 text-blue-300 absolute -bottom-4 right-2 transition-transform duration-500 group-hover:-translate-y-6 group-hover:-translate-x-4 group-hover:text-blue-500" />
                                                        </div>
                                                        <div className="h-24 w-1/2 rounded-lg bg-slate-50 border border-slate-100" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeClient.mockupType === "pipeline" && (
                                            <div className="w-[95%] sm:w-[380px] rounded-xl bg-white shadow-2xl border border-slate-200/50 overflow-hidden transform group hover:scale-[1.02] transition-transform duration-500">
                                                <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                                    <Settings className="w-4 h-4 text-sky-500" />
                                                    <div className="h-3 w-20 rounded bg-slate-200" />
                                                </div>
                                                <div className="p-4 flex gap-3 h-[180px]">
                                                    <div className="flex-1 space-y-2 bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                                                        <div className="h-2 w-16 bg-amber-200 rounded-full mb-3" />
                                                        <div className="h-12 w-full bg-white rounded shadow-sm border border-slate-200 border-l-4 border-l-amber-400 p-2 opacity-50">
                                                            <div className="h-2 w-1/2 bg-slate-200 rounded mb-1" />
                                                            <div className="h-1.5 w-1/3 bg-slate-100 rounded" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 space-y-2 bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                                                        <div className="h-2 w-14 bg-emerald-200 rounded-full mb-3" />
                                                        {/* This card hops columns */}
                                                        <div className="h-12 w-full bg-white rounded shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-slate-200 border-l-4 border-l-emerald-400 p-2 relative transition-transform duration-700 -translate-x-full opacity-0 fill-mode-forwards animate-[slideIn_1s_ease-out_0.5s_forwards]">
                                                            <div className="h-2 w-3/4 bg-slate-800 rounded mb-1" />
                                                            <div className="flex justify-between items-center mt-2">
                                                                <div className="h-2 w-1/3 bg-slate-200 rounded" />
                                                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                                            </div>
                                                        </div>
                                                        <div className="h-12 w-full bg-white rounded shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-slate-200 border-l-4 border-l-emerald-400 p-2 relative opacity-70 mt-2">
                                                            <div className="h-2 w-2/3 bg-slate-800 rounded mb-1" />
                                                            <div className="flex justify-between items-center mt-2">
                                                                <div className="h-2 w-1/4 bg-slate-200 rounded" />
                                                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <style dangerouslySetInnerHTML={{
                                                    __html: `
                                                        @keyframes slideIn {
                                                            to { transform: translateX(0); opacity: 1; }
                                                        }
                                                    `}} />
                                            </div>
                                        )}

                                        {activeClient.mockupType === "phone" && (
                                            <div className="w-[180px] sm:w-[220px] rounded-[32px] bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border-[6px] border-slate-900 overflow-hidden relative pb-10">
                                                <div className="absolute top-0 inset-x-0 h-5 bg-slate-900 rounded-b-xl w-1/2 mx-auto" />
                                                <div className="pt-8 px-4 pb-4 space-y-3">
                                                    {/* Incoming call */}
                                                    <div className="rounded-xl bg-slate-50 p-2.5 flex items-center gap-2 border border-slate-100">
                                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                                            <Phone className="w-3 h-3" />
                                                        </div>
                                                        <div>
                                                            <div className="text-[10px] font-bold text-slate-800">Missed Call</div>
                                                            <div className="text-[8px] text-slate-400">1m ago</div>
                                                        </div>
                                                    </div>
                                                    {/* Auto reply */}
                                                    <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded-xl rounded-br-sm ml-6 flex flex-col gap-1.5 shadow-sm transform transition-transform duration-700 animate-[floatUp_0.8s_ease-out_forwards]">
                                                        <div className="h-1.5 w-full bg-emerald-600/20 rounded-full" />
                                                        <div className="h-1.5 w-3/4 bg-emerald-600/20 rounded-full" />
                                                    </div>
                                                    {/* Client reply */}
                                                    <div className="bg-gray-100 border border-gray-200 p-2.5 rounded-xl rounded-bl-sm mr-6 flex flex-col gap-1.5 shadow-sm opacity-0 transform translate-y-2 transition-all duration-700 animate-[floatUp_0.8s_ease-out_1.2s_forwards]">
                                                        <div className="h-1.5 w-5/6 bg-slate-300 rounded-full" />
                                                        <div className="h-1.5 w-full bg-slate-300 rounded-full" />
                                                        <div className="h-1.5 w-1/2 bg-slate-300 rounded-full" />
                                                    </div>
                                                </div>
                                                <style dangerouslySetInnerHTML={{
                                                    __html: `
                                                        @keyframes floatUp {
                                                            to { transform: translateY(0); opacity: 1; }
                                                        }
                                                    `}} />
                                            </div>
                                        )}

                                        {activeClient.mockupType === "map" && (
                                            <div className="w-[90%] sm:w-[360px] rounded-xl bg-white shadow-2xl border border-slate-200/50 overflow-hidden relative">
                                                {/* Mini Map SVG */}
                                                <div className="h-[200px] w-full bg-[#E8EAE6] relative opacity-80">
                                                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 200">
                                                        <path d="M-20,100 L420,50" stroke="#fff" strokeWidth="8" fill="none" />
                                                        <path d="M150,-20 L200,220" stroke="#fff" strokeWidth="10" fill="none" />
                                                        <rect x="50" y="30" width="60" height="40" rx="4" fill="#C8E6C9" />
                                                        <rect x="250" y="120" width="80" height="50" rx="4" fill="#C8E6C9" />
                                                    </svg>

                                                    {/* Pin */}
                                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                                        <div className="absolute w-12 h-12 bg-violet-400 rounded-full animate-ping opacity-30" />
                                                        <div className="w-8 h-8 rounded-full bg-violet-500 shadow-md ring-2 ring-white flex justify-center items-center relative z-10 hover:scale-110 transition-transform">
                                                            <MapPin className="w-4 h-4 text-white" fill="currentColor" />
                                                        </div>
                                                        <div className="bg-white px-2 py-1 rounded shadow-md border border-slate-100 text-[10px] font-bold text-slate-800 mt-1 relative z-20 whitespace-nowrap">
                                                            Top Ranked
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* --- Bottom Zone (The Data Grid) --- */}
                                <div className="mt-8 border-t border-slate-200/60 bg-slate-50/50">
                                    <div className="grid grid-cols-3 divide-x divide-slate-200/60">
                                        <div className="p-4 sm:p-5 text-center">
                                            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Timeframe</span>
                                            <span className="block text-[14px] sm:text-[16px] font-black text-slate-800">{activeClient.details.timeframe}</span>
                                        </div>
                                        <div className="p-4 sm:p-5 text-center">
                                            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Engine Built</span>
                                            <span className="block text-[14px] sm:text-[16px] font-black" style={{ color: activeClient.brandColor }}>{activeClient.details.engineUsed}</span>
                                        </div>
                                        <div className="p-4 sm:p-5 text-center">
                                            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Primary Win</span>
                                            <span className="block text-[14px] sm:text-[16px] font-black text-slate-800">{activeClient.details.primaryWin}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    )
} 

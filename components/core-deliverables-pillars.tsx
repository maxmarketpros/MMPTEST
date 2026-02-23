"use client"

import { Globe, MapPin, Phone, Share2, Zap, CheckCircle2, Star, Heart, TrendingUp, MessageSquare } from "lucide-react"

export function CoreDeliverablesPillars() {
    return (
        <section
            className="relative w-full overflow-hidden border-t border-slate-100/50 pt-24 pb-16 lg:pb-24"
            style={{ backgroundColor: "var(--wash)" }}
        >
            {/* 1px hairline gradient divider Top */}
            <div
                className="absolute inset-x-0 top-0 h-[1px]"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(11,18,32,0.06) 50%, transparent)"
                }}
            />

            {/* Clean Dot Pattern Background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.25] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)]" />

            {/* Noise layer (3% opacity) */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "url(/hero/noise.png)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />

            {/* AMBIENT BACKLIGHTS (Behind each pillar) */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-[10vw]">
                {/* Blue Backlight (Left) */}
                <div className="h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
                {/* Emerald Backlight (Center) */}
                <div className="h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
                {/* Indigo Backlight (Right) */}
                <div className="h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1200px] px-6">

                {/* Section Header */}
                <div className="mb-16 text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/60 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-slate-500 shadow-sm backdrop-blur-md">
                        <Zap className="h-3.5 w-3.5 text-amber-500" fill="currentColor" />
                        Our Digital Infrastructure
                    </div>
                    <h2 className="text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--ink-900)] sm:text-[44px] md:max-w-[700px]">
                        Built to rank. <br className="hidden md:block" /> Engineered to <span className="relative z-10 inline-block">
                            close
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
                        </span>.
                    </h2>
                    <p className="mt-6 max-w-[600px] text-[17px] font-medium leading-[1.6] text-[var(--text-700)] text-center md:text-left">
                        We provide the complete marketing engine required to dominate local search and capture every lead across your territory.
                    </p>
                </div>

                {/* ════ THE 3 PILLARS ════ */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-[1000px] mx-auto xl:max-w-none">

                    {/* Pillar 1: Custom SEO Websites (Left) */}
                    <div className="group relative flex flex-col rounded-[32px] border border-white/60 bg-white/50 p-8 pt-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/70"
                        style={{
                            boxShadow: "0 20px 40px -15px rgba(11,18,32,0.05), inset 0 0 0 1px rgba(255,255,255,0.8)",
                            backdropFilter: "blur(24px)"
                        }}>
                        {/* Inner Sheen */}
                        <div className="absolute inset-x-0 top-0 h-32 rounded-t-[32px] bg-gradient-to-b from-white to-transparent opacity-60 pointer-events-none" />

                        {/* Website Browser Mockup */}
                        <div className="relative mb-6 w-full h-[200px] overflow-hidden rounded-[16px] border border-slate-200/60 bg-slate-50/80 shadow-sm">
                            {/* Browser Chrome */}
                            <div className="flex items-center gap-1.5 border-b border-slate-200/60 bg-white px-3 py-2">
                                <span className="h-2 w-2 rounded-full bg-red-400" />
                                <span className="h-2 w-2 rounded-full bg-amber-400" />
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                <div className="ml-3 flex-1 h-4 rounded-md bg-slate-50 border border-slate-200/50 flex items-center px-2 gap-1">
                                    <Globe className="h-2 w-2 text-slate-300" />
                                    <div className="h-1.5 w-16 rounded-full bg-slate-200" />
                                </div>
                            </div>
                            {/* Page Content */}
                            <div className="flex h-[calc(100%-28px)]">
                                {/* Mini Sidebar */}
                                <div className="hidden sm:flex w-8 flex-col items-center gap-2 border-r border-slate-200/40 bg-white/60 py-3">
                                    <div className="h-3 w-3 rounded bg-blue-500" />
                                    <div className="h-2 w-2 rounded bg-slate-200" />
                                    <div className="h-2 w-2 rounded bg-slate-200" />
                                    <div className="h-2 w-2 rounded bg-slate-200" />
                                </div>
                                {/* Main Content */}
                                <div className="flex-1 p-2.5 space-y-2 overflow-hidden">
                                    {/* Nav */}
                                    <div className="flex items-center justify-between">
                                        <div className="h-2.5 w-12 rounded bg-slate-800" />
                                        <div className="flex gap-3">
                                            <div className="h-1.5 w-8 rounded bg-slate-200" />
                                            <div className="h-1.5 w-8 rounded bg-slate-200" />
                                            <div className="h-1.5 w-8 rounded bg-slate-200" />
                                            <div className="h-4 w-10 rounded-md bg-blue-500" />
                                        </div>
                                    </div>
                                    {/* Hero */}
                                    <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 p-3 flex gap-3 transition-transform duration-500 group-hover:-translate-y-0.5">
                                        <div className="flex-1 space-y-1.5">
                                            <div className="h-3 w-full rounded-full bg-blue-200" />
                                            <div className="h-2 w-3/4 rounded-full bg-blue-100" />
                                            <div className="h-1.5 w-1/2 rounded-full bg-blue-100/60" />
                                            <div className="mt-2 h-5 w-16 rounded-md bg-blue-500" />
                                        </div>
                                        <div className="h-14 w-14 rounded-md bg-white/60 border border-blue-100" />
                                    </div>
                                    {/* Cards Row */}
                                    <div className="flex gap-1.5">
                                        <div className="flex-1 rounded-md bg-white border border-slate-200/50 p-2 space-y-1">
                                            <div className="h-5 w-5 rounded bg-blue-50 mx-auto" />
                                            <div className="h-1.5 w-8 rounded-full bg-slate-200 mx-auto" />
                                        </div>
                                        <div className="flex-1 rounded-md bg-white border border-slate-200/50 p-2 space-y-1">
                                            <div className="h-5 w-5 rounded bg-emerald-50 mx-auto" />
                                            <div className="h-1.5 w-8 rounded-full bg-slate-200 mx-auto" />
                                        </div>
                                        <div className="flex-1 rounded-md bg-white border border-slate-200/50 p-2 space-y-1">
                                            <div className="h-5 w-5 rounded bg-amber-50 mx-auto" />
                                            <div className="h-1.5 w-8 rounded-full bg-slate-200 mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Hover badge */}
                            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-md ring-1 ring-slate-100 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                <TrendingUp className="h-3 w-3 text-emerald-500" />
                                <span className="text-[9px] font-bold text-emerald-600">PageSpeed 98</span>
                            </div>
                        </div>

                        <h3 className="relative text-[22px] font-bold text-slate-900 mb-3">Custom SEO Websites</h3>
                        <p className="relative text-[15px] font-medium leading-relaxed text-slate-600 mb-8 min-h-[70px]">
                            Lightning fast, mobile-first, and designed with one specific goal: turning local search traffic into booked jobs organically.
                        </p>

                        <div className="relative mt-auto pt-6 border-t border-slate-200/50 space-y-3">
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">High-conversion design</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">On-page technical SEO</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">Fully managed premium hosting</span>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 2: GBP Optimization (Center - Elevated) */}
                    <div className="group relative z-10 flex flex-col rounded-[32px] border border-white/80 bg-white/70 p-8 pt-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/90 md:-mt-6 md:mb-6"
                        style={{
                            boxShadow: "0 30px 60px -15px rgba(11,18,32,0.08), inset 0 0 0 1px rgba(255,255,255,0.9)",
                            backdropFilter: "blur(24px)"
                        }}>
                        {/* Inner Sheen */}
                        <div className="absolute inset-x-0 top-0 h-32 rounded-t-[32px] bg-gradient-to-b from-white to-transparent opacity-80 pointer-events-none" />

                        {/* Google Maps-Style Mockup */}
                        <div className="relative mb-6 w-full h-[200px] overflow-hidden rounded-[16px] border border-slate-200/60 shadow-sm">
                            {/* Full Google Maps SVG Background */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                {/* Land base */}
                                <rect width="400" height="280" fill="#F0EDE8" />

                                {/* Water / River */}
                                <path d="M-10,200 Q80,160 150,190 T300,150 L400,170 L400,220 L-10,240 Z" fill="#AAD3DF" />
                                <path d="M320,0 Q340,60 360,40 L400,50 L400,0 Z" fill="#AAD3DF" className="opacity-60" />

                                {/* Parks / Green spaces */}
                                <rect x="30" y="20" width="60" height="40" rx="4" fill="#C8E6C9" />
                                <rect x="280" y="60" width="50" height="35" rx="4" fill="#C8E6C9" />
                                <rect x="180" y="230" width="70" height="30" rx="4" fill="#C8E6C9" />
                                <circle cx="340" cy="240" r="20" fill="#C8E6C9" />

                                {/* Major Roads (thicker, white) */}
                                <path d="M0,100 L400,90" fill="none" stroke="#FFFFFF" strokeWidth="10" />
                                <path d="M200,-10 L180,140 L200,290" fill="none" stroke="#FFFFFF" strokeWidth="12" />
                                <path d="M0,180 L120,170 L200,140 L300,160 L400,140" fill="none" stroke="#FFFFFF" strokeWidth="8" />

                                {/* Minor Streets (thinner) */}
                                <path d="M80,-10 L90,100" fill="none" stroke="#FFFFFF" strokeWidth="5" />
                                <path d="M310,-10 L300,90" fill="none" stroke="#FFFFFF" strokeWidth="5" />
                                <path d="M0,50 L90,55 M110,50 L200,45" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <path d="M200,45 L300,50 M320,55 L400,60" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <path d="M90,100 L90,170" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <path d="M300,90 L310,160" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <path d="M120,170 L130,290" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <path d="M300,160 L290,290" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <path d="M0,140 L80,135 M110,140 L180,140" fill="none" stroke="#FFFFFF" strokeWidth="3" />

                                {/* Building blocks (subtle gray rectangles) */}
                                <rect x="95" y="20" width="18" height="25" rx="2" fill="#E0DCD3" />
                                <rect x="120" y="18" width="22" height="30" rx="2" fill="#E0DCD3" />
                                <rect x="148" y="22" width="15" height="22" rx="2" fill="#E0DCD3" />
                                <rect x="210" y="15" width="25" height="28" rx="2" fill="#DDDAD3" />
                                <rect x="240" y="20" width="20" height="20" rx="2" fill="#E0DCD3" />
                                <rect x="95" y="105" width="20" height="22" rx="2" fill="#E0DCD3" />
                                <rect x="120" y="108" width="25" height="18" rx="2" fill="#DDDAD3" />
                                <rect x="210" y="100" width="22" height="25" rx="2" fill="#E0DCD3" />
                                <rect x="240" y="95" width="18" height="30" rx="2" fill="#E0DCD3" />
                                <rect x="95" y="175" width="15" height="20" rx="2" fill="#E0DCD3" />
                                <rect x="315" y="100" width="20" height="18" rx="2" fill="#DDDAD3" />
                                <rect x="340" y="95" width="25" height="22" rx="2" fill="#E0DCD3" />
                                <rect x="35" y="110" width="16" height="20" rx="2" fill="#DDDAD3" />
                                <rect x="55" y="105" width="20" height="25" rx="2" fill="#E0DCD3" />
                            </svg>

                            {/* Competitors */}
                            <div className="absolute left-[15%] top-[22%] flex flex-col items-center opacity-50">
                                <div className="h-5 w-5 rounded-full bg-slate-400 flex items-center justify-center shadow-sm"><MapPin className="h-3 w-3 text-white" fill="currentColor" /></div>
                                <span className="mt-0.5 text-[7px] font-bold text-slate-500 bg-white/70 px-1 rounded">Competitor</span>
                            </div>
                            <div className="absolute right-[18%] top-[18%] flex flex-col items-center opacity-50">
                                <div className="h-5 w-5 rounded-full bg-slate-400 flex items-center justify-center shadow-sm"><MapPin className="h-3 w-3 text-white" fill="currentColor" /></div>
                                <span className="mt-0.5 text-[7px] font-bold text-slate-500 bg-white/70 px-1 rounded">Competitor</span>
                            </div>
                            <div className="absolute left-[25%] bottom-[18%] flex flex-col items-center opacity-40">
                                <div className="h-5 w-5 rounded-full bg-slate-400 flex items-center justify-center shadow-sm"><MapPin className="h-3 w-3 text-white" fill="currentColor" /></div>
                            </div>
                            <div className="absolute right-[30%] bottom-[25%] flex flex-col items-center opacity-40">
                                <div className="h-5 w-5 rounded-full bg-slate-400 flex items-center justify-center shadow-sm"><MapPin className="h-3 w-3 text-white" fill="currentColor" /></div>
                            </div>

                            {/* Your Business Pin (Hero) */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-[55%] group-hover:scale-110">
                                {/* Pulse */}
                                <div className="absolute left-1/2 top-2 -translate-x-1/2"><div className="h-12 w-12 rounded-full bg-emerald-400 opacity-20 animate-ping" /></div>
                                <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg ring-[3px] ring-white">
                                    <MapPin className="h-4 w-4 text-white" fill="currentColor" />
                                </div>
                                <div className="mt-1.5 rounded-lg bg-white px-3 py-2 shadow-lg ring-1 ring-slate-100 flex flex-col items-center">
                                    <span className="text-[11px] font-bold text-slate-900">Your Business</span>
                                    <div className="flex items-center gap-0.5 mt-0.5">
                                        <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                        <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                        <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                        <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                        <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                        <span className="ml-1 text-[9px] font-semibold text-slate-500">5.0 (214)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Map Controls (bottom-right, like Google) */}
                            <div className="absolute bottom-2 right-2 flex flex-col gap-1 z-20">
                                <div className="h-5 w-5 rounded bg-white shadow-md flex items-center justify-center text-[10px] font-bold text-slate-500">+</div>
                                <div className="h-5 w-5 rounded bg-white shadow-md flex items-center justify-center text-[10px] font-bold text-slate-500">−</div>
                            </div>
                        </div>

                        <h3 className="relative text-[22px] font-bold text-slate-900 mb-3">Google Map Pack Dominance</h3>
                        <p className="relative text-[15px] font-medium leading-relaxed text-slate-600 mb-8 min-h-[70px]">
                            We secure the top 3 spots in your local map pack where 80% of all targeted customers are actively clicking to call.
                        </p>

                        <div className="relative mt-auto pt-6 border-t border-slate-200/50 space-y-3">
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">Keyword rank tracking</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">Weekly profile updates</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">Local citation building</span>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 3: CRM & Call Tracking (Right) */}
                    <div className="group relative flex flex-col rounded-[32px] border border-white/60 bg-white/50 p-8 pt-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/70"
                        style={{
                            boxShadow: "0 20px 40px -15px rgba(11,18,32,0.05), inset 0 0 0 1px rgba(255,255,255,0.8)",
                            backdropFilter: "blur(24px)"
                        }}>
                        {/* Inner Sheen */}
                        <div className="absolute inset-x-0 top-0 h-32 rounded-t-[32px] bg-gradient-to-b from-white to-transparent opacity-60 pointer-events-none" />

                        {/* CRM Pipeline Mockup */}
                        <div className="relative mb-6 w-full h-[200px] overflow-hidden rounded-[16px] border border-slate-200/60 bg-white shadow-sm">
                            {/* CRM Top Bar */}
                            <div className="flex items-center gap-2 border-b border-slate-200/60 bg-slate-50 px-3 py-2">
                                <div className="h-3 w-3 rounded bg-indigo-500" />
                                <div className="h-2 w-16 rounded-full bg-slate-800" />
                                <div className="ml-auto flex items-center gap-2">
                                    <div className="h-4 w-4 rounded-full bg-slate-200" />
                                    <div className="h-2 w-6 rounded-full bg-slate-200" />
                                </div>
                            </div>
                            <div className="flex h-[calc(100%-32px)]">
                                {/* Sidebar */}
                                <div className="hidden sm:flex w-10 flex-col items-center gap-2.5 border-r border-slate-200/40 bg-slate-50/60 py-3">
                                    <div className="h-3 w-3 rounded bg-indigo-100" />
                                    <div className="h-3 w-3 rounded bg-slate-200" />
                                    <div className="h-3 w-3 rounded bg-slate-200" />
                                    <div className="mt-auto h-3 w-3 rounded bg-slate-100" />
                                </div>
                                {/* Pipeline Columns */}
                                <div className="flex-1 flex gap-2 p-2.5">
                                    {/* New Lead */}
                                    <div className="flex-1 flex flex-col gap-1.5">
                                        <div className="flex items-center gap-1 mb-1">
                                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                            <span className="text-[7px] font-bold uppercase tracking-wide text-slate-400">New Lead</span>
                                            <span className="ml-auto text-[7px] font-bold text-blue-400 bg-blue-50 px-1 rounded">3</span>
                                        </div>
                                        <div className="rounded-md border border-blue-200/60 bg-blue-50/50 p-1.5 shadow-sm transition-transform duration-700 group-hover:translate-x-[calc(100%+8px)]">
                                            <div className="h-1.5 w-12 rounded-full bg-blue-300" />
                                            <div className="mt-1 flex items-center gap-1">
                                                <div className="h-1 w-6 rounded-full bg-blue-200" />
                                                <Phone className="h-2 w-2 text-blue-300" />
                                            </div>
                                        </div>
                                        <div className="rounded-md border border-slate-200/60 bg-white p-1.5 shadow-sm">
                                            <div className="h-1.5 w-10 rounded-full bg-slate-200" />
                                            <div className="mt-1 h-1 w-5 rounded-full bg-slate-100" />
                                        </div>
                                        <div className="rounded-md border border-slate-200/60 bg-white p-1.5 shadow-sm opacity-60">
                                            <div className="h-1.5 w-8 rounded-full bg-slate-200" />
                                            <div className="mt-1 h-1 w-4 rounded-full bg-slate-100" />
                                        </div>
                                    </div>
                                    {/* Quote Sent */}
                                    <div className="flex-1 flex flex-col gap-1.5">
                                        <div className="flex items-center gap-1 mb-1">
                                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                                            <span className="text-[7px] font-bold uppercase tracking-wide text-slate-400">Quoted</span>
                                            <span className="ml-auto text-[7px] font-bold text-amber-500 bg-amber-50 px-1 rounded">1</span>
                                        </div>
                                        <div className="rounded-md border border-amber-200/60 bg-amber-50/30 p-1.5 shadow-sm">
                                            <div className="h-1.5 w-9 rounded-full bg-amber-200" />
                                            <div className="mt-1 h-1 w-5 rounded-full bg-amber-100" />
                                        </div>
                                    </div>
                                    {/* Booked */}
                                    <div className="flex-1 flex flex-col gap-1.5">
                                        <div className="flex items-center gap-1 mb-1">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-[7px] font-bold uppercase tracking-wide text-slate-400">Booked</span>
                                            <span className="ml-auto text-[7px] font-bold text-emerald-500 bg-emerald-50 px-1 rounded">2</span>
                                        </div>
                                        <div className="rounded-md border border-emerald-200/60 bg-emerald-50/50 p-1.5 shadow-sm">
                                            <div className="flex items-center justify-between">
                                                <div className="h-1.5 w-8 rounded-full bg-emerald-300" />
                                                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                                            </div>
                                            <div className="mt-1 h-1 w-5 rounded-full bg-emerald-200" />
                                        </div>
                                        <div className="rounded-md border border-emerald-200/60 bg-emerald-50/30 p-1.5 shadow-sm">
                                            <div className="flex items-center justify-between">
                                                <div className="h-1.5 w-7 rounded-full bg-emerald-300" />
                                                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                                            </div>
                                            <div className="mt-1 h-1 w-4 rounded-full bg-emerald-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Hover Notification */}
                            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-md ring-1 ring-slate-100 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-200">
                                <MessageSquare className="h-3 w-3 text-indigo-500" />
                                <span className="text-[9px] font-bold text-indigo-600">Auto Text Sent</span>
                            </div>
                        </div>

                        <h3 className="relative text-[22px] font-bold text-slate-900 mb-3">CRM & Missed-Call Tracking</h3>
                        <p className="relative text-[15px] font-medium leading-relaxed text-slate-600 mb-8 min-h-[70px]">
                            Never lose a job to a competitor again. Track every lead and instantly automate text-backs for missed calls.
                        </p>

                        <div className="relative mt-auto pt-6 border-t border-slate-200/50 space-y-3">
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">Unified communications inbox</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">Automated lead follow-up</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500 mt-0.5" />
                                <span className="text-[13.5px] font-semibold text-slate-700">ROI & Pipeline tracking</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ════ HORIZONTAL SOCIAL MEDIA CARD (Bottom) ════ */}
                <div className="mt-6 md:mt-8 max-w-[1000px] mx-auto xl:max-w-none group relative overflow-hidden rounded-[24px] border border-white/60 bg-white/50 p-6 md:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/70 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left"
                    style={{
                        boxShadow: "0 20px 40px -15px rgba(11,18,32,0.05), inset 0 0 0 1px rgba(255,255,255,0.8)",
                        backdropFilter: "blur(24px)"
                    }}>
                    {/* Inner Sheen */}
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent opacity-60 pointer-events-none" />

                    {/* Social Post Mockup — Two stacked cards */}
                    <div className="relative w-[200px] shrink-0 space-y-2">
                        {/* Post 1 */}
                        <div className="overflow-hidden rounded-[14px] border border-slate-200/60 bg-white shadow-sm">
                            <div className="p-2.5 space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-rose-400 to-orange-300" />
                                    <div className="flex-1">
                                        <div className="h-1.5 w-14 rounded-full bg-slate-800" />
                                        <div className="mt-1 h-1 w-10 rounded-full bg-slate-200" />
                                    </div>
                                </div>
                                <div className="h-14 w-full rounded-lg bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100/50 flex items-center justify-center">
                                    <div className="h-6 w-6 rounded bg-rose-200/60" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Heart className="h-3 w-3 text-rose-500" fill="currentColor" />
                                        <span className="text-[9px] font-bold text-rose-600">248</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageSquare className="h-3 w-3 text-slate-400" />
                                        <span className="text-[9px] font-bold text-slate-400">32</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Share2 className="h-3 w-3 text-slate-400" />
                                        <span className="text-[9px] font-bold text-slate-400">14</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Post 2 (peeking) */}
                        <div className="overflow-hidden rounded-[14px] border border-slate-200/60 bg-white shadow-sm opacity-60">
                            <div className="p-2.5">
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300" />
                                    <div className="flex-1">
                                        <div className="h-1.5 w-14 rounded-full bg-slate-800" />
                                        <div className="mt-1 h-1 w-10 rounded-full bg-slate-200" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex-1">
                        <h3 className="text-[20px] font-bold text-slate-900">Plus, complete Social Media Management</h3>
                        <p className="mt-1 text-[15px] font-medium text-slate-600">
                            Keep your brand top-of-mind with weekly engaging content that builds local authority and trust, entirely managed by us.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

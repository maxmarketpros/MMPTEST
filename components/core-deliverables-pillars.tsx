"use client"

import { Globe, MapPin, Phone, Share2, Zap, CheckCircle2 } from "lucide-react"

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

                        {/* Icon Assembly */}
                        <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200/50 bg-blue-50/50 shadow-sm ring-1 ring-white">
                            <Globe className="h-7 w-7 text-blue-600" strokeWidth={1.5} />
                            <div className="absolute inset-0 rounded-2xl bg-blue-400/10 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
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

                        {/* Icon Assembly */}
                        <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200/50 bg-emerald-50/50 shadow-sm ring-1 ring-white">
                            <MapPin className="h-7 w-7 text-emerald-600" strokeWidth={1.5} />
                            <div className="absolute inset-0 rounded-2xl bg-emerald-400/20 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
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

                        {/* Icon Assembly */}
                        <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-200/50 bg-indigo-50/50 shadow-sm ring-1 ring-white">
                            <Phone className="h-7 w-7 text-indigo-600" strokeWidth={1.5} />
                            <div className="absolute inset-0 rounded-2xl bg-indigo-400/10 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
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

                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rose-200/50 bg-rose-50/50 shadow-sm ring-1 ring-white">
                        <Share2 className="h-6 w-6 text-rose-500" strokeWidth={1.5} />
                        <div className="absolute inset-0 rounded-2xl bg-rose-400/10 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
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

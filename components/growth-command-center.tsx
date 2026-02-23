"use client"

import {
    BarChart3,
    MessageSquare,
    Star,
    Settings,
    MapPin,
    Smartphone,
    Zap,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Mail,
    Phone
} from "lucide-react"

export function GrowthCommandCenter() {
    return (
        <section
            className="relative overflow-hidden border-b border-slate-100/50"
            style={{ backgroundColor: "var(--wash)" }} // changed to use the core wash variable
        >
            {/* 1px hairline gradient divider */}
            <div
                className="absolute inset-x-0 top-0 h-[1px]"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(11,18,32,0.06) 50%, transparent)"
                }}
            />

            {/* Large Radial Glow (Expanded and tied to the hero blue tone) */}
            <div
                className="pointer-events-none absolute z-0"
                style={{
                    top: "-40%",
                    left: "-20%",
                    width: "140%",
                    height: "140%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at top, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.02) 40%, transparent 70%)"
                }}
            />

            {/* Noise layer (3-5% opacity) */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "url(/hero/noise.png)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:py-32">

                {/* Heading Block */}
                <div className="mb-16 text-center">
                    {/* Eyebrow */}
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/60 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-slate-500 shadow-sm backdrop-blur-md">
                        <Settings className="h-3.5 w-3.5 text-[var(--brand-blue)]" />
                        The Platform
                    </div>

                    {/* Headline */}
                    <h2 className="mx-auto max-w-[800px] text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--ink-900)] sm:text-[48px]">
                        An unfair advantage for your <span className="relative z-10 inline-block">
                            local business
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

                    <p className="mx-auto mt-6 max-w-[600px] text-[17px] font-medium leading-[1.6] text-[var(--text-700)]">
                        Everything you need to dominate local search and turn web traffic into booked jobs—all completely managed for you.
                    </p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {/* ════ CARD A: GBP Dominance (Large span 2) ════ */}
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 md:col-span-2 lg:col-span-2"
                        style={{
                            boxShadow: "0 10px 30px -10px rgba(11,18,32,0.05), inset 0 0 0 1px rgba(255,255,255,0.6)",
                            backdropFilter: "blur(12px)"
                        }}
                    >
                        {/* Visual Area */}
                        <div className="relative h-[240px] w-full overflow-hidden border-b border-slate-100 bg-[#E8EDF2]/40 p-6 sm:h-[280px]">

                            {/* Stylish SVG Map Background */}
                            <div className="absolute inset-0 opacity-[0.8] mix-blend-multiply pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                    {/* Water/River block */}
                                    <path d="M-50,80 Q150,180 250,80 T650,180 L650,450 L-50,450 Z" fill="#D6E4F0" className="opacity-40" />

                                    {/* Greenery / Park blocks */}
                                    <path d="M400,20 Q450,100 550,50 Z" fill="#D1E8D5" className="opacity-50" />
                                    <path d="M-20,250 Q100,220 150,300 L50,400 Z" fill="#D1E8D5" className="opacity-50" />
                                    <path d="M200,350 Q300,280 400,350 L300,450 Z" fill="#D1E8D5" className="opacity-40" />

                                    {/* Arterial Highways */}
                                    <path d="M100,-50 L180,150 L120,450" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M350,-50 L280,200 L420,450" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M-50,220 L280,200 L650,120" fill="none" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M180,150 L380,250" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />

                                    {/* Minor Local Streets */}
                                    <path d="M0,120 L180,150 M80,250 L120,280 M280,250 L420,320 M380,150 L450,80 M480,220 L520,400 M200,80 L250,30 M550,150 L600,120 M120,380 L200,350 M350,380 L420,450" fill="none" stroke="#FFFFFF" strokeWidth="5" className="opacity-70" />
                                </svg>
                            </div>

                            {/* The Map Simulation */}
                            <div className="absolute inset-0 flex items-center justify-center">

                                {/* Competitor Pins */}
                                <div className="absolute left-[20%] top-[30%] flex flex-col items-center opacity-60 transition-transform duration-700 ease-out group-hover:-translate-y-1">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 shadow-sm">
                                        <MapPin className="h-3 w-3 text-white" fill="currentColor" />
                                    </div>
                                    <span className="mt-1 text-[9px] font-semibold text-slate-400">Not Ranked</span>
                                </div>
                                <div className="absolute right-[25%] top-[25%] flex flex-col items-center opacity-60 transition-transform duration-700 delay-100 ease-out group-hover:-translate-y-1">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 shadow-sm">
                                        <MapPin className="h-3 w-3 text-white" fill="currentColor" />
                                    </div>
                                    <span className="mt-1 text-[9px] font-semibold text-slate-400">Not Ranked</span>
                                </div>
                                <div className="absolute bottom-[25%] right-[35%] flex flex-col items-center opacity-60 transition-transform duration-700 delay-75 ease-out group-hover:-translate-y-1">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 shadow-sm">
                                        <MapPin className="h-3 w-3 text-white" fill="currentColor" />
                                    </div>
                                    <span className="mt-1 text-[9px] font-semibold text-slate-400">Not Ranked</span>
                                </div>

                                {/* Your Business Pin (Hero) */}
                                <div className="relative z-10 flex flex-col items-center transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105">
                                    {/* Pulse Ring */}
                                    <div className="absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2">
                                        <div className="h-16 w-16 animate-ping rounded-full bg-blue-400 opacity-20" />
                                    </div>
                                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#4285F4] shadow-lg ring-4 ring-white">
                                        <MapPin className="h-5 w-5 text-white" fill="currentColor" />
                                    </div>
                                    <div className="mt-2 flex flex-col items-center rounded-lg bg-white px-3 py-1.5 shadow-md ring-1 ring-slate-100">
                                        <span className="text-[12px] font-bold text-slate-900">Your Business</span>
                                        <div className="mt-0.5 flex gap-0.5">
                                            <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                            <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                            <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                            <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                            <Star className="h-2.5 w-2.5 text-[#FBBC04]" fill="currentColor" />
                                            <span className="ml-1 text-[10px] font-semibold text-slate-500">5.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex flex-1 flex-col justify-end p-6 sm:p-8">
                            <h3 className="text-[20px] font-bold text-[var(--ink-900)]">Dominate the Map Pack</h3>
                            <p className="mt-2 text-[15px] font-medium text-[var(--text-700)]">
                                We optimize your Google Business Profile to capture the top 3 spots where 80% of all local phone calls and website clicks happen.
                            </p>
                        </div>
                    </div>

                    {/* ════ CARD B: Lead Capture Web Forms (Small span 1) ════ */}
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 lg:col-span-1"
                        style={{
                            boxShadow: "0 10px 30px -10px rgba(11,18,32,0.05), inset 0 0 0 1px rgba(255,255,255,0.6)",
                            backdropFilter: "blur(12px)"
                        }}
                    >
                        {/* Visual Area */}
                        <div className="relative flex h-[200px] items-center justify-center border-b border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 sm:h-[240px]">
                            {/* Floating Phone UI */}
                            <div className="relative w-full max-w-[160px] rounded-[20px] border-[4px] border-slate-800 bg-white shadow-xl transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                <div className="h-[2px] w-full bg-slate-100" />
                                <div className="p-3">
                                    <div className="h-2 w-1/2 rounded-full bg-slate-200" />
                                    <div className="mt-2 h-20 rounded-md bg-blue-50/50 border border-blue-100 p-2">
                                        <div className="h-1.5 w-1/3 rounded-full bg-blue-300" />
                                        <div className="mt-2 h-4 rounded-sm bg-white border border-slate-200" />
                                        <div className="mt-1 h-4 rounded-sm bg-white border border-slate-200" />
                                        <div className="mt-2 h-5 w-full rounded-md bg-[var(--brand-blue)]" />
                                    </div>
                                </div>
                                {/* Success Notification Pop */}
                                <div className="absolute -right-6 bottom-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-lg ring-1 ring-slate-100 transition-all duration-300 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 delay-150">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                    <span className="text-[10px] font-bold text-slate-700">New Lead!</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex flex-1 flex-col justify-end p-6 sm:p-8">
                            <h3 className="text-[20px] font-bold text-[var(--ink-900)]">Built to Convert</h3>
                            <p className="mt-2 text-[15px] font-medium text-[var(--text-700)]">
                                Lightning-fast sites loaded with perfectly placed forms to turn your traffic into leads.
                            </p>
                        </div>
                    </div>

                    {/* ════ CARD C: Review Generation (Small span 1) ════ */}
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 lg:col-span-1"
                        style={{
                            boxShadow: "0 10px 30px -10px rgba(11,18,32,0.05), inset 0 0 0 1px rgba(255,255,255,0.6)",
                            backdropFilter: "blur(12px)"
                        }}
                    >
                        {/* Visual Area */}
                        <div className="relative flex h-[200px] items-center justify-center border-b border-slate-100 bg-slate-50/50 p-6 sm:h-[240px]">
                            <div className="relative flex flex-col items-center gap-4 transition-transform duration-500 ease-out group-hover:scale-105">
                                {/* Stars */}
                                <div className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-100">
                                    <Star className="h-5 w-5 text-[#FBBC04]" fill="currentColor" />
                                    <Star className="h-5 w-5 text-[#FBBC04]" fill="currentColor" />
                                    <Star className="h-5 w-5 text-[#FBBC04]" fill="currentColor" />
                                    <Star className="h-5 w-5 text-[#FBBC04]" fill="currentColor" />
                                    <Star className="h-5 w-5 text-[#FBBC04]" fill="currentColor" />
                                </div>
                                {/* Badge */}
                                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-500/20">
                                    <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
                                    <span className="text-[12px] font-bold text-emerald-700">Reviews Up 48%</span>
                                </div>

                                {/* Soft glow behind */}
                                <div className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-2xl" />
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex flex-1 flex-col justify-end p-6 sm:p-8">
                            <h3 className="text-[20px] font-bold text-[var(--ink-900)]">Automated Reviews</h3>
                            <p className="mt-2 text-[15px] font-medium text-[var(--text-700)]">
                                Turn happy customers into 5-star reviews automatically, fueling your local SEO trust.
                            </p>
                        </div>
                    </div>

                    {/* ════ CARD D: GoHighLevel CRM Pipeline (Large span 2) ════ */}
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 md:col-span-2 lg:col-span-2"
                        style={{
                            boxShadow: "0 10px 30px -10px rgba(11,18,32,0.05), inset 0 0 0 1px rgba(255,255,255,0.6)",
                            backdropFilter: "blur(12px)"
                        }}
                    >
                        {/* Visual Area */}
                        <div className="relative h-[240px] w-full overflow-hidden border-b border-slate-100 bg-slate-50/50 p-6 sm:h-[280px]">
                            {/* Pipeline UI Mockup */}
                            <div className="absolute left-6 right-6 top-6 bottom-0 rounded-t-xl border border-slate-200/80 bg-white p-4 shadow-md transition-transform duration-500 ease-out group-hover:-translate-y-2">

                                {/* Column Headers */}
                                <div className="flex gap-4 border-b border-slate-100 pb-3">
                                    <div className="flex flex-1 items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">New Lead</span>
                                    </div>
                                    <div className="hidden flex-1 items-center gap-2 sm:flex">
                                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Quote Sent</span>
                                    </div>
                                    <div className="hidden flex-1 items-center gap-2 md:flex">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Job Booked</span>
                                    </div>
                                </div>

                                {/* Cards */}
                                <div className="mt-4 flex gap-4">
                                    {/* Column 1 */}
                                    <div className="flex-1 space-y-3">
                                        {/* Animated card moving columns */}
                                        <div className="relative z-10 rounded-lg border border-blue-200 bg-blue-50 p-3 shadow-sm ring-1 ring-blue-500/10 transition-transform duration-700 ease-out sm:group-hover:translate-x-[calc(100%+16px)]">
                                            <div className="h-2 w-16 rounded-full bg-blue-300" />
                                            <div className="mt-2 h-1.5 w-10 rounded-full bg-blue-200" />
                                        </div>
                                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm">
                                            <div className="h-2 w-14 rounded-full bg-slate-300" />
                                            <div className="mt-2 h-1.5 w-12 rounded-full bg-slate-200" />
                                        </div>
                                    </div>

                                    {/* Column 2 */}
                                    <div className="hidden flex-1 sm:block">
                                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm opacity-60">
                                            <div className="h-2 w-20 rounded-full bg-slate-300" />
                                            <div className="mt-2 h-1.5 w-12 rounded-full bg-slate-200" />
                                        </div>
                                    </div>

                                    {/* Column 3 */}
                                    <div className="hidden flex-1 md:block">
                                        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 shadow-sm">
                                            <div className="flex items-center justify-between">
                                                <div className="h-2 w-16 rounded-full bg-emerald-300" />
                                                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                                            </div>
                                            <div className="mt-2 h-1.5 w-10 rounded-full bg-emerald-200" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex flex-1 flex-col justify-end p-6 sm:p-8">
                            <h3 className="text-[20px] font-bold text-[var(--ink-900)]">Your Growth Engine CRM</h3>
                            <p className="mt-2 text-[15px] font-medium text-[var(--text-700)]">
                                One unified inbox for texts, calls, and forms. Track every job from new lead to closed deal with our white-labeled tracking system.
                            </p>
                        </div>
                    </div>

                    {/* ════ CARD E: Missed Call Text Back (Medium span 2 on md, span 3 on lg) ════ */}
                    <div
                        className="group relative flex flex-col overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 md:col-span-2 lg:col-span-3"
                        style={{
                            boxShadow: "0 10px 30px -10px rgba(11,18,32,0.05), inset 0 0 0 1px rgba(255,255,255,0.6)",
                            backdropFilter: "blur(12px)"
                        }}
                    >
                        <div className="flex flex-col lg:flex-row">

                            {/* Content Area (Left side on Desktop) */}
                            <div className="flex flex-1 flex-col justify-center p-6 sm:p-10 lg:pr-4">
                                <div className="mb-4 inline-flex w-max items-center rounded-full bg-blue-50 px-2.5 py-1 text-[12px] font-semibold tracking-wide text-[var(--brand-blue)] ring-1 ring-blue-500/20">
                                    <Zap className="mr-1.5 h-3.5 w-3.5" />
                                    Instant Automation
                                </div>
                                <h3 className="text-[24px] font-bold text-[var(--ink-900)]">Turn Missed Calls into Texts</h3>
                                <p className="mt-2 max-w-md text-[16px] font-medium leading-[1.6] text-[var(--text-700)]">
                                    60% of customers won't leave a voicemail—they call the next business. Our system instantly texts missed callers back so you never lose a lead to a competitor again.
                                </p>
                            </div>

                            {/* Visual Area (Right side on Desktop) */}
                            <div className="relative flex min-h-[260px] flex-1 items-center justify-center border-t border-slate-100 bg-slate-50/50 p-6 lg:border-l lg:border-t-0">

                                {/* Phone UI Container */}
                                <div className="w-[280px] space-y-3">

                                    {/* Incoming Call (Missed) */}
                                    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-md ring-1 ring-slate-100 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-bold text-slate-900">Missed Call</div>
                                            <div className="text-[11px] text-slate-500">Just now • New Lead</div>
                                        </div>
                                    </div>

                                    {/* Automated Text Reply (Animates in on hover) */}
                                    <div className="ml-8 flex items-end gap-2 opacity-60 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:opacity-100 delay-100">
                                        <div className="rounded-2xl rounded-br-sm border border-slate-200 bg-[var(--brand-blue)] p-3 text-[13px] text-white shadow-sm">
                                            Hey! Sorry we missed your call. How can we help you today?
                                        </div>
                                        <CheckCircle2 className="mb-1 h-3 w-3 shrink-0 text-blue-400" />
                                    </div>

                                    {/* Customer Replies (Animates in) */}
                                    <div className="mr-8 rounded-2xl rounded-bl-sm border border-slate-200 bg-white p-3 text-[13px] text-slate-700 shadow-sm opacity-40 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:opacity-100 delay-300">
                                        Hi, I need to get a quote for a new roof. Are you available this week?
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

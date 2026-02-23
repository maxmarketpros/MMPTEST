"use client"

import { useEffect, useState, useRef } from "react"
import { Check, ClipboardList, Rocket, Search, Settings, ShieldCheck } from "lucide-react"

export function OnboardingTimeline() {
    // 1. Kickoff & Audit (Days 1-3)
    // 2. Local Architecture (Days 4-10)
    // 3. Asset Deployment (Days 11-14)
    // 4. Domination Phase (Day 15+)

    const steps = [
        {
            day: "Days 1-7",
            title: "Discovery & Blueprint",
            description: "We analyze your local market, hijack competitor data, and map out your exact takeover strategy.",
            icon: Search,
            color: "text-slate-400",
            bg: "bg-white/5",
            activeColor: "text-[var(--brand-cyan)]",
            activeBg: "bg-cyan-500/20",
            borderColor: "border-slate-800",
            activeBorderColor: "border-cyan-500/50",
            auraColor: "rgba(6, 182, 212, 0.4)", // cyan
        },
        {
            day: "Days 8-14",
            title: "Custom SEO Website Build",
            description: "Building your high-converting conversion engine, tracking numbers, and bespoke service pages.",
            icon: Settings,
            color: "text-slate-400",
            bg: "bg-white/5",
            activeColor: "text-[var(--brand-blue)]",
            activeBg: "bg-blue-500/20",
            borderColor: "border-slate-800",
            activeBorderColor: "border-blue-500/50",
            auraColor: "rgba(59, 130, 246, 0.4)", // blue
        },
        {
            day: "Days 15-21",
            title: "Authority & Syndication",
            description: "Pushing your new assets live to top Google directory listings, local citations, and GPS maps.",
            icon: Rocket,
            color: "text-slate-400",
            bg: "bg-white/5",
            activeColor: "text-[#8B5CF6]", // Violet
            activeBg: "bg-violet-500/20",
            borderColor: "border-slate-800",
            activeBorderColor: "border-violet-500/50",
            auraColor: "rgba(139, 92, 246, 0.4)", // violet
        },
        {
            day: "Day 30+",
            title: "High-Velocity Scaling",
            description: "Continuous optimization, review generation campaigns, and aggressive ranking expansion.",
            icon: ShieldCheck,
            color: "text-slate-400",
            bg: "bg-white/5",
            activeColor: "text-emerald-400",
            activeBg: "bg-emerald-500/20",
            borderColor: "border-slate-800",
            activeBorderColor: "border-emerald-500/50",
            auraColor: "rgba(16, 185, 129, 0.4)", // emerald
        },
    ]

    // Animation state trigger when in view
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 } // Trigger when 30% visible
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden border-t border-slate-800/50 py-20 sm:py-32"
            style={{ backgroundColor: "var(--ink-900)" }}
        >
            {/* Custom Animation Keyframes for Background */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes slide-dots {
                        0% { background-position: 0px 0px; }
                        100% { background-position: 24px 24px; }
                    }
                `
            }} />

            {/* Clean Static Dot Pattern Background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.25] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

            {/* Glowing, Animated Data Stream Dots */}
            <div
                className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(var(--brand-cyan)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.4] blur-[2px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]"
                style={{ animation: 'slide-dots 4s linear infinite' }}
            />

            <div
                className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(var(--brand-cyan)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.6] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]"
                style={{ animation: 'slide-dots 4s linear infinite' }}
            />

            {/* Dark Mode Noise Layer */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: "url(/hero/noise.png)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16 sm:mb-24 text-center flex flex-col items-center">
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em] text-slate-300 shadow-sm backdrop-blur-md">
                        <ClipboardList className="h-3.5 w-3.5 text-[var(--brand-cyan)]" strokeWidth={2.5} />
                        Deployment Timeline
                    </div>
                    <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[44px] max-w-[700px]">
                        From contact to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-blue)]">domination</span> in 30 days.
                    </h2>
                </div>

                {/* The Timeline Container */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Aura Glow Behind Timeline Line */}
                    <div className="absolute top-[28px] sm:top-[40px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60px] bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-blue)] to-violet-500 opacity-10 blur-[60px] pointer-events-none rounded-full" />

                    {/* Background Track Line (Dark Grey) */}
                    <div className="absolute top-[28px] sm:top-[40px] left-[24px] sm:left-[12.5%] sm:-translate-x-0 w-[2px] sm:w-[75%] h-[calc(100%-80px)] sm:h-[3px] bg-slate-800/80 rounded-full z-0" />

                    {/* Animated Active Track Line (Gradient) */}
                    <div
                        className={`absolute top-[28px] sm:top-[40px] left-[24px] sm:left-[12.5%] sm:-translate-x-0 w-[2px] sm:w-[75%] h-0 sm:h-[3px] rounded-full z-0 transition-all duration-[2000ms] ease-out origin-top sm:origin-left bg-gradient-to-b sm:bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-blue)] to-violet-500 shadow-[0_0_20px_rgba(37,99,235,0.8)] ${isVisible ? 'h-[calc(100%-80px)] sm:scale-x-100 opacity-100' : 'sm:scale-x-0 sm:h-[3px] opacity-0'}`}
                    />

                    {/* Nodes Grid */}
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6 pl-12 sm:pl-0">
                        {steps.map((step, idx) => {
                            const Icon = step.icon
                            // Calculate a staggered delay for each node
                            const delayAttr = { style: { transitionDelay: `${500 + (idx * 400)}ms` } }
                            const isNodeActive = isVisible // We trigger them sequentially via transitionDelay

                            return (
                                <div key={idx} className="relative flex flex-col items-start sm:items-center text-left sm:text-center group">

                                    {/* Sub-node localized Aura */}
                                    <div
                                        className={`absolute top-[28px] sm:top-[40px] left-[28px] sm:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] sm:w-[140px] h-[100px] sm:h-[140px] rounded-full blur-[40px] sm:blur-[60px] opacity-0 transition-opacity duration-1000 ${isNodeActive ? 'opacity-30 group-hover:opacity-50' : ''}`}
                                        style={{ backgroundColor: step.auraColor, transitionDelay: `${500 + (idx * 400)}ms` }}
                                    />

                                    {/* Mobile connector line dot indicator */}
                                    <div className="absolute left-[-48px] top-[24px] w-12 flex justify-center items-center sm:hidden h-2">
                                        <div className={`w-2 h-2 rounded-full transition-all duration-700 shadow-[0_0_8px_var(--brand-cyan)] ${isNodeActive ? 'bg-[var(--brand-cyan)] scale-100' : 'bg-slate-700 scale-0'}`} {...delayAttr} />
                                    </div>

                                    {/* The Node Icon Bubble (Glassmorphism & Ping) */}
                                    <div className="relative">
                                        {/* Radar Ping */}
                                        <div
                                            className={`absolute inset-0 rounded-full transition-opacity duration-[1000ms] pointer-events-none ${isNodeActive ? 'animate-ping opacity-20' : 'opacity-0'}`}
                                            style={{ backgroundColor: step.auraColor, transitionDelay: `${500 + (idx * 400)}ms` }}
                                        />

                                        <div
                                            className={`relative z-10 h-14 w-14 sm:h-20 sm:w-20 rounded-full flex items-center justify-center border-[3px] sm:border-[4px] border-[var(--ink-900)] bg-slate-900/50 backdrop-blur-md shadow-2xl ring-1 transition-all duration-700 group-hover:scale-110 ${isNodeActive ? 'ring-offset-4 ring-offset-[var(--ink-900)] ' + step.activeBorderColor : 'opacity-70 scale-90 grayscale ' + step.borderColor}`}
                                            {...delayAttr}
                                        >
                                            <div className={`absolute inset-0 rounded-full transition-opacity duration-700 blur border border-white/10 ${step.activeBg} ${isNodeActive ? 'opacity-100' : 'opacity-0'}`} />

                                            {/* Icon Container */}
                                            <div className={`relative z-10 flex h-full w-full items-center justify-center rounded-full transition-colors duration-700 ${isNodeActive ? step.activeBg : step.bg}`}>
                                                <Icon className={`h-6 w-6 sm:h-8 sm:w-8 transition-colors duration-700 ${isNodeActive ? step.activeColor : step.color}`} strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Premium Glass Card Content */}
                                    <div
                                        className={`mt-4 sm:mt-8 w-full transition-all duration-700 ${isNodeActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                        {...delayAttr}
                                    >
                                        <div className="relative overflow-hidden rounded-[20px] bg-white/[0.03] border border-white/[0.08] p-5 sm:p-6 backdrop-blur-[12px] shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:bg-white/[0.05] group-hover:border-white/[0.15] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] text-left h-full flex flex-col items-start sm:items-center sm:text-center">
                                            {/* Card Top Sheen */}
                                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

                                            <div className="inline-block rounded-full bg-black/40 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300 shadow-sm ring-1 ring-white/10 mb-3 sm:mb-4">
                                                {step.day}
                                            </div>
                                            <h3 className="text-[16px] sm:text-[18px] font-bold text-white leading-[1.2] mb-2 drop-shadow-sm">
                                                {step.title}
                                            </h3>
                                            <p className="text-[13px] sm:text-[14px] font-medium text-slate-400 leading-relaxed max-w-[260px]">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div >

            </div >
        </section >
    )
} 

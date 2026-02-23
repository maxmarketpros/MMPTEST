"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, ArrowRight, Activity, TrendingDown } from "lucide-react"

export function CostOfInaction() {
    const baseValue = 42450
    const [mounted, setMounted] = useState(false)
    const [value, setValue] = useState(0)

    useEffect(() => {
        setMounted(true)

        // Initial rapid count up
        let startTimestamp: number | null = null
        const duration = 2500 // 2.5 seconds to reach base Value
        let animationFrame: number

        const tick = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

            setValue(Math.floor(easeOutExpo * baseValue))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(tick)
            } else {
                // Once reached, start the slow "bleeding" tick
                setValue(baseValue)
            }
        }

        animationFrame = requestAnimationFrame(tick)

        return () => cancelAnimationFrame(animationFrame)
    }, [])

    // Infinite slow tick effect after initial load
    useEffect(() => {
        if (!mounted || value < baseValue) return
        // Add a random amount every 800ms - 2000ms
        const timeout = setTimeout(() => {
            setValue((prev) => prev + Math.floor(Math.random() * 4) + 1)
        }, Math.random() * 1200 + 800)

        return () => clearTimeout(timeout)
    }, [value, baseValue, mounted])

    // Format currency
    const formattedValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(value)

    if (!mounted) return null

    return (
        <section className="relative w-full overflow-hidden border-b border-slate-100/50 py-16 sm:py-24" style={{ backgroundColor: "var(--wash)" }}>
            {/* 1px hairline gradient divider */}
            <div
                className="absolute inset-x-0 top-0 h-[1px]"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(11,18,32,0.06) 50%, transparent)"
                }}
            />

            {/* Noise layer */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "url(/hero/noise.png)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />

            <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
                <div
                    className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] px-6 py-16 sm:px-12 sm:py-20 lg:p-20"
                    style={{
                        backgroundColor: "#0B1221",
                        backgroundImage: "radial-gradient(circle at 100% 100%, #17243A 0%, #0A101C 100%)",
                        boxShadow: "0 20px 40px -15px rgba(11,18,32,0.15), inset 0 0 0 1px rgba(255,255,255,0.08)"
                    }}
                >
                    {/* Background glow effects inside the dark card */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none opacity-60" />

                    {/* Very subtle grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.02] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                            backgroundSize: '32px 32px'
                        }}
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">

                        {/* Left: Copy & Call to Action */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-red-400 mb-8 shadow-[0_0_15px_rgba(239,68,68,0.15)] ring-1 ring-inset ring-red-500/20 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                STATUS: CRITICAL REVENUE LEAK
                            </div>

                            {/* Headline */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-white mb-6 font-outfit" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                                How much is Page 2 <br className="hidden lg:block" /> of Google <span className="text-neutral-400 font-normal italic">actually costing you?</span>
                            </h2>

                            {/* Subtext */}
                            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-neutral-400 mb-10 leading-relaxed">
                                Every day you aren't dominating your local market, competitors are intercepting your revenue. <strong className="text-neutral-200 font-medium">Word-of-mouth creates a ceiling. Search captures intent.</strong> Stop leaving money on the table.
                            </p>

                            {/* Action */}
                            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start">
                                <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Stop The Bleeding <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </button>
                                <p className="text-sm font-medium text-neutral-500 flex items-center gap-1.5">
                                    <TrendingDown className="w-4 h-4" /> Discover your lost revenue.
                                </p>
                            </div>
                        </div>

                        {/* Right: The Ticker */}
                        <div className="w-full max-w-[480px] lg:w-[480px] shrink-0">
                            <div className="relative group w-full">
                                {/* Inner glow behind the box */}
                                <div className="absolute inset-0 bg-red-500/20 blur-[50px] rounded-full transition-all duration-1000 group-hover:bg-red-500/30"></div>

                                <div className="relative bg-[#070B13]/80 border border-white/10 p-8 sm:p-12 rounded-[24px] backdrop-blur-xl shadow-xl flex flex-col items-center justify-center">
                                    {/* Ticking indicator */}
                                    <div className="absolute top-5 right-6 text-red-500 animate-pulse flex items-center gap-1.5 opacity-80">
                                        <Activity className="w-4 h-4" />
                                        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-400">Live Scan</span>
                                    </div>

                                    <span className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4 text-center">
                                        Estimated Monthly Loss
                                    </span>

                                    <div
                                        className="text-5xl sm:text-7xl font-black tabular-nums tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] font-mono"
                                        style={{
                                            WebkitTextStroke: "1px rgba(255,100,100,0.15)"
                                        }}
                                    >
                                        {formattedValue}
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

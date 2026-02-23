"use client"

import { useState } from "react"
import { CheckCircle2, ArrowRight, MapPin, Info, X, Rocket, Calculator, TrendingUp, Settings } from "lucide-react"

export function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")
    const [showSetupModal, setShowSetupModal] = useState(false)
    const [showRoiCalculator, setShowRoiCalculator] = useState(false)

    // ROI Calculator State
    const [avgTicket, setAvgTicket] = useState(5000)
    const [closeRate, setCloseRate] = useState(25)

    // ROI Math Projections
    const estimatedNewLeads = 35; // Conservative monthly qualified leads
    const estimatedNewDeals = Math.round(estimatedNewLeads * (closeRate / 100));
    const estimatedNewRevenue = estimatedNewDeals * avgTicket;
    const mmpInvestment = 699;
    const monthlyNetProfit = estimatedNewRevenue - mmpInvestment;
    const roiPercentage = mmpInvestment > 0 ? Math.round((monthlyNetProfit / mmpInvestment) * 100) : 0;

    return (
        <section className="relative w-full overflow-hidden border-b border-slate-100/50 py-16 sm:py-20 bg-[#F8FAFC]">

            {/* VIBRANT DYNAMIC BACKGROUND ELEMENTS */}

            {/* 1. Underlying Base Texture */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: "url(/hero/noise.png)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "150px 150px",
                }}
            />

            {/* 2. Massive Colorful Ambient Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-[800px] w-[800px] bg-cyan-400/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-[800px] w-[800px] bg-blue-500/15 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[600px] w-[1000px] bg-emerald-300/10 blur-[120px] rounded-full pointer-events-none scale-150 rotate-12" />

            {/* 3. Subtle Grid Lines to add "Engineering" feel */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.15] z-0"
                style={{
                    backgroundImage: "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
                    backgroundSize: "120px 120px",
                    maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)"
                }}
            />

            <div className="container relative z-10 mx-auto max-w-[1240px] px-6 lg:px-12">

                {/* SECTION HEADER (Matched to Screenshot) */}
                <div className="mb-12 text-center flex flex-col items-center">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-black leading-[1.05] tracking-[-0.03em] text-[#0F172A] mb-3 font-outfit">
                        Plans &amp; Pricing
                    </h2>
                    <p className="max-w-[650px] text-[15px] sm:text-[16px] font-medium leading-[1.6] text-slate-500 mb-8 font-outfit">
                        Choose the engine that fits your market territory. <br className="hidden sm:block" /> Transparent pricing built for home service growth.
                    </p>

                    {/* Highly Styled Toggle Switch (Fixed Layout) */}
                    <div className="relative inline-flex h-[50px] items-center rounded-full bg-white p-[5px] ring-1 ring-slate-200/80 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.05)] font-outfit">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`relative z-10 w-[130px] h-full rounded-full text-[14px] font-bold transition-all duration-300 ${billingCycle === "monthly"
                                ? "bg-[#0F172A] text-white shadow-md"
                                : "text-slate-500 hover:text-slate-800"
                                }`}
                        >
                            Pay Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("annually")}
                            className={`relative z-10 w-[130px] h-full rounded-full text-[14px] font-bold transition-all duration-300 ${billingCycle === "annually"
                                ? "bg-[#0F172A] text-white shadow-md"
                                : "text-slate-500 hover:text-slate-800"
                                }`}
                        >
                            Pay Annually
                            {billingCycle !== "annually" && (
                                <span className="absolute -top-3.5 -right-3 rounded-full bg-emerald-500 px-3 py-0.5 text-[11px] font-black tracking-tight text-white shadow-sm ring-2 ring-white rotate-6 whitespace-nowrap z-20">
                                    SAVE 20%
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* PRICING CARDS ARCHITECTURE */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-6 items-stretch max-w-lg lg:max-w-none mx-auto lg:items-center font-outfit">

                    {/* ──── TIER 1: LOCALMARK (Left Base Card) ──── */}
                    <div className="relative flex flex-col rounded-[28px] border border-slate-200/50 bg-white/70 p-6 pt-8 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(11,18,32,0.06)] transition-transform duration-500 hover:-translate-y-2 lg:h-[90%]">

                        <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-[20px] font-bold text-[#0F172A] tracking-tight">LocalMark</h3>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 ring-1 ring-slate-100">
                                <MapPin className="h-4 w-4" />
                            </div>
                        </div>

                        <div className="mb-6 flex items-baseline text-[#0F172A]">
                            <span className="text-[40px] font-black tracking-[-0.05em]">
                                ${billingCycle === "monthly" ? "399" : "319"}
                            </span>
                            <span className="ml-1 text-[14px] font-bold text-slate-400">/mo</span>
                        </div>

                        <div className="mb-6 rounded-[12px] bg-slate-50/80 border border-slate-100 p-3 text-center">
                            <p className="text-[12px] font-bold text-slate-600">
                                Includes $399 One-Time Buildout
                            </p>
                        </div>

                        <ul className="mb-8 flex flex-1 flex-col gap-3.5 text-[13px] font-semibold text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span><strong className="text-[#0F172A]">Website:</strong> 5 Custom Pages</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>GMB Verification & Optimization</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>Directories & Maps Listing</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>Analytics & Monthly Reporting</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>Contact Center Inbox</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span><strong className="text-[#0F172A]">Local SEO:</strong> 10 Keywords</span>
                            </li>
                        </ul>

                        <button className="mt-auto w-full rounded-full bg-slate-50 border border-slate-200/60 py-3 text-[13px] font-bold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900">
                            Select LocalMark
                        </button>
                    </div>

                    {/* ──── TIER 2: SERVICEPRO (The True Hero Card) ──── */}
                    <div
                        className="group relative z-20 flex flex-col rounded-[32px] p-7 pt-10 md:-my-6 lg:py-12 transition-transform duration-500 hover:-translate-y-3 bg-white"
                        style={{
                            boxShadow: "0 40px 80px -20px rgba(34,211,238,0.2), 0 20px 40px -10px rgba(11,18,32,0.1)",
                        }}
                    >
                        {/* Dynamic Glowing Border Frame */}
                        <div className="absolute inset-0 -z-10 rounded-[28px] ring-1 ring-[#00A1BA]/30 shadow-[inset_0_0_0_1px_rgba(255,255,255,1)]" />
                        <div className="absolute inset-x-0 -top-[1px] mx-auto h-[2px] w-[70%] bg-gradient-to-r from-transparent via-[#00A1BA] to-transparent opacity-80" />

                        {/* Perfect Pill Recommended Badge */}
                        <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 rounded-full border border-[#00A1BA]/20 bg-white px-5 py-1.5 shadow-[0_4px_15px_-3px_rgba(0,161,186,0.15)]">
                            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#00A1BA]">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                Recommended
                            </span>
                        </div>

                        <div className="mb-4 flex flex-col">
                            <h3 className="text-[26px] font-bold text-[#0F172A] tracking-tight">ServicePro</h3>
                        </div>

                        <div className="mb-6 flex items-baseline text-[#0F172A]">
                            <span className="text-[52px] font-black tracking-[-0.05em] leading-none">
                                ${billingCycle === "monthly" ? "699" : "559"}
                            </span>
                            <span className="ml-1.5 text-[14px] font-bold text-slate-400">/mo</span>
                        </div>

                        {/* Icy-Blue Setup Module (Match Screenshot) */}
                        <div className="mb-8 rounded-[14px] bg-[#EEF8FC] border border-[#D5EBF4] p-4 text-center relative w-full group/setup overflow-hidden">
                            <div className="absolute inset-0 bg-white/30 translate-y-[-100%] transition-transform duration-500 group-hover/setup:translate-y-[100%]" />
                            <p className="text-[13px] font-bold text-[#0284C7] mb-0.5">
                                Includes $699 One-Time Buildout
                            </p>
                            <button
                                onClick={() => setShowSetupModal(true)}
                                className="text-[11px] font-bold text-[#38BDF8] underline underline-offset-2 transition-opacity hover:opacity-80"
                            >
                                What's included in the setup?
                            </button>
                        </div>

                        <div className="mb-6">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Everything in LocalMark, plus:</span>
                        </div>

                        <ul className="mb-8 flex flex-1 flex-col gap-3.5 text-[13px] font-semibold text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#00A1BA]" strokeWidth={2.5} />
                                <span><strong className="text-[#0F172A]">Website:</strong> 5-12 Custom Pages</span>
                            </li>

                            {/* Interactive Feature: Voice Search */}
                            <li className="group/tooltip relative flex items-center gap-3 cursor-default">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#00A1BA]" strokeWidth={2.5} />
                                <span className="underline decoration-slate-300 decoration-dashed underline-offset-4">Voice Search Optimization</span>
                                <Info className="h-[14px] w-[14px] text-slate-300 transition-colors group-hover/tooltip:text-slate-500" />
                                {/* Popover */}
                                <div className="pointer-events-none absolute left-0 bottom-full mb-3 w-[260px] opacity-0 translate-y-2 rounded-xl border border-slate-100 bg-slate-900 p-4 shadow-2xl transition-all duration-300 ease-out group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 group-hover/tooltip:pointer-events-auto z-50">
                                    <h4 className="text-[12px] font-bold uppercase tracking-wider text-cyan-400 mb-1">Smart Assistants</h4>
                                    <p className="text-[13px] leading-relaxed text-slate-300 font-medium">We optimize your digital footprint so Siri, Alexa, and Google Assistant recommend your business instantly when locals ask for your services verbally.</p>
                                    <div className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 border-b border-r border-slate-100 bg-slate-900"></div>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#00A1BA]" strokeWidth={2.5} />
                                <span>Social Media Publishing (Video)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#00A1BA]" strokeWidth={2.5} />
                                <span>Automated Review Generation</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#00A1BA]" strokeWidth={2.5} />
                                <span>Payments & Invoicing CRM</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#00A1BA]" strokeWidth={2.5} />
                                <span>Missed Call Text-Back Tracking</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#00A1BA]" strokeWidth={2.5} />
                                <span>40+ Premium Maps & Directories</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#00A1BA]" strokeWidth={2.5} />
                                <span><strong className="text-[#0F172A]">Local SEO:</strong> 15 Keywords</span>
                            </li>
                        </ul>

                        <button className="group mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-[#0F172A] py-3.5 text-[13px] font-bold text-white shadow-xl transition-all hover:bg-black hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
                            Upgrade to ServicePro <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* ──── TIER 3: SIGNATURE (Right Base Card) ──── */}
                    <div className="relative flex flex-col rounded-[28px] border border-slate-200/50 bg-white/70 p-6 pt-8 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(11,18,32,0.06)] transition-transform duration-500 hover:-translate-y-2 lg:h-[90%]">

                        <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-[20px] font-bold text-[#0F172A] tracking-tight">Signature</h3>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-500 ring-1 ring-amber-100">
                                <Rocket className="h-4 w-4" />
                            </div>
                        </div>

                        <div className="mb-6 flex items-baseline text-[#0F172A]">
                            <span className="text-[40px] font-black tracking-[-0.05em]">
                                ${billingCycle === "monthly" ? "1299" : "1039"}
                            </span>
                            <span className="ml-1 text-[14px] font-bold text-slate-400">/mo</span>
                        </div>

                        <div className="mb-6 rounded-[12px] bg-slate-50/80 border border-slate-100 p-3 text-center">
                            <p className="text-[12px] font-bold text-slate-600">
                                Includes $999 One-Time Buildout
                            </p>
                        </div>

                        <div className="mb-6">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Everything in ServicePro, plus:</span>
                        </div>

                        <ul className="mb-8 flex flex-1 flex-col gap-3.5 text-[13px] font-semibold text-slate-600">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span><strong className="text-[#0F172A]">Website:</strong> 12-24 Custom Pages</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>80+ Premium Maps & Directories</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>Email Marketing Setup</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>Managed Professional Blog</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>Full Social Media Management*</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span>AI Chatbot & Review Replies</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-slate-300" strokeWidth={2.5} />
                                <span><strong className="text-[#0F172A]">Local SEO:</strong> 20+ Keywords</span>
                            </li>
                        </ul>

                        <button className="mt-auto w-full rounded-full bg-slate-50 border border-slate-200/60 py-3 text-[13px] font-bold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900">
                            Apply for Signature
                        </button>
                    </div>

                </div>

                {/* THE ROI STICKY BANNER (Lightened for better blend) */}
                <div className="mt-12 sm:mt-16 mx-auto max-w-4xl overflow-hidden rounded-[20px] bg-white border border-slate-200 p-5 sm:p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_20px_40px_-15px_rgba(11,18,32,0.05)] relative font-outfit">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-[300px] w-[300px] bg-emerald-400/10 blur-[60px] rounded-full pointer-events-none" />
                    <div className="flex-1 relative z-10">
                        <h4 className="text-[18px] font-black text-[#0F172A] mb-1">Not sure which plan is right for you?</h4>
                        <p className="text-[14px] text-slate-500 font-medium">Our average $699/mo <strong className="text-[#0F172A] font-bold">ServicePro</strong> client sees a 4x Return on Investment within the first 90 days of launch.</p>
                    </div>
                    <button
                        onClick={() => setShowRoiCalculator(true)}
                        className="relative z-10 shrink-0 rounded-full bg-[#00A1BA] px-6 py-3 text-[13px] font-bold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_8px_20px_-6px_rgba(0,161,186,0.5)] whitespace-nowrap"
                    >
                        Calculate Your ROI
                    </button>
                </div>

            </div>

            {/* Micro-Modal for Setup Fee Explanation */}
            {showSetupModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm transition-opacity">
                    <div className="relative w-full max-w-md scale-100 rounded-[24px] bg-white p-8 shadow-2xl transition-transform animate-in zoom-in-95 duration-200 border border-slate-100">
                        <button
                            onClick={() => setShowSetupModal(false)}
                            className="absolute right-4 top-4 rounded-full bg-slate-100 p-1.5 text-slate-500 transition-colors hover:bg-slate-200 hover:text-[#0F172A]"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF8FC] text-[#00A1BA]">
                            <Settings className="h-6 w-6" />
                        </div>

                        <h3 className="mb-2 text-[20px] font-bold text-[#0F172A]">What's in the Buildout?</h3>
                        <p className="mb-6 text-[14px] leading-relaxed text-slate-500 font-medium">
                            Setup fees aren't penalties. This covers the actual hard labor and asset creation required to engine-tune your business before we launch.
                        </p>

                        <ul className="mb-8 space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#00A1BA]" />
                                <div>
                                    <h4 className="text-[14px] font-bold text-[#0F172A]">Custom Infrastructure</h4>
                                    <p className="text-[13px] text-slate-500 font-medium mt-0.5">Design, development, and launch of your custom website.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#00A1BA]" />
                                <div>
                                    <h4 className="text-[14px] font-bold text-[#0F172A]">CRM Engine Setup</h4>
                                    <p className="text-[13px] text-slate-500 font-medium mt-0.5">Configuring missed-call text backs, payment gateways, and your unified inbox.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#00A1BA]" />
                                <div>
                                    <h4 className="text-[14px] font-bold text-[#0F172A]">Directory Syndication</h4>
                                    <p className="text-[13px] text-slate-500 font-medium mt-0.5">Manual verification and pushing your business to premium local maps.</p>
                                </div>
                            </li>
                        </ul>

                        <button
                            onClick={() => setShowSetupModal(false)}
                            className="w-full rounded-[14px] bg-[#0F172A] py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-black"
                        >
                            Makes Sense
                        </button>
                    </div>
                </div>
            )}

            {/* Interactive ROI Calculator Modal */}
            {showRoiCalculator && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md transition-opacity overflow-y-auto font-outfit">
                    <div className="relative w-full max-w-2xl scale-100 rounded-[28px] bg-white p-6 sm:p-10 shadow-2xl transition-transform animate-in zoom-in-95 duration-200 border border-slate-100 my-8">
                        <button
                            onClick={() => setShowRoiCalculator(false)}
                            className="absolute right-4 top-4 md:right-6 md:top-6 rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-[#0F172A]"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="mb-8 flex flex-col items-center text-center mt-2">
                            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8FC] border border-[#D5EBF4] text-[#00A1BA]">
                                <Calculator className="h-6 w-6" />
                            </div>
                            <h3 className="text-[24px] md:text-[32px] font-black text-[#0F172A] tracking-tight leading-tight">Project Your ServicePro ROI</h3>
                            <p className="mt-3 text-[15px] font-medium text-slate-500 max-w-md">
                                See the mathematical impact our Local SEO & CRM engine can have on your bottom line after 90 days.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                            {/* Inputs */}
                            <div className="space-y-8">
                                <div className="bg-slate-50 p-5 rounded-[20px] border border-slate-100">
                                    <div className="flex justify-between items-end mb-3">
                                        <label className="text-[14px] font-bold text-[#0F172A]">Average Ticket Size</label>
                                        <span className="text-[20px] font-black text-[#00A1BA] tracking-tight">${avgTicket.toLocaleString()}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="500" max="25000" step="500"
                                        value={avgTicket}
                                        onChange={(e) => setAvgTicket(Number(e.target.value))}
                                        className="w-full h-2.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#00A1BA]"
                                    />
                                    <p className="text-[12px] font-bold uppercase tracking-wider text-slate-400 mt-3">Your revenue per average job</p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-[20px] border border-slate-100">
                                    <div className="flex justify-between items-end mb-3 mt-2">
                                        <label className="text-[14px] font-bold text-[#0F172A]">Lead Close Rate</label>
                                        <span className="text-[20px] font-black text-[#00A1BA] tracking-tight">{closeRate}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10" max="80" step="5"
                                        value={closeRate}
                                        onChange={(e) => setCloseRate(Number(e.target.value))}
                                        className="w-full h-2.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#00A1BA]"
                                    />
                                    <p className="text-[12px] font-bold uppercase tracking-wider text-slate-400 mt-3">Percentage of leads you win</p>
                                </div>
                            </div>

                            {/* Outputs */}
                            <div className="bg-[#F8FAFC] rounded-[24px] p-6 lg:p-8 border border-slate-200/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-[150px] w-[150px] bg-emerald-400/20 blur-[40px] rounded-full pointer-events-none" />

                                <div className="mb-6 relative z-10">
                                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Conservative Estimate
                                    </p>
                                    <div className="flex items-baseline gap-2 text-[#0F172A]">
                                        <span className="text-[44px] font-black leading-none tracking-tight">+{estimatedNewDeals}</span>
                                        <span className="text-[15px] font-bold text-slate-500">New Jobs/mo</span>
                                    </div>
                                    <p className="text-[12px] font-medium text-slate-400 mt-2 leading-relaxed">Based on 35 inbound leads generated by the engine monthly.</p>
                                </div>

                                <div className="h-[1px] w-full bg-slate-200/80 my-5 relative z-10" />

                                <div className="relative z-10">
                                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Est. New Revenue
                                    </p>
                                    <div className="flex items-baseline gap-1.5 text-emerald-500">
                                        <span className="text-[44px] font-black leading-none tracking-tight">${estimatedNewRevenue.toLocaleString()}</span>
                                        <span className="text-[15px] font-bold text-emerald-600/60">/mo</span>
                                    </div>
                                </div>

                                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100/80 px-3.5 py-1.5 w-fit shadow-sm relative z-10">
                                    <TrendingUp className="h-[14px] w-[14px] text-emerald-500" strokeWidth={3} />
                                    <span className="text-[13px] font-black tracking-wide text-emerald-600 uppercase">{roiPercentage.toLocaleString()}% Monthly ROI</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-10 pt-8 border-t border-slate-100 flex flex-col items-center">
                            <button
                                onClick={() => setShowRoiCalculator(false)}
                                className="w-full md:w-auto rounded-full bg-[#0F172A] px-12 py-4.5 text-[15px] font-bold text-white transition-all hover:bg-black hover:-translate-y-0.5 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.4)] relative overflow-hidden group"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
                                Claim My Territory Now
                            </button>
                            <p className="text-[11px] font-medium text-slate-400 mt-5 text-center max-w-md leading-relaxed">
                                *Projections are mathematical estimates based on average client performance after the 90-day core infrastructure ramp-up period.
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

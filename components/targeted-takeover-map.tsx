"use client"

import { useState } from "react"
import { Search, MapPin, Star, TrendingUp, CheckCircle2, Navigation, AlertCircle, Phone, Utensils, Heart, Store } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

type IndustryKey = "roofing" | "hvac" | "remodeling" | "landscaping" | "spa" | "restaurant" | "retail"

interface IndustryData {
    id: IndustryKey
    category: string // Drives the dynamic headline (e.g., "Home Services", "Aesthetics Clinics")
    name: string
    subtext: string
    icon: React.ElementType
    searchQuery: string
    mapColor: string
    mapColorLight: string
    clientSpot: {
        name: string
        rating: number
        reviews: number
        highlight: string
        highlightColor: string
    }
    competitors: {
        name: string
        rating: number
        reviews: number
        status: string
    }[]
    kpis: {
        label: string
        value: string
        trend: string
    }[]
}

const industries: Record<IndustryKey, IndustryData> = {
    roofing: {
        id: "roofing",
        category: "Home Services",
        name: "Roofing & Exteriors",
        subtext: "High-ticket storm damage and replacements.",
        icon: Navigation,
        searchQuery: "emergency roof repair near me",
        mapColor: "#0EA5E9",
        mapColorLight: "#E0F2FE",
        clientSpot: {
            name: "Apex Roofing Specialists",
            rating: 5.0,
            reviews: 342,
            highlight: "Responds in < 5 mins",
            highlightColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        },
        competitors: [
            { name: "CityWide Roofers", rating: 4.1, reviews: 89, status: "Missing Calls" },
            { name: "Bob's Contracting", rating: 3.8, reviews: 42, status: "No Website" },
        ],
        kpis: [
            { label: "Avg Ticket Value", value: "$18,500", trend: "+12%" },
            { label: "Inbound Leads", value: "48/mo", trend: "+35%" },
            { label: "Close Rate", value: "32%", trend: "+5%" },
        ]
    },
    hvac: {
        id: "hvac",
        category: "Home Services",
        name: "HVAC & Plumbing",
        subtext: "High-volume emergency dispatch systems.",
        icon: AlertCircle,
        searchQuery: "ac repair 24/7 my city",
        mapColor: "#3B82F6",
        mapColorLight: "#DBEAFE",
        clientSpot: {
            name: "ClimateFlow HVAC",
            rating: 4.9,
            reviews: 856,
            highlight: "24/7 Emergency Dispatch",
            highlightColor: "text-rose-600 bg-rose-50 border-rose-200",
        },
        competitors: [
            { name: "CoolBreeze Air", rating: 4.2, reviews: 120, status: "Page 2 of Google" },
            { name: "Main Street Plumbing", rating: 3.5, reviews: 28, status: "Slow Response" },
        ],
        kpis: [
            { label: "Emergency Calls", value: "115/mo", trend: "+42%" },
            { label: "Response Time", value: "< 2 mins", trend: "-80%" },
            { label: "Maintenance Plans", value: "45 added", trend: "+18%" },
        ]
    },
    remodeling: {
        id: "remodeling",
        category: "Home Services",
        name: "Custom Remodeling",
        subtext: "Hyper-visual luxury kitchen & bath leads.",
        icon: Star,
        searchQuery: "luxury kitchen remodeler",
        mapColor: "#8B5CF6",
        mapColorLight: "#EDE9FE",
        clientSpot: {
            name: "Elevate Design Build",
            rating: 5.0,
            reviews: 128,
            highlight: "Portfolio Highlighted",
            highlightColor: "text-violet-600 bg-violet-50 border-violet-200",
        },
        competitors: [
            { name: "Generic Kitchens", rating: 4.0, reviews: 65, status: "Outdated Photos" },
            { name: "Value Remodel Pros", rating: 3.9, reviews: 112, status: "Low Quality Leads" },
        ],
        kpis: [
            { label: "Project Size", value: "$65,000", trend: "+25%" },
            { label: "Consult Requests", value: "22/mo", trend: "+40%" },
            { label: "Brand Searches", value: "850/mo", trend: "+110%" },
        ]
    },
    landscaping: {
        id: "landscaping",
        category: "Home Services",
        name: "Landscaping & Concrete",
        subtext: "High-density route building & hardscapes.",
        icon: MapPin,
        searchQuery: "stamped concrete driveway contractors",
        mapColor: "#10B981",
        mapColorLight: "#D1FAE5",
        clientSpot: {
            name: "TerraFirma Hardscapes",
            rating: 4.9,
            reviews: 215,
            highlight: "Project Estimator Active",
            highlightColor: "text-amber-600 bg-amber-50 border-amber-200",
        },
        competitors: [
            { name: "Green Thumb Lawns", rating: 4.3, reviews: 54, status: "Maintenance Only" },
            { name: "Local Paving Co", rating: 3.2, reviews: 19, status: "Poor Reviews" },
        ],
        kpis: [
            { label: "Hardscape Leads", value: "35/mo", trend: "+60%" },
            { label: "Route Density", value: "High", trend: "+20%" },
            { label: "Commercial Accts", value: "8 Added", trend: "+100%" },
        ]
    },
    spa: {
        id: "spa",
        category: "Aesthetics Clinics",
        name: "Med Spas & Aesthetics",
        subtext: "High LTV, reputation-driven bookings.",
        icon: Heart,
        searchQuery: "botox and lip fillers near me",
        mapColor: "#F43F5E",      // Rose
        mapColorLight: "#FFE4E6", // Rose 50
        clientSpot: {
            name: "Lumina Medical Spa",
            rating: 4.9,
            reviews: 642,
            highlight: "Online Booking Enabled",
            highlightColor: "text-rose-600 bg-rose-50 border-rose-200",
        },
        competitors: [
            { name: "Youthful Glow Clinic", rating: 4.0, reviews: 112, status: "No Availability" },
            { name: "Downtown Aesthetics", rating: 3.7, reviews: 45, status: "Poor Reviews" },
        ],
        kpis: [
            { label: "New Patients", value: "84/mo", trend: "+45%" },
            { label: "Appt Show Rate", value: "92%", trend: "+15%" },
            { label: "LTV (12mo)", value: "$3,200", trend: "+20%" },
        ]
    },
    restaurant: {
        id: "restaurant",
        category: "Hospitality & Dining",
        name: "Restaurants & Cafes",
        subtext: "Hyper-local foot traffic and reservations.",
        icon: Utensils,
        searchQuery: "best italian restaurant open now",
        mapColor: "#F59E0B",      // Amber
        mapColorLight: "#FEF3C7", // Amber 50
        clientSpot: {
            name: "Trattoria Bella",
            rating: 4.8,
            reviews: 1250,
            highlight: "Menu & Ordering Sync",
            highlightColor: "text-amber-600 bg-amber-50 border-amber-200",
        },
        competitors: [
            { name: "Luigi's Pasta", rating: 4.1, reviews: 850, status: "Unclaimed Profile" },
            { name: "Pizza House", rating: 3.9, reviews: 420, status: "Wrong Hours Listed" },
        ],
        kpis: [
            { label: "Direction Requests", value: "1,200/mo", trend: "+55%" },
            { label: "Table Bookings", value: "450/mo", trend: "+30%" },
            { label: "Menu Views", value: "3,500/mo", trend: "+80%" },
        ]
    },
    retail: {
        id: "retail",
        category: "Local Retail",
        name: "Storefronts & Retail",
        subtext: "Inventory visibility and local discovery.",
        icon: Store,
        searchQuery: "boutique clothing stores downtown",
        mapColor: "#A855F7",      // Purple
        mapColorLight: "#F3E8FF", // Purple 50
        clientSpot: {
            name: "The Velvet Hanger",
            rating: 4.9,
            reviews: 310,
            highlight: "In-Store Inventory Live",
            highlightColor: "text-purple-600 bg-purple-50 border-purple-200",
        },
        competitors: [
            { name: "Chic Avenue", rating: 4.2, reviews: 195, status: "Missing Photos" },
            { name: "Fast Fashion Outlet", rating: 3.6, reviews: 88, status: "Low Quality traffic" },
        ],
        kpis: [
            { label: "In-Store Visits", value: "850/mo", trend: "+40%" },
            { label: "Inventory Clicks", value: "1,200/mo", trend: "+65%" },
            { label: "Avg Purchase", value: "$185", trend: "+12%" },
        ]
    }
}

export function TargetedTakeoverMap() {
    const [activeTab, setActiveTab] = useState<IndustryKey>("roofing")
    const data = industries[activeTab]

    return (
        <section
            className="relative w-full overflow-hidden border-t border-slate-100/50 py-16 sm:py-24 lg:py-32"
            style={{ backgroundColor: "var(--wash)" }} // #F6F9FC
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

            {/* Ambient Background Glow matching the active industry */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] sm:h-[800px] sm:w-[800px] rounded-full blur-[100px] sm:blur-[140px] opacity-10 transition-colors duration-700"
                style={{ backgroundColor: data.mapColor }}
            />

            <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-12">

                {/* Section Header */}
                <div className="mb-10 sm:mb-16 text-center flex flex-col items-center">
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/60 px-3 py-1 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em] text-slate-500 shadow-sm backdrop-blur-md">
                        <Navigation className="h-3.5 w-3.5 text-[var(--brand-cyan)]" fill="currentColor" />
                        Targeted Local Domination
                    </div>

                    <h2 className="text-[32px] sm:text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--ink-900)] md:text-[44px] lg:text-[48px] md:max-w-[800px] flex flex-col items-center">
                        <span>Engineered for</span>
                        <div className="relative h-[1.1em] w-full overflow-hidden flex justify-center mt-1">
                            {/* Animated Industry Category Flip */}
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={data.category}
                                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                                    transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 14 }}
                                    className="block relative z-10 text-[var(--brand-cyan)]"
                                >
                                    {data.category}.
                                    {/* Highlight underline */}
                                    <span
                                        className="absolute -z-10 rounded-md opacity-[0.15]"
                                        style={{
                                            left: "-4px",
                                            right: "-4px",
                                            bottom: "4px",
                                            height: "12px",
                                            background: "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))"
                                        }}
                                    />
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </h2>

                    <p className="mt-5 sm:mt-6 max-w-[600px] text-[15px] sm:text-[17px] font-medium leading-[1.6] text-[var(--text-700)] text-center px-2">
                        We don't do generic marketing. We build custom infrastructure to intercept local intent and dominate specific business territories.
                    </p>
                </div>

                {/* Main Interactive Grid */}
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">

                    {/* Sidebar / Horizontal Scroll Navigation */}
                    <div className="w-full lg:w-[320px] shrink-0 relative">
                        {/* Mobile Gradient Scroll Indicator (Right Edge) */}
                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F6F9FC] to-transparent z-10 pointer-events-none lg:hidden" />

                        {/* Mobile: Horizontal scroll, Desktop: Vertical Stack */}
                        <div className="flex lg:flex-col gap-3 overflow-x-auto pb-6 lg:pb-0 snap-x snap-mandatory hide-scrollbar lg:mx-0 lg:px-0">
                            {/* Start spacer for mobile so the first item aligns with page wrapper, but lets previous item bounce */}
                            <div className="shrink-0 w-2 lg:hidden"></div>
                            {(Object.keys(industries) as IndustryKey[]).map((key) => {
                                const industry = industries[key]
                                const isActive = activeTab === key
                                const Icon = industry.icon

                                return (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`group relative flex shrink-0 w-[260px] sm:w-[280px] lg:w-full flex-col items-start rounded-xl p-3 sm:p-4 text-left transition-all duration-300 border snap-start ${isActive
                                            ? "bg-white border-slate-200/60 shadow-[0_8px_30px_-15px_rgba(11,18,32,0.12)]"
                                            : "border-transparent hover:bg-white/50 bg-white/20"
                                            }`}
                                    >
                                        {isActive && (
                                            <div className="absolute left-[-1px] top-1/2 h-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[var(--brand-cyan)] to-[var(--brand-blue)] hidden lg:block" />
                                        )}
                                        {/* Mobile Active Indicator (Bottom) */}
                                        {isActive && (
                                            <div className="absolute bottom-[-1px] left-1/2 w-1/2 h-[3px] -translate-x-1/2 rounded-t-full bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-blue)] lg:hidden" />
                                        )}

                                        <div className="flex items-center gap-3 w-full">
                                            <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-slate-50 text-[var(--brand-cyan)] ring-1 ring-slate-100' : 'bg-transparent text-slate-400 group-hover:bg-white/80 group-hover:text-slate-500'}`}>
                                                <Icon className="w-4 h-4" strokeWidth={2.5} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-[14px] sm:text-[16px] font-bold ${isActive ? "text-[var(--ink-900)]" : "text-slate-500"}`}>
                                                    {industry.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Main Stage: The Takeover Map */}
                    <div className="flex-1 w-full flex flex-col rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/50 p-2 sm:p-3 transition-all duration-500"
                        style={{
                            boxShadow: "0 40px 90px -15px rgba(11,18,32,0.08), inset 0 0 0 1px rgba(255,255,255,0.8)",
                            backdropFilter: "blur(24px)"
                        }}
                    >
                        {/* Chrome Top Bar */}
                        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-t-[20px] sm:rounded-t-[28px] bg-slate-50/80 border-b border-slate-200/50">
                            <div className="flex gap-1.5 hidden sm:flex">
                                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="mx-auto flex h-8 sm:h-9 w-full max-w-lg items-center gap-2 rounded-full border border-slate-200/60 bg-white px-3 sm:px-4 shadow-sm">
                                <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                                <div className="text-[12px] sm:text-[13px] font-medium text-slate-600 outline-none w-full bg-transparent flex items-center font-mono tracking-tight truncate">
                                    {data.searchQuery}
                                    <span className="w-1.5 h-3 sm:h-4 bg-slate-400 ml-[2px] animate-pulse shrink-0" />
                                </div>
                            </div>
                        </div>

                        {/* Map & Data Area Container */}
                        <div className="relative flex-1 overflow-hidden rounded-b-[20px] sm:rounded-b-[28px] bg-[#E8EAE6] min-h-[500px] lg:min-h-[600px] flex flex-col md:flex-row">

                            {/* 🗺️ DETAILED GOOGLE MAPS SVG BACKGROUND */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                {/* Base Land Color (Light Tan/Grey) */}
                                <rect width="100%" height="100%" fill="#F0EDE8" />

                                {/* Industry Specific Tint Overlay (Very Subtle) */}
                                <rect width="100%" height="100%" fill={data.mapColorLight} className="opacity-[0.15] transition-colors duration-700" />

                                {/* Water Bodies / Rivers */}
                                <path d="M-50,450 Q200,350 400,400 T900,300 L900,650 L-50,650 Z" fill="#AAD3DF" className="opacity-80" />
                                <path d="M600,-50 Q650,150 700,100 L900,0 L900,-50 Z" fill="#AAD3DF" className="opacity-80" />

                                {/* Parks and Green Spaces */}
                                <rect x="50" y="50" width="120" height="80" rx="6" fill="#C8E6C9" className="opacity-70" />
                                <rect x="350" y="150" width="100" height="70" rx="6" fill="#C8E6C9" className="opacity-70" />
                                <path d="M700,500 Q750,450 800,480 L800,600 L650,600 Z" fill="#C8E6C9" className="opacity-70" />

                                {/* Building Blocks (Subtle Greys) */}
                                <rect x="200" y="80" width="40" height="60" rx="2" fill="#E0DCD3" />
                                <rect x="250" y="70" width="50" height="40" rx="2" fill="#DDDAD3" />
                                <rect x="230" y="120" width="70" height="50" rx="2" fill="#E0DCD3" />
                                <rect x="480" y="100" width="60" height="30" rx="2" fill="#E0DCD3" />
                                <rect x="550" y="90" width="45" height="55" rx="2" fill="#DDDAD3" />
                                <rect x="180" y="220" width="55" height="40" rx="2" fill="#E0DCD3" />

                                {/* Arterial Roads (Thick White Strokes) */}
                                <path d="M-50,200 L900,150" fill="none" stroke="#FFFFFF" strokeWidth="12" />
                                <path d="M300,-50 L350,650" fill="none" stroke="#FFFFFF" strokeWidth="14" />
                                <path d="M500,165 L600,650" fill="none" stroke="#FFFFFF" strokeWidth="10" />

                                {/* Side Streets (Thin White Strokes) */}
                                <path d="M0,100 L310,90" fill="none" stroke="#FFFFFF" strokeWidth="5" />
                                <path d="M150,-50 L180,200" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                                <path d="M300,300 L550,250" fill="none" stroke="#FFFFFF" strokeWidth="6" />
                                <path d="M0,350 L250,320 L320,350" fill="none" stroke="#FFFFFF" strokeWidth="5" />
                                <path d="M450,-50 L480,160" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                            </svg>

                            {/* The 3-Pack Results UI (Floating Over Map) */}
                            <div className="relative z-10 w-full md:w-[340px] shrink-0 flex flex-col justify-start p-3 sm:p-4 gap-3 bg-white/20 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border-b sm:border-b-0 sm:border-r border-white/40 max-h-[50%] md:max-h-full overflow-y-auto custom-scrollbar">

                                <div className="mb-1 hidden sm:block bg-white/80 backdrop-blur-md px-3 py-2 rounded-lg border border-white shadow-sm w-fit">
                                    <h4 className="text-[14px] font-bold text-slate-800 flex items-center gap-1.5">
                                        Google Places <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded ml-1">Local Pack</span>
                                    </h4>
                                </div>

                                {/* Client #1 Spot */}
                                <div className="relative overflow-hidden rounded-xl border border-emerald-200/60 bg-white/95 backdrop-blur-md p-3 sm:p-4 shadow-[0_8px_30px_-15px_rgba(16,185,129,0.2)] transform transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h5 className="text-[14px] sm:text-[15px] font-bold text-slate-900 line-clamp-1 pr-2">{data.clientSpot.name}</h5>
                                            <div className="mt-1 flex items-center gap-1">
                                                <span className="text-[12px] sm:text-[13px] font-bold text-slate-700">{data.clientSpot.rating.toFixed(1)}</span>
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <Star key={i} className="h-[10px] w-[10px] sm:h-3 sm:w-3 text-[#FBBC04]" fill="currentColor" />
                                                    ))}
                                                </div>
                                                <span className="text-[11px] sm:text-[12px] font-medium text-slate-500">({data.clientSpot.reviews})</span>
                                            </div>
                                        </div>
                                        <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                                            <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:mt-3">
                                        <span className={`inline-block rounded-md px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-[11px] font-bold border ${data.clientSpot.highlightColor}`}>
                                            {data.clientSpot.highlight}
                                        </span>
                                    </div>
                                    <div className="mt-3 sm:mt-4 flex gap-2">
                                        <button className="flex-[1.5] rounded-lg bg-[#1a73e8] py-1.5 sm:py-2 text-[11px] sm:text-[12px] font-bold text-white shadow-sm hover:bg-blue-700 flex justify-center items-center gap-1.5 transition-colors">
                                            <Phone className="w-3 h-3" fill="currentColor" /> Call Now
                                        </button>
                                        <button className="flex-1 rounded-lg bg-white border border-slate-200 py-1.5 sm:py-2 text-[11px] sm:text-[12px] font-bold text-slate-600 shadow-sm hover:bg-slate-50 flex justify-center items-center gap-1.5 transition-colors">
                                            <Navigation className="w-3 h-3 text-slate-400" /> Website
                                        </button>
                                    </div>
                                </div>

                                {/* Competitors */}
                                {data.competitors.map((comp, idx) => (
                                    <div key={idx} className="flex flex-col gap-2 rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-3 opacity-70 grayscale-[0.3]">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="min-w-0 flex-1">
                                                <h5 className="text-[12px] sm:text-[13px] font-bold text-slate-700 truncate pr-2">{comp.name}</h5>
                                                <div className="mt-1 flex items-center gap-1">
                                                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-600">{comp.rating.toFixed(1)}</span>
                                                    <div className="flex gap-0.5 shrink-0">
                                                        {[1, 2, 3, 4].map((i) => (
                                                            <Star key={i} className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-[#FBBC04]" fill="currentColor" />
                                                        ))}
                                                        <Star className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-slate-300" fill="currentColor" />
                                                    </div>
                                                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500">({comp.reviews})</span>
                                                </div>
                                            </div>
                                            <span className="shrink-0 rounded bg-rose-50 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold text-rose-500 border border-rose-100 whitespace-nowrap">
                                                {comp.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Pins & Floating KPIs (Right Side) */}
                            <div className="relative flex-1 min-h-[300px] md:min-h-full flex justify-center items-center overflow-hidden">

                                {/* Competitor Pins */}
                                <div className="absolute top-[30%] left-[20%] opacity-50">
                                    <div className="h-4 w-4 rounded-full bg-slate-400 border-2 border-white shadow-sm" />
                                </div>
                                <div className="absolute bottom-[20%] right-[30%] opacity-50">
                                    <div className="h-4 w-4 rounded-full bg-slate-400 border-2 border-white shadow-sm" />
                                </div>

                                {/* Main Client Pin */}
                                <div className="relative z-20 flex flex-col items-center transform transition-transform duration-500 hover:scale-105 -translate-y-6">

                                    {/* The Base Beacon / Pulsing Dot */}
                                    <div className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 flex items-center justify-center">
                                        <div className="absolute h-10 w-10 animate-ping rounded-full opacity-30 mix-blend-multiply transition-colors duration-700" style={{ backgroundColor: data.mapColor }} />
                                        <div className="absolute h-8 w-8 animate-pulse rounded-full opacity-40 transition-colors duration-700" style={{ backgroundColor: data.mapColor }} />
                                        <div className="h-4 w-4 rounded-full border-[3px] border-white shadow-md transition-colors duration-700 relative z-10" style={{ backgroundColor: data.mapColor }} />
                                    </div>

                                    {/* Authentic Google Maps Teardrop Shape */}
                                    <div className="relative flex flex-col items-center drop-shadow-xl z-20">
                                        {/* The Teardrop SVG Path */}
                                        <svg
                                            width="48"
                                            height="64"
                                            viewBox="0 0 48 64"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-colors duration-700"
                                            style={{ color: data.mapColor }}
                                        >
                                            {/* White border stroke */}
                                            <path
                                                d="M24 0C10.745 0 0 10.745 0 24C0 42 24 64 24 64C24 64 48 42 48 24C48 10.745 37.255 0 24 0Z"
                                                fill="white"
                                            />
                                            {/* Colored Inner Fill */}
                                            <path
                                                d="M24 3C12.402 3 3 12.402 3 24C3 39.75 24 59 24 59C24 59 45 39.75 45 24C45 12.402 35.598 3 24 3Z"
                                                fill="currentColor"
                                            />
                                            {/* White Inner Hole */}
                                            <circle cx="24" cy="24" r="10" fill="white" />
                                        </svg>
                                    </div>

                                    {/* Client Name Tag */}
                                    <div className="absolute top-[-44px] left-1/2 -translate-x-1/2 rounded-[10px] bg-white px-3 py-1.5 shadow-xl ring-1 ring-slate-100 flex items-center gap-1.5 whitespace-nowrap z-30">
                                        <span className="text-[12px] sm:text-[13px] font-bold text-slate-900">{data.clientSpot.name}</span>
                                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500" />
                                    </div>
                                </div>

                                {/* Floating KPI Cards */}
                                <div className="absolute bottom-4 right-4 sm:top-6 sm:bottom-auto sm:right-6 flex flex-col gap-2 z-30 pointer-events-none w-[140px] sm:w-auto">
                                    {data.kpis.map((kpi, idx) => (
                                        <div key={idx} className="flex items-center gap-2 sm:gap-3 rounded-xl bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 shadow-md ring-1 ring-slate-200/60 transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: `${Math.random() * 100}ms` }}>
                                            <div className="flex-1">
                                                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">{kpi.label}</p>
                                                <p className="text-[12px] sm:text-[14px] font-black tracking-tight text-slate-800 leading-tight mt-0.5">{kpi.value}</p>
                                            </div>
                                            <div className="flex h-5 sm:h-6 items-center rounded bg-emerald-50 px-1 sm:px-1.5 text-[9px] sm:text-[10px] font-bold text-emerald-600 shrink-0">
                                                <TrendingUp className="mr-0.5 sm:mr-1 h-2 w-2 sm:h-2.5 sm:w-2.5" strokeWidth={3} />
                                                {kpi.trend}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Map Zoom Controls mock */}
                                <div className="absolute bottom-4 left-4 flex flex-col gap-1 hidden sm:flex">
                                    <div className="h-7 w-7 bg-white rounded shadow-sm border border-slate-200 text-slate-500 flex items-center justify-center font-bold text-lg hover:bg-slate-50 cursor-default">+</div>
                                    <div className="h-7 w-7 bg-white rounded shadow-sm border border-slate-200 text-slate-500 flex items-center justify-center font-bold text-lg hover:bg-slate-50 cursor-default">−</div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* Minimal Custom Hide Scrollbar CSS injection for this section */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(203, 213, 225, 0.4);
                    border-radius: 4px;
                }
            `}} />
        </section>
    )
} 

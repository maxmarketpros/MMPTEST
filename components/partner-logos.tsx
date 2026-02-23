"use client"

import Image from "next/image"

const partners = [
  { name: "Google", src: "/partners/google-logo.webp" },
  { name: "Semrush", src: "/partners/semrush-logo.png" },
  { name: "Webflow", src: "/partners/webflow-logo.svg" },
  { name: "Netlify", src: "/partners/netlify-logo.png" },
  { name: "Wix", src: "/partners/wix-logo.png" },
  { name: "Relume", src: "/partners/relume-logo.png" },
  { name: "Yelp", src: "/partners/yelp-logo.png" },
  { name: "HighLevel", src: "/partners/highlevel-logo.png" },
  { name: "Google My Business", src: "/partners/google-my-business-logo.webp" },
]

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex shrink-0 items-center px-10 opacity-40 grayscale">
      <Image
        src={src}
        alt={name}
        width={160}
        height={50}
        className="max-w-[140px] object-contain"
        style={{ height: "34px", width: "auto" }}
      />
    </div>
  )
}

export function PartnerLogos() {
  return (
    <div>
      <style jsx global>{`
        @keyframes partner-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <p
        className="text-xs font-semibold uppercase tracking-[0.18em]"
        style={{ color: "rgba(11,18,32,0.45)" }}
      >
        Featured Partners
      </p>

      {/* Scrolling marquee with right-side fade */}
      <div
        className="relative mt-5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div
          className="flex w-max items-center"
          style={{
            animation: "partner-marquee 45s linear infinite",
          }}
        >
          {/* Render logos twice for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <LogoItem key={`${partner.name}-${i}`} name={partner.name} src={partner.src} />
          ))}
        </div>
      </div>
    </div>
  )
}

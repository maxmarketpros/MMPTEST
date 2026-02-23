# Max Market Pros - Design Guidelines

This document outlines the design system running `maxmarketpros.com`. The overarching aesthetic is a modern, Stripe-inspired B2B / SaaS look, despite the service nature of the business. The site relies on soft wash backgrounds, stark highly-contrasting typography, translucent borders, distinct drop shadows, and vibrant glowing gradient accents.

---

## 🎨 1. Color Palette

The core palette revolves around a highly readable dark ink and a soft, cold off-white background wash. Brand accents are heavily gradient-based.

### Core Variables
- **Background Wash** (`--wash`): `#F6F9FC` (used as the base background for the page, replacing stark white to give depth to cards).
- **Cards & Surfaces** (`--card`): `#FFFFFF`
- **Primary Ink** (`--ink-900`): `#0B1220` (used for all primary headings and most important data points).
- **Body Text** (`--text-700`): `#425466` (used for paragraphs, subheads, and standard readable text).
- **Muted Text** (`--muted-600`): `#6B7C93` (used for small helper texts, microcopy, and disclaimers).
- **Hairlines / Subtle Borders** (`--hairline`): `rgba(11, 18, 32, 0.10)`

### Brand Accents
- **Brand Cyan**: `#00B0F0`
- **Brand Blue**: `#2563EB`
- **Brand CTA Gradient**: `linear-gradient(135deg, var(--brand-cyan) 0%, var(--brand-blue) 100%)` (Used for primary buttons).

### Component-Specific Colors (Google Business UI)
The following colors are **strictly reserved** for mimicking Google Business Profiles or specific third-party integrations (like the Before/After Google Results UI). They should *not* be used as general brand or utility colors.
- **Google Blue**: `#4285F4` (Map pins, primary Google links)
- **Google Green**: `#34A853` (Verified badges, strong positive Google metrics)
- **Google Red**: `#EA4335` (Negative Google metrics, warning dots)
- **Google Yellow**: `#FBBC05` or `#FBBC04` (Star ratings only)

*Note: When creating these specific integration elements, utilize tinted transparent backgrounds. For example, a Google Green badge might use `rgba(52,168,83,0.10)` for its background to fit the overall glass/SaaS aesthetic, while maintaining the Google brand color for borders or text.*

---

## 🔤 2. Typography

The site uses a clean geometric Sans Serif typeface (like Outfit/Inter).

- **Huge Headings (H1/H2)**: 
  - Weight: Bold (`font-bold`)
  - Tracking: Tight (`tracking-[-0.03em]`)
  - Line Height: Very tight (`leading-[1.05]` or `leading-[1.03]`)
  - Color: `var(--ink-900)`
- **Subheadings**:
  - Weight: Medium (`font-medium`)
  - Tracking: Normal
  - Line Height: Relaxed (`leading-relaxed` or `1.6`)
  - Color: `var(--text-700)`
- **Body Content & Microcopy**:
  - Weight: Semibold (`font-semibold`) for labels or Medium (`font-medium`) for body.
  - Size: Between `13px` to `15px`.
  - Uppercase Labels: `text-[11px] font-semibold uppercase tracking-wide`.

**Text Decorators:** Highlighting text should be done using a subtle gradient bar placed behind the text baseline.
```tsx
<span className="absolute -z-10 rounded-full h-[8px] -left-[6px] -right-[6px] bottom-[8px] opacity-35 bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-blue)]" />
```

---

## 📐 3. Radii & Spacing

Border Radii are generally softer than standard web defaults.
- **Buttons, Badges, Tag Pills**: `rounded-full` (Fully pill-shaped)
- **Inner Content Cards (KPIs, inner panels)**: `rounded-xl`
- **Major Container Cards (Floating hero card)**: `rounded-2xl`

Spacing standardizes on modern gap paradigms using Flex and Grid blocks rather than ad-hoc margins.

---

## 🌟 4. Shadows & Elevation

Stripe aesthetics are highly dependent on exact, nuanced drop-shadows. Avoid standard solid shadows.

- **Primary Button Hover**: Needs a slight physical lift (`-translate-y-px`) combined with `shadow-xl`.
- **Micro UI Buttons (icon only/chips)**: `box-shadow: 0 1px 3px rgba(0,0,0,0.06)` combined with a `1px` border of `rgba(60,64,67,0.16)`.
- **Hero/Feature Cards (Max Elevation)**: `box-shadow: 0 40px 90px rgba(11,18,32,0.18), 0 0 0 1px rgba(0,0,0,0.03)` (A deep, soft, huge blur shadow with a 1px solid stroke to define the rim).

---

## 🔮 5. Visual "Aura" & Glow Effects

The modern SaaS feel is completed using underlying "aura" blurs, floating graphical elements behind the crisp UI.
Instead of solid shapes, use radial gradients masked by SVGs or just heavily blurred elements placed *behind* (`z-index: 0` or less) the main content.

- **Aura Orbs**: `radial-gradient(ellipse at center, rgba(37,99,235,0.10) 0%, transparent 70%)` heavily blurred (`filter: blur(22px)`) and large (e.g., `800px` by `500px`).
- **Dot Patterns**: Use CSS radial-gradients with masks so boundaries organically fade out.
  ```css
  background-image: radial-gradient(rgba(37,99,235,0.08) 1.5px, transparent 1.5px);
  background-size: 16px 16px;
  mask-image: radial-gradient(ellipse 50% 60% at 75% 45%, black 10%, transparent 70%);
  ```
- **Noise Layer**: Apply a 6% opacity grain noise overlaid absolutely across large sections to provide visual texture and prevent banding in gradients.

---

## 🖼️ 6. Components / Layout Motifs

When introducing new sections, consider reusing these specific UI constructs found in the hero:

1. **The Traffic Light Mac OS Chrome Top-bar**: Use `#F6F9FC` background for the top header of a window simulation, with 3 dots (red, yellow, green).
2. **"Eyebrow" Pills**: Placing a trust signal or context indicator at the top of a column:
   `Rounded pill, border var(--hairline), text var(--text-700), bg rgba(255,255,255,0.8)`.
3. **KPI Chips**: Mini cards to show data, featuring a small muted title, a large ink value, and optionally a green/red delta pill (`+350%`).
4. **Action Chips**: Icon-driven circular buttons (`36x36px`) on desktop that expand into text chips on mobile for immediate actions.

**Golden Rule for implementation**: If you aren't sure, don't use a pure solid color; use a `rgba(...)` variable, and layer items to give a sense of glass or subtle depth.

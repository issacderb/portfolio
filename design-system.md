# Design System Specification · Vương Thành Trung Portfolio

## 1. Creative Direction: "Dreamy Tactile Editorial"
- **Atmosphere**: Twilight sky gradient transitioning between royal twilight blue, soft periwinkle/lavender, blush pink, and horizon peach.
- **Lighting**: Cinematic studio key light with diffuse rim illumination.
- **Palette**:
  - Primary Azure: `#2E65DA`
  - Periwinkle / Lavender: `#8594E8` / `#B896F8`
  - Blush Orchid / Peach: `#EDB3D5` / `#FFAE8A`
  - Deep Navy Grounding: `#0A0E1A` / `#0E1526` / `#162036`
  - Clean Text White: `#FFFFFF` (headings), `rgba(255,255,255,0.85)` (body), `rgba(255,255,255,0.55)` (metadata)

## 2. Typography System
- **Display & Section Titles**: `Fraunces` (Editorial Serif, 300–900 weight, optical size adjustments).
  - Huge display titles: `clamp(2.5rem, 6vw, 5.5rem)`
  - Subheaders: `clamp(1.5rem, 3.5vw, 2.75rem)`
- **Body & Controls**: `Plus Jakarta Sans` (Geometric Sans, 400–700 weight, flawless Vietnamese diacritics).
  - Body lead: `clamp(1rem, 1.25vw, 1.25rem)`
  - Standard body: `0.9375rem` (15px) to `1rem` (16px), line-height `1.7`
- **Numerals & Accents**: `Syne` (Bold Display numerals for capabilities and card indices).

## 3. Grid & Spacing Hierarchy
- **Desktop Container**: Max-width `1280px` (`max-w-7xl`), horizontal padding `2.5rem` to `3rem`.
- **Section Rhythm**: Generous vertical spacing: `py-24` (mobile) to `py-36` (desktop).
- **Asymmetric Grid**: 40/60 split for project showcases; 7/5 split for editorial magazine spreads.

## 4. Motion Principles (MotionSites Standard)
1. **Hero Staged Entrance**:
   - `0.0s`: Sky backdrop & ambient light blooms.
   - `0.15s`: Navigation header.
   - `0.25s`: Name & personal identity.
   - `0.35s`: Central studio visual.
   - `0.45s`: Bio statement & academic standing.
   - `0.55s`: Action CTAs.
2. **Scroll-Velocity Responsive Marquee**: Smooth dual-track opposing loops accelerating with wheel delta.
3. **Word/Character Text Reveal in About**: Text progressively sharpens from `opacity: 0.18` to `opacity: 1` as user scrolls through viewport.
4. **Sticky Stacking Cards**: Cards pin in place with scale reduction (`scale: 1 - index * 0.04`) and top offset stack.
5. **Reduced Motion**: Full fallback honoring `prefers-reduced-motion` without breaking layout or legibility.

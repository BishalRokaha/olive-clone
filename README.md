# Olive App — Frontend Assessment

A pixel-accurate recreation of the [oliveapp.com](https://www.oliveapp.com/) hero/landing section, built as part of a frontend engineering assessment.

---

## Live Preview

> Clone the repo and run locally — setup takes under a minute (instructions below).

---

## Assessment Brief

Recreate the oliveapp.com landing page as closely as possible using any frontend framework, with no restrictions on tooling.

**Reference:** [https://www.oliveapp.com/](https://www.oliveapp.com/)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **React 18** + **Vite** | Framework & build tooling |
| **Tailwind CSS v3** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |

---

## Features Implemented

### Navbar
- Olive logo with custom SVG olive icon
- Navigation links with dropdown indicators
- Sign in + "Get Olive" CTA button with hover animation

### Hero Section
- Animated trust badge with avatar cluster
- Large display heading with Playfair Display font
- Subtext and iOS download CTA button
- All elements animate in with staggered fade + slide-up on load

### Phone Mockup (most complex component)
- Realistic iPhone frame with Dynamic Island
- **Horizontal sliding carousel** — auto-rotates every 3 seconds
- `translateX` animation physically slides the track left each tick
- Center card fully visible, left/right cards partially visible and faded — all clipped by phone `overflow: hidden`
- Far-left and far-right ghost images absolutely positioned outside the phone frame — one per side, always
- Pagination dots animate in sync with the active slide
- Product card updates with fade transition on each slide change
- 6 distinct products with real product data, scores, and Oliver Says commentary
- Score color coded — red (Avoid), amber (Limit), green (Excellent)

---

## Project Structure

```
olive-clone/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── Hero.jsx            # Hero content (heading, badge, CTA)
│   │   ├── Badge.jsx           # Trust badge with avatar group
│   │   └── PhoneMockup.jsx     # Full phone carousel component
│   ├── App.jsx                 # Root layout with centered card container
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind directives + base styles
├── index.html                  # HTML shell with Google Fonts
├── tailwind.config.js          # Tailwind theme extensions
├── vite.config.js              # Vite config
└── postcss.config.js           # PostCSS config
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/BishalRokaha/olive-clone.git

# Navigate into the project
cd olive-clone

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Key Implementation Decisions

**Carousel architecture** — The phone mockup uses a single flat flex track with `translateX` driven by an unbounded tick counter. This means the track physically slides left every 3 seconds without ever snapping back, giving a smooth continuous feel. Image content wraps via modulo indexing.

**Outer ghost images** — The far-left and far-right floating images are rendered as absolutely positioned elements outside the phone wrapper, completely separate from the inner sliding track. This guarantees exactly one ghost per side at all times, regardless of carousel position.

**Font pairing** — Playfair Display (800 weight) for the hero heading to match the editorial feel of the original, DM Sans for all UI copy.

**Container design** — The entire hero is wrapped in a centered `max-width: 960px` card with a soft green tint (`#eef3ef`) sitting on a slightly darker background, replicating the "card on page" layout of the reference.

---

## Screenshots

| Section | Description |
|---|---|
| Navbar + Hero | Logo, nav links, trust badge, heading, CTA |
| Phone — Slide 1 | Sea Salt & Vinegar Crisps (Score: 39 / Avoid) |
| Phone — Slide 2 | Sourlittles by YumEarth (Score: 84 / Excellent) |
| Phone — Slide 3 | Organic Bagels by Killer Dave's (Score: 43 / Avoid) |
| Phone — Slide 4 | Olipop Sparkling Tonic (Score: 100 / Excellent) |
| Phone — Slide 5 | Larabar Cookie Dough (Score: 92 / Excellent) |
| Phone — Slide 6 | San Pellegrino Water (Score: 52 / Limit) |

---

## Disclaimer

This project was built solely for frontend assessment purposes. The original design belongs to [oliveapp.com](https://www.oliveapp.com/). No commercial use intended.

---

*Built by Bishal*
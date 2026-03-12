# ✈️ Premium Travel & Rentals - 48-Hour Frontend Sprint

## 🎨 Design System (Premium Aesthetic)
- **Primary:** `#064E3B` (Deep Forest Green)
- **Secondary:** `#1F2937` (Gunmetal Gray)
- **Accent:** `#D1D5DB` (Light Silver)
- **Navbar:** Transparent -> `#111827` (Solid Gray) on scroll.

---

## 📅 Day 1: Architecture & Search Core
**Goal:** Landing Page & Functional Search Logic

### 1. Setup & Data (Hours 1-2)
- [ ] Initialize Next.js 15, Tailwind, and Shadcn/UI.
- [ ] **Data Mocking:** Create a `data.ts` file containing arrays for `FLIGHTS` and `VEHICLES` (Vans, SUVs, Premium Cars).
- [ ] Setup `Lucide-React` for premium thin-stroke icons.

### 2. The Navigation & Hero (Hours 3-6)
- [ ] **Sticky Navbar:** Implement a scroll-listener hook to toggle background from `bg-transparent` to `bg-slate-900/95 backdrop-blur`.
- [ ] **Hero Section:** High-resolution video background or premium imagery. 
- [ ] **The Search Bar:** A floating "Command Center" with tabs: [Flights] [Vehicles]. Use `shadcn/ui` tabs.

### 3. "Real Search" Implementation (Hours 7-12)
- [ ] **Search Logic:** Use `searchParams` from `next/navigation`. When user clicks "Search", push filters to the URL.
- [ ] **Service Page (The Grid):** Create a layout that reads the URL and filters the `data.ts` list in real-time.
- [ ] **UI Components:** Premium cards with hover-zoom effects and "Instant Book" buttons.

---

## 📅 Day 2: Content & Polish
**Goal:** About, Contact, and "Attractive" Animations.

### 4. About & Contact (Hours 1-4)
- [ ] **About Us:** Focus on "Luxury" and "Reliability." Use a Parallax scroll effect for images.
- [ ] **Contact Us:** A clean, minimal dark-themed form using `react-hook-form`.

### 5. UI Refinement (Hours 5-9)
- [ ] **Framer Motion:** Add "Staggered Fade-in" for the search results.
- [ ] **Vehicle Details:** A simple Modal (Shadcn Dialog) that pops up when a vehicle/flight is clicked to show "more info."
- [ ] **Logo Integration:** Place your logo in the navbar with a subtle "shimmer" effect.

### 6. QA & Handover (Hours 10-12)
- [ ] Mobile Responsiveness (especially the search bar).
- [ ] Deploy to Vercel.

---

## 🛠️ Recommended UI Component Kit
1.  **Navbar:** Custom component with `useEffect` scroll listener.
2.  **HeroSearch:** A hybrid component using `Radix UI` Popovers for date picking.
3.  **ResultCard:** A card with a "Green" price tag badge and "Gray" specifications list.
4.  **FilterSidebar:** A sliding drawer for mobile and a sticky sidebar for desktop.

 
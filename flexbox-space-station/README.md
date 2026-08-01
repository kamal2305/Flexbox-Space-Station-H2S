# 🚀 Flexbox Space Station

An interactive cyberpunk-themed React application designed to teach **CSS Flexbox** and **CSS Grid** concepts through gamified space docking missions. 

🌐 **Live Demo:** [https://flexbox-space-station.vercel.app](https://flexbox-space-station.vercel.app)
💻 **GitHub Repository:** [https://github.com/kamal2305/Flexbox-Space-Station-H2S](https://github.com/kamal2305/Flexbox-Space-Station-H2S)

---

## 🎮 Game Features

- 🌌 **Void Nexus Design System:** A beautiful cyberpunk theme with stars animations, neon buttons, glassmorphism, and smooth HUD rails.
- 🗺️ **50 Missions across 6 Concept Tracks:**
  1. **Flexbox Alignment**: `justify-content` values (`flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`).
  2. **Flexbox Sizing & Wrapping**: `align-items`, `flex-direction`, `flex-wrap`, and `align-content`.
  3. **Flexbox Core Sizing**: `flex-grow`, `flex-shrink`, `align-self`, and layout ordering (`order`).
  4. **Grid Sizing**: `grid-template-columns`, `grid-template-rows`, and cell spacing (`gap`).
  5. **Grid Placement & Alignment**: Placement coordinates (`grid-column-start/end`, `grid-row-start/end`, `grid-area`), grid cell alignments (`justify-items`, `align-items`), and grid-block content alignments (`justify-content`, `align-content`).
  6. **Hybrid Advanced Challenges**: Combined properties for maximum layout mastery.
- ⚡ **Real-Time Sandbox Feedback**: Visual simulation displays answers instantly. Matches glow neon green, mistakes flash red.
- ⏭️ **Skip & Home Controls**: Skip tricky layout scenarios or jump back to the landing page anytime.
- 🏆 **Score & Streak System**: Points earned are accumulated with active streaks. High scores and level completions persist across browser sessions using `localStorage`.

---

## 🛠️ Technology Stack

- **Framework:** React 19 (Functional Components, Reducer state context)
- **Bundler:** Vite 8 (Ultra-fast Hot Module Replacement)
- **Styling:** Vanilla CSS (pre-configured Custom Properties design system)
- **Persistence:** LocalStorage API
- **Deployment:** Vercel Hosting Platform

---

## 🚀 Local Development Setup

Follow these steps to run the game locally on your device:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kamal2305/Flexbox-Space-Station-H2S.git
   cd Flexbox-Space-Station-H2S/flexbox-space-station
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open **[http://localhost:5173](http://localhost:5173)** in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 Deployment Guide

### Vercel CLI Deployment (Fastest)

1. Make sure you are inside the `flexbox-space-station` project subdirectory.
2. Build and publish directly using:
   ```bash
   npm install -g vercel
   vercel --prod
   ```
3. Set the **Root Directory** settings to `flexbox-space-station` on the Vercel dashboard to enable seamless automatic deployments for every push on GitHub.

# Project Documentation: Flexbox/Grid Space Station

## 1. Project Overview
**Name:** Flexbox/Grid Space Station
**Type:** Gamified Educational Web & Mobile App
**Core Loop:** Users position spaceships into docking bays using CSS Flexbox and Grid.
**Target Platforms:** Web, iOS, Android (Single Codebase).

### Tech Stack
*   **Frontend Framework:** React (via Vite) for fast rendering and component-driven architecture.
*   **Styling:** Plain CSS or Tailwind (to handle actual Flexbox/Grid mechanics natively).
*   **Mobile Wrapper:** Capacitor.js (translates the web build into native WebView for iOS/Android).
*   **State Management:** React Context API or Zustand (tracking levels, score, user input).
*   **Storage:** LocalStorage (for saving player progress and streaks without a backend).

---

## 2. Technical Architecture

### Component Tree
*   **`App`** (Main Container)
    *   **`GameEngine`** (State provider for levels and scores)
        *   **`HeaderHUD`** (Current level, score, reset button)
        *   **`SpaceStationArea`** (Visual render of ships and docking bays)
        *   **`CodeEditorPanel`** 
            *   **`DesktopInput`** (Standard syntax-highlighted text area)
            *   **`MobileSnippetChips`** (Horizontal scrollable buttons for touch devices)
        *   **`LevelCompleteModal`** (Success animation and next level trigger)

### State Structure
```javascript
const [gameState, setGameState] = useState({
  currentLevel: 1,
  userCode: "",
  totalScore: 0,
  completedLevels: []
});
```

---

## 3. UI / UX & Design System

### Visual Theme: Modern Space
*   **Background:** Deep void black (`#0B0E14`) with a subtle starry CSS animation.
*   **Primary Accent:** Neon Cyan (`#00f3ff`) for active elements, selected chips, and success borders.
*   **Error/Warning:** Alert Orange (`#FF5722`) for invalid syntax.
*   **Panels:** Glassmorphism (`background: rgba(255,255,255,0.05); backdrop-filter: blur(10px);`).

### Responsive Layout Strategy
*   **Desktop:** Side-by-side split. Editor on the left, visual station on the right.
*   **Mobile:** Stacked. Visual station fixed to the top 50%. Editor/controls fixed to the bottom 50%.
*   **Mobile Input:** To avoid native keyboard frustration, text input is replaced by "Snippet Chips" (e.g., tap `[justify-content]`, then `[space-between]`).

---

## 4. Level Data Structure

This schema acts as the game's database. It dictates the starting layout and evaluates the win condition.

```javascript
const levels = [
  {
    id: 1,
    title: "The First Docking",
    instructions: "Use justify-content to center the cargo ship in the bay.",
    concept: "Flexbox",
    initialCSS: {
      display: "flex",
      justifyContent: "flex-start" // Starting state
    },
    targetCSS: {
      justifyContent: "center" // Win condition
    },
    assets: {
      shipCount: 1,
      bayCount: 1
    }
  }
];
```

---

## 5. Content & Social Strategy

This tool is designed to be highly shareable. Here is how the project integrates into a content pipeline:
*   **Daily Challenges:** Introduce a "Dock of the Day" puzzle. 
*   **Walkthrough Scripts:** Record quick solution videos. The fast-paced, energetic tone works perfectly for breaking down the daily puzzle. These can easily be localized into English, Hindi, and Telugu (using that conversational Guntur-style for maximum engagement). 
*   **Sharing:** Add a "Share to X/Instagram" button on the `LevelCompleteModal` that generates a graphic of their solved puzzle.

---

## 6. Development Milestones

*   [ ] **Phase 1: Prototyping** - Scaffold Vite + React, build the static split-screen layout.
*   [ ] **Phase 2: Game Engine** - Build the JSON level structure and string-matching logic to check if `userCode` matches `targetCSS`.
*   [ ] **Phase 3: Mobile Adaptation** - Build the Snippet Chips system and responsive stacked layout.
*   [ ] **Phase 4: Capacitor Integration** - Install Capacitor, run iOS/Android builds, test touch interactions.
*   [ ] **Phase 5: Polish & Launch** - Add floating animations to ships, sound effects, and deploy to Vercel/App Stores.

## 7. Development Workflow Rules
*   **Session Memory:** Create a memory as a `.md` file after completing each development session to track progress, outstanding bugs, and next steps.

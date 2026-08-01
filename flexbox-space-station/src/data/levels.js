// ============================================================
// Flexbox / Grid Space Station — Level Data (50 Levels)
// ============================================================

export const levels = [
  // ── CATEGORY 1: justify-content (Flexbox) ──
  {
    id: 1,
    title: "The First Docking",
    concept: "Flexbox",
    tag: "justify-content",
    instructions: "The cargo ship is stuck at the start of the bay. Use **justify-content** to center it in the docking bay.",
    hint: "Try: justify-content: center",
    initialCSS: { display: "flex", justifyContent: "flex-start" },
    targetCSS: { justifyContent: "center" },
    editableProperties: ["justifyContent"],
    allowedValues: { justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
    ships: [{ id: "s1", label: "🚀" }],
    points: 100
  },
  {
    id: 2,
    title: "Deep Space Bay",
    concept: "Flexbox",
    tag: "justify-content",
    instructions: "Move the command probe to the far end of the flight deck using **justify-content: flex-end**.",
    hint: "Try: justify-content: flex-end",
    initialCSS: { display: "flex", justifyContent: "flex-start" },
    targetCSS: { justifyContent: "flex-end" },
    editableProperties: ["justifyContent"],
    allowedValues: { justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
    ships: [{ id: "s1", label: "🛸" }],
    points: 100
  },
  {
    id: 3,
    title: "Split Patrol",
    concept: "Flexbox",
    tag: "justify-content",
    instructions: "Place two scouts on opposite sides of the bay to guard the gates.",
    hint: "Try: justify-content: space-between",
    initialCSS: { display: "flex", justifyContent: "flex-start" },
    targetCSS: { justifyContent: "space-between" },
    editableProperties: ["justifyContent"],
    allowedValues: { justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
    ships: [{ id: "s1", label: "🛩️" }, { id: "s2", label: "🛩️" }],
    points: 120
  },
  {
    id: 4,
    title: "Balanced Orbit",
    concept: "Flexbox",
    tag: "justify-content",
    instructions: "Distribute three solar probes so that their outer spacing is equal to half the spacing between them.",
    hint: "Try: justify-content: space-around",
    initialCSS: { display: "flex", justifyContent: "flex-start" },
    targetCSS: { justifyContent: "space-around" },
    editableProperties: ["justifyContent"],
    allowedValues: { justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
    ships: [{ id: "s1", label: "🛰️" }, { id: "s2", label: "🛰️" }, { id: "s3", label: "🛰️" }],
    points: 130
  },
  {
    id: 5,
    title: "Uniform Fleet",
    concept: "Flexbox",
    tag: "justify-content",
    instructions: "Position three transport carriers with completely equal spacing on all sides.",
    hint: "Try: justify-content: space-evenly",
    initialCSS: { display: "flex", justifyContent: "flex-start" },
    targetCSS: { justifyContent: "space-evenly" },
    editableProperties: ["justifyContent"],
    allowedValues: { justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
    ships: [{ id: "s1", label: "🚢" }, { id: "s2", label: "🚢" }, { id: "s3", label: "🚢" }],
    points: 140
  },

  // ── CATEGORY 2: align-items (Flexbox) ──
  {
    id: 6,
    title: "Vertical Alignment",
    concept: "Flexbox",
    tag: "align-items",
    instructions: "The ship is floating at the top of the bay. Use **align-items** to bring it to the center vertically.",
    hint: "Try: align-items: center",
    initialCSS: { display: "flex", justifyContent: "center", alignItems: "flex-start" },
    targetCSS: { alignItems: "center" },
    editableProperties: ["alignItems"],
    allowedValues: { alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"] },
    ships: [{ id: "s1", label: "🚀" }],
    points: 120
  },
  {
    id: 7,
    title: "Gravity Well Dock",
    concept: "Flexbox",
    tag: "align-items",
    instructions: "Pull the research vessel down to the bottom deck floor.",
    hint: "Try: align-items: flex-end",
    initialCSS: { display: "flex", justifyContent: "center", alignItems: "flex-start" },
    targetCSS: { alignItems: "flex-end" },
    editableProperties: ["alignItems"],
    allowedValues: { alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"] },
    ships: [{ id: "s1", label: "🛸" }],
    points: 120
  },
  {
    id: 8,
    title: "Ceiling Clamp",
    concept: "Flexbox",
    tag: "align-items",
    instructions: "The repair pods must clamp to the top ceiling rails of the bay.",
    hint: "Try: align-items: flex-start",
    initialCSS: { display: "flex", justifyContent: "center", alignItems: "flex-end" },
    targetCSS: { alignItems: "flex-start" },
    editableProperties: ["alignItems"],
    allowedValues: { alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"] },
    ships: [{ id: "s1", label: "🛠️" }, { id: "s2", label: "🛠️" }],
    points: 120
  },
  {
    id: 9,
    title: "Sensor Baseline",
    concept: "Flexbox",
    tag: "align-items",
    instructions: "Align the science probes by the baseline of their internal labels.",
    hint: "Try: align-items: baseline",
    initialCSS: { display: "flex", justifyContent: "space-around", alignItems: "flex-start" },
    targetCSS: { alignItems: "baseline" },
    editableProperties: ["alignItems"],
    allowedValues: { alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"] },
    ships: [{ id: "s1", label: "🛰️" }, { id: "s2", label: "🛰️" }],
    points: 150
  },

  // ── CATEGORY 3: flex-direction (Flexbox) ──
  {
    id: 10,
    title: "Column Formation",
    concept: "Flexbox",
    tag: "flex-direction",
    instructions: "Three ships need to stack vertically in the bay. Change **flex-direction** to column.",
    hint: "Try: flex-direction: column",
    initialCSS: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" },
    targetCSS: { flexDirection: "column" },
    editableProperties: ["flexDirection"],
    allowedValues: { flexDirection: ["row", "row-reverse", "column", "column-reverse"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🛸" }, { id: "s3", label: "🛩️" }],
    points: 130
  },
  {
    id: 11,
    title: "Reverse Vanguard",
    concept: "Flexbox",
    tag: "flex-direction",
    instructions: "Dock the squad horizontally, but reverse their visual order.",
    hint: "Try: flex-direction: row-reverse",
    initialCSS: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" },
    targetCSS: { flexDirection: "row-reverse" },
    editableProperties: ["flexDirection"],
    allowedValues: { flexDirection: ["row", "row-reverse", "column", "column-reverse"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🛸" }, { id: "s3", label: "🛩️" }],
    points: 130
  },
  {
    id: 12,
    title: "Elevator Shaft Stack",
    concept: "Flexbox",
    tag: "flex-direction",
    instructions: "Stack the cargo items vertically from bottom to top.",
    hint: "Try: flex-direction: column-reverse",
    initialCSS: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" },
    targetCSS: { flexDirection: "column-reverse" },
    editableProperties: ["flexDirection"],
    allowedValues: { flexDirection: ["row", "row-reverse", "column", "column-reverse"] },
    ships: [{ id: "s1", label: "📦" }, { id: "s2", label: "📦" }],
    points: 140
  },

  // ── CATEGORY 4: flex-wrap (Flexbox) ──
  {
    id: 13,
    title: "Fleet Wrap",
    concept: "Flexbox",
    tag: "flex-wrap",
    instructions: "The fleet of 5 ships is overflowing the bay! Use **flex-wrap: wrap** to let them wrap onto multiple rows.",
    hint: "Try: flex-wrap: wrap",
    initialCSS: { display: "flex", flexWrap: "nowrap", gap: "8px" },
    targetCSS: { flexWrap: "wrap" },
    editableProperties: ["flexWrap"],
    allowedValues: { flexWrap: ["nowrap", "wrap", "wrap-reverse"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🛸" }, { id: "s3", label: "🛩️" }, { id: "s4", label: "🚀" }, { id: "s5", label: "🛸" }],
    points: 150
  },
  {
    id: 14,
    title: "Reverse Overload",
    concept: "Flexbox",
    tag: "flex-wrap",
    instructions: "Wrap the overflowing modules, but let the wrapped lines stack from bottom to top.",
    hint: "Try: flex-wrap: wrap-reverse",
    initialCSS: { display: "flex", flexWrap: "nowrap", gap: "8px" },
    targetCSS: { flexWrap: "wrap-reverse" },
    editableProperties: ["flexWrap"],
    allowedValues: { flexWrap: ["nowrap", "wrap", "wrap-reverse"] },
    ships: [{ id: "s1", label: "🛸" }, { id: "s2", label: "🛸" }, { id: "s3", label: "🛸" }, { id: "s4", label: "🛸" }],
    points: 150
  },

  // ── CATEGORY 5: align-content (Flexbox) ──
  {
    id: 15,
    title: "Row Alignment",
    concept: "Flexbox",
    tag: "align-content",
    instructions: "Your wrapped fleet rows are bunched at the top. Use **align-content: space-evenly** to distribute the rows evenly.",
    hint: "Try: align-content: space-evenly",
    initialCSS: { display: "flex", flexWrap: "wrap", alignContent: "flex-start", gap: "8px" },
    targetCSS: { alignContent: "space-evenly" },
    editableProperties: ["alignContent"],
    allowedValues: { alignContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🛸" }, { id: "s3", label: "🛩️" }, { id: "s4", label: "🚀" }, { id: "s5", label: "🛸" }, { id: "s6", label: "🛩️" }],
    points: 160
  },
  {
    id: 16,
    title: "Central Core Clustering",
    concept: "Flexbox",
    tag: "align-content",
    instructions: "Gather all rows of wrapped vessels directly in the center of the vertical axis.",
    hint: "Try: align-content: center",
    initialCSS: { display: "flex", flexWrap: "wrap", alignContent: "flex-start", gap: "8px" },
    targetCSS: { alignContent: "center" },
    editableProperties: ["alignContent"],
    allowedValues: { alignContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"] },
    ships: [{ id: "s1", label: "📦" }, { id: "s2", label: "📦" }, { id: "s3", label: "📦" }, { id: "s4", label: "📦" }],
    points: 160
  },
  {
    id: 17,
    title: "Gate Keepers Outer Stack",
    concept: "Flexbox",
    tag: "align-content",
    instructions: "Push the wrapped lines of patrol fighters to the very top and bottom edges.",
    hint: "Try: align-content: space-between",
    initialCSS: { display: "flex", flexWrap: "wrap", alignContent: "flex-start", gap: "8px" },
    targetCSS: { alignContent: "space-between" },
    editableProperties: ["alignContent"],
    allowedValues: { alignContent: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🚀" }, { id: "s3", label: "🛸" }, { id: "s4", label: "🛸" }],
    points: 170
  },

  // ── CATEGORY 6: flex-grow & flex-shrink (Flexbox Core) ──
  {
    id: 18,
    title: "Expandable Solar Wings",
    concept: "Flexbox Core",
    tag: "flex-grow",
    instructions: "Force the primary wing panel to grow and absorb all leftover empty space inside the bay.",
    hint: "Try: flex-grow: 1",
    initialCSS: { display: "flex", flexGrow: "0" },
    targetCSS: { flexGrow: "1" },
    editableProperties: ["flexGrow"],
    allowedValues: { flexGrow: ["0", "1", "2"] },
    ships: [{ id: "s1", label: "🛰️" }],
    points: 180
  },
  {
    id: 19,
    title: "Double Resource Capture",
    concept: "Flexbox Core",
    tag: "flex-grow",
    instructions: "Let the mining rig expand to grab twice as much space as the basic probe.",
    hint: "Try: flex-grow: 2",
    initialCSS: { display: "flex", flexGrow: "1" },
    targetCSS: { flexGrow: "2" },
    editableProperties: ["flexGrow"],
    allowedValues: { flexGrow: ["0", "1", "2"] },
    ships: [{ id: "s1", label: "🚜" }],
    points: 180
  },
  {
    id: 20,
    title: "Rigid Hull Preservation",
    concept: "Flexbox Core",
    tag: "flex-shrink",
    instructions: "Stop the high-value cargo pod from shrinking when the layout gets compressed.",
    hint: "Try: flex-shrink: 0",
    initialCSS: { display: "flex", flexShrink: "1" },
    targetCSS: { flexShrink: "0" },
    editableProperties: ["flexShrink"],
    allowedValues: { flexShrink: ["0", "1", "2"] },
    ships: [{ id: "s1", label: "💎" }],
    points: 190
  },

  // ── CATEGORY 7: align-self (Flexbox Core) ──
  {
    id: 21,
    title: "Solo Escape Pod",
    concept: "Flexbox Core",
    tag: "align-self",
    instructions: "Override the default alignment and push just the escape pod to the bottom floor of the dock.",
    hint: "Try: align-self: flex-end",
    initialCSS: { display: "flex", alignItems: "flex-start", alignSelf: "auto" },
    targetCSS: { alignSelf: "flex-end" },
    editableProperties: ["alignSelf"],
    allowedValues: { alignSelf: ["auto", "flex-start", "flex-end", "center", "stretch"] },
    ships: [{ id: "s1", label: "🚨" }],
    points: 190
  },
  {
    id: 22,
    title: "Ascending Probe",
    concept: "Flexbox Core",
    tag: "align-self",
    instructions: "Pull the research probe up to the ceiling independently.",
    hint: "Try: align-self: flex-start",
    initialCSS: { display: "flex", alignItems: "center", alignSelf: "auto" },
    targetCSS: { alignSelf: "flex-start" },
    editableProperties: ["alignSelf"],
    allowedValues: { alignSelf: ["auto", "flex-start", "flex-end", "center", "stretch"] },
    ships: [{ id: "s1", label: "🛰️" }],
    points: 190
  },

  // ── CATEGORY 8: order (Flexbox Core) ──
  {
    id: 23,
    title: "Rearrange Squadron",
    concept: "Flexbox Core",
    tag: "order",
    instructions: "Move the flagship to the front of the patrol queue by setting its order priority to -1.",
    hint: "Try: order: -1",
    initialCSS: { display: "flex", order: "0" },
    targetCSS: { order: "-1" },
    editableProperties: ["order"],
    allowedValues: { order: ["-1", "0", "1", "2"] },
    ships: [{ id: "s1", label: "👑" }],
    points: 200
  },
  {
    id: 24,
    title: "Send to Back",
    concept: "Flexbox Core",
    tag: "order",
    instructions: "Send the broken drone to the end of the maintenance line.",
    hint: "Try: order: 2",
    initialCSS: { display: "flex", order: "0" },
    targetCSS: { order: "2" },
    editableProperties: ["order"],
    allowedValues: { order: ["-1", "0", "1", "2"] },
    ships: [{ id: "s1", label: "🤖" }],
    points: 200
  },

  // ── CATEGORY 9: grid-template-columns (Grid) ──
  {
    id: 25,
    title: "Grid Sectors",
    concept: "Grid",
    tag: "grid-template-columns",
    instructions: "The docking bay has switched to Grid mode! Set **grid-template-columns** to create 3 equal columns for the ships.",
    hint: "Try: grid-template-columns: repeat(3, 1fr)",
    initialCSS: { display: "grid", gridTemplateColumns: "1fr" },
    targetCSS: { gridTemplateColumns: "repeat(3, 1fr)" },
    editableProperties: ["gridTemplateColumns"],
    allowedValues: { gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "200px 1fr", "1fr 2fr"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🛸" }, { id: "s3", label: "🛩️" }, { id: "s4", label: "🚀" }, { id: "s5", label: "🛸" }, { id: "s6", label: "🛩️" }],
    points: 200
  },
  {
    id: 26,
    title: "Split Division Columns",
    concept: "Grid",
    tag: "grid-template-columns",
    instructions: "Create a narrow sidebar track on the left (200px) and let the main bay take up the rest.",
    hint: "Try: grid-template-columns: 200px 1fr",
    initialCSS: { display: "grid", gridTemplateColumns: "1fr" },
    targetCSS: { gridTemplateColumns: "200px 1fr" },
    editableProperties: ["gridTemplateColumns"],
    allowedValues: { gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)", "200px 1fr", "1fr 2fr"] },
    ships: [{ id: "s1", label: "🛠️" }, { id: "s2", label: "🛸" }],
    points: 220
  },
  {
    id: 27,
    title: "Asymmetric Landing Deck",
    concept: "Grid",
    tag: "grid-template-columns",
    instructions: "Set up two columns where the second column is twice as wide as the first.",
    hint: "Try: grid-template-columns: 1fr 2fr",
    initialCSS: { display: "grid", gridTemplateColumns: "1fr" },
    targetCSS: { gridTemplateColumns: "1fr 2fr" },
    editableProperties: ["gridTemplateColumns"],
    allowedValues: { gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "1fr 2fr", "200px 1fr"] },
    ships: [{ id: "s1", label: "🛰️" }, { id: "s2", label: "🚀" }],
    points: 220
  },

  // ── CATEGORY 10: grid-template-rows (Grid) ──
  {
    id: 28,
    title: "Vertical Floor Grid",
    concept: "Grid",
    tag: "grid-template-rows",
    instructions: "Create three equal-height vertical storage shelves in the hangar.",
    hint: "Try: grid-template-rows: repeat(3, 1fr)",
    initialCSS: { display: "grid", gridTemplateRows: "auto" },
    targetCSS: { gridTemplateRows: "repeat(3, 1fr)" },
    editableProperties: ["gridTemplateRows"],
    allowedValues: { gridTemplateRows: ["auto", "repeat(2, 1fr)", "repeat(3, 1fr)", "100px 1fr"] },
    ships: [{ id: "s1", label: "📦" }, { id: "s2", label: "📦" }, { id: "s3", label: "📦" }],
    points: 220
  },
  {
    id: 29,
    title: "Command Tower Layout",
    concept: "Grid",
    tag: "grid-template-rows",
    instructions: "Set up a header deck of exactly 100px and let the flight deck expand for the remaining space.",
    hint: "Try: grid-template-rows: 100px 1fr",
    initialCSS: { display: "grid", gridTemplateRows: "auto" },
    targetCSS: { gridTemplateRows: "100px 1fr" },
    editableProperties: ["gridTemplateRows"],
    allowedValues: { gridTemplateRows: ["auto", "repeat(2, 1fr)", "100px 1fr", "1fr 2fr"] },
    ships: [{ id: "s1", label: "📡" }, { id: "s2", label: "🛸" }],
    points: 230
  },

  // ── CATEGORY 11: grid gap (Grid) ──
  {
    id: 30,
    title: "Collision Avoidance Space",
    concept: "Grid",
    tag: "gap",
    instructions: "Add spacing between columns and rows to prevent ship crashes during takeoff.",
    hint: "Try: gap: 24px",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0px" },
    targetCSS: { gap: "24px" },
    editableProperties: ["gap"],
    allowedValues: { gap: ["0px", "8px", "16px", "24px", "32px"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🚀" }],
    points: 240
  },
  {
    id: 31,
    title: "Dense Hangar Packing",
    concept: "Grid",
    tag: "gap",
    instructions: "Compact the docking cells together by setting the gap to a tight 8px.",
    hint: "Try: gap: 8px",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" },
    targetCSS: { gap: "8px" },
    editableProperties: ["gap"],
    allowedValues: { gap: ["0px", "8px", "16px", "24px", "32px"] },
    ships: [{ id: "s1", label: "🛰️" }, { id: "s2", label: "🛰️" }],
    points: 240
  },

  // ── CATEGORY 12: grid-column-start & grid-column-end (Grid Placement) ──
  {
    id: 32,
    title: "Hangar Expansion",
    concept: "Grid Placement",
    tag: "grid-column-start/end",
    instructions: "Position the large destroyer starting at grid track 1 and ending at track 3 to span two columns.",
    hint: "Set grid-column-start: 1 and grid-column-end: 3",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridColumnStart: "auto", gridColumnEnd: "auto" },
    targetCSS: { gridColumnStart: "1", gridColumnEnd: "3" },
    editableProperties: ["gridColumnStart", "gridColumnEnd"],
    allowedValues: { gridColumnStart: ["auto", "1", "2", "3"], gridColumnEnd: ["auto", "2", "3", "4"] },
    ships: [{ id: "s1", label: "🚢" }],
    points: 250
  },
  {
    id: 33,
    title: "Central Portal Entry",
    concept: "Grid Placement",
    tag: "grid-column-start/end",
    instructions: "Deploy the warp capsule so it sits in the middle column (track 2 to 3).",
    hint: "Set grid-column-start: 2 and grid-column-end: 3",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridColumnStart: "1", gridColumnEnd: "2" },
    targetCSS: { gridColumnStart: "2", gridColumnEnd: "3" },
    editableProperties: ["gridColumnStart", "gridColumnEnd"],
    allowedValues: { gridColumnStart: ["auto", "1", "2", "3"], gridColumnEnd: ["auto", "2", "3", "4"] },
    ships: [{ id: "s1", label: "🌀" }],
    points: 250
  },
  {
    id: 34,
    title: "Widespan Flight Deck",
    concept: "Grid Placement",
    tag: "grid-column-start/end",
    instructions: "Span the massive battleship across all three columns (track 1 to 4).",
    hint: "Set grid-column-start: 1 and grid-column-end: 4",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridColumnStart: "2", gridColumnEnd: "3" },
    targetCSS: { gridColumnStart: "1", gridColumnEnd: "4" },
    editableProperties: ["gridColumnStart", "gridColumnEnd"],
    allowedValues: { gridColumnStart: ["auto", "1", "2", "3"], gridColumnEnd: ["auto", "2", "3", "4"] },
    ships: [{ id: "s1", label: "🛸" }],
    points: 260
  },

  // ── CATEGORY 13: grid-row-start & grid-row-end (Grid Placement) ──
  {
    id: 35,
    title: "Vertical Turret Shaft",
    concept: "Grid Placement",
    tag: "grid-row-start/end",
    instructions: "Stretch the laser defense tower vertically from row track 1 to 3.",
    hint: "Set grid-row-start: 1 and grid-row-end: 3",
    initialCSS: { display: "grid", gridTemplateRows: "repeat(3, 1fr)", gridRowStart: "auto", gridRowEnd: "auto" },
    targetCSS: { gridRowStart: "1", gridRowEnd: "3" },
    editableProperties: ["gridRowStart", "gridRowEnd"],
    allowedValues: { gridRowStart: ["auto", "1", "2", "3"], gridRowEnd: ["auto", "2", "3", "4"] },
    ships: [{ id: "s1", label: "⚡" }],
    points: 260
  },
  {
    id: 36,
    title: "Deep Pit Extraction",
    concept: "Grid Placement",
    tag: "grid-row-start/end",
    instructions: "Anchor the mining elevator to sit in the bottom rows from track 2 to 4.",
    hint: "Set grid-row-start: 2 and grid-row-end: 4",
    initialCSS: { display: "grid", gridTemplateRows: "repeat(3, 1fr)", gridRowStart: "1", gridRowEnd: "2" },
    targetCSS: { gridRowStart: "2", gridRowEnd: "4" },
    editableProperties: ["gridRowStart", "gridRowEnd"],
    allowedValues: { gridRowStart: ["auto", "1", "2", "3"], gridRowEnd: ["auto", "2", "3", "4"] },
    ships: [{ id: "s1", label: "🚜" }],
    points: 270
  },

  // ── CATEGORY 14: grid-area (Grid Placement) ──
  {
    id: 37,
    title: "Launch Pad Block",
    concept: "Grid Placement",
    tag: "grid-area",
    instructions: "Direct the fighter jet to a specific 4-cell block using the shorthand **grid-area: 1 / 1 / 3 / 3**.",
    hint: "Set grid-area: 1 / 1 / 3 / 3",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)", gridArea: "auto" },
    targetCSS: { gridArea: "1 / 1 / 3 / 3" },
    editableProperties: ["gridArea"],
    allowedValues: { gridArea: ["auto", "1 / 1 / 2 / 2", "1 / 1 / 3 / 3", "2 / 2 / 4 / 4"] },
    ships: [{ id: "s1", label: "🛩️" }],
    points: 280
  },

  // ── CATEGORY 15: justify-items (Grid Alignment) ──
  {
    id: 38,
    title: "Center Sector Alignment",
    concept: "Grid Alignment",
    tag: "justify-items",
    instructions: "Horizontally center all landing probes inside their individual grid cells.",
    hint: "Try: justify-items: center",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", justifyItems: "stretch" },
    targetCSS: { justifyItems: "center" },
    editableProperties: ["justifyItems"],
    allowedValues: { justifyItems: ["stretch", "start", "end", "center"] },
    ships: [{ id: "s1", label: "🛸" }, { id: "s2", label: "🛸" }],
    points: 270
  },
  {
    id: 39,
    title: "Flight Deck Edge Alignment",
    concept: "Grid Alignment",
    tag: "justify-items",
    instructions: "Flush all fighters to the right/end edge of their grid sectors.",
    hint: "Try: justify-items: end",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", justifyItems: "stretch" },
    targetCSS: { justifyItems: "end" },
    editableProperties: ["justifyItems"],
    allowedValues: { justifyItems: ["stretch", "start", "end", "center"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🚀" }],
    points: 270
  },

  // ── CATEGORY 16: align-items (Grid Alignment) ──
  {
    id: 40,
    title: "Vertical Flight Hover",
    concept: "Grid Alignment",
    tag: "align-items",
    instructions: "Align all ships vertically to the center of their grid rows.",
    hint: "Try: align-items: center",
    initialCSS: { display: "grid", gridTemplateRows: "repeat(2, 120px)", alignItems: "stretch" },
    targetCSS: { alignItems: "center" },
    editableProperties: ["alignItems"],
    allowedValues: { alignItems: ["stretch", "start", "end", "center"] },
    ships: [{ id: "s1", label: "🛸" }, { id: "s2", label: "🛸" }],
    points: 280
  },
  {
    id: 41,
    title: "Bottom Deck Decking",
    concept: "Grid Alignment",
    tag: "align-items",
    instructions: "Anchor all grid elements vertically to the bottom of their rows.",
    hint: "Try: align-items: end",
    initialCSS: { display: "grid", gridTemplateRows: "repeat(2, 120px)", alignItems: "stretch" },
    targetCSS: { alignItems: "end" },
    editableProperties: ["alignItems"],
    allowedValues: { alignItems: ["stretch", "start", "end", "center"] },
    ships: [{ id: "s1", label: "🛰️" }, { id: "s2", label: "🛰️" }],
    points: 280
  },

  // ── CATEGORY 17: justify-content (Grid Alignment) ──
  {
    id: 42,
    title: "Hangar Box Centering",
    concept: "Grid Alignment",
    tag: "justify-content",
    instructions: "Center the entire grid block horizontally within the docking bay.",
    hint: "Try: justify-content: center",
    initialCSS: { display: "grid", gridTemplateColumns: "100px 100px", justifyContent: "start" },
    targetCSS: { justifyContent: "center" },
    editableProperties: ["justifyContent"],
    allowedValues: { justifyContent: ["start", "end", "center", "space-between", "space-around", "space-evenly"] },
    ships: [{ id: "s1", label: "📦" }, { id: "s2", label: "📦" }],
    points: 290
  },

  // ── CATEGORY 18: align-content (Grid Alignment) ──
  {
    id: 43,
    title: "Vertical Hangar Centering",
    concept: "Grid Alignment",
    tag: "align-content",
    instructions: "Center the entire grid block vertically within the docking bay.",
    hint: "Try: align-content: center",
    initialCSS: { display: "grid", gridTemplateRows: "80px 80px", alignContent: "start" },
    targetCSS: { alignContent: "center" },
    editableProperties: ["alignContent"],
    allowedValues: { alignContent: ["start", "end", "center", "space-between", "space-around", "space-evenly"] },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🚀" }],
    points: 290
  },

  // ── CATEGORY 19: justify-self & align-self (Grid Item Alignment) ──
  {
    id: 44,
    title: "Defector Probe Placement",
    concept: "Grid Placement",
    tag: "justify-self/align-self",
    instructions: "Position a single rebel probe exactly in the center of its grid cell horizontally and vertically.",
    hint: "Set justify-self: center and align-self: center",
    initialCSS: { display: "grid", gridTemplateColumns: "1fr", justifySelf: "stretch", alignSelf: "stretch" },
    targetCSS: { justifySelf: "center", alignSelf: "center" },
    editableProperties: ["justifySelf", "alignSelf"],
    allowedValues: { justifySelf: ["stretch", "start", "end", "center"], alignSelf: ["stretch", "start", "end", "center"] },
    ships: [{ id: "s1", label: "🚨" }],
    points: 300
  },

  // ── CATEGORY 20: Advanced Hybrid Challenges (Missions 45 - 50) ──
  {
    id: 45,
    title: "The Quad Squadron Layout",
    concept: "Flexbox Advanced",
    tag: "justify-content + align-items",
    instructions: "Secure four fighters in a row. Center them horizontally and stick them to the bottom floor.",
    hint: "Set justify-content: center and align-items: flex-end",
    initialCSS: { display: "flex", justifyContent: "flex-start", alignItems: "flex-start" },
    targetCSS: { justifyContent: "center", alignItems: "flex-end" },
    editableProperties: ["justifyContent", "alignItems"],
    allowedValues: {
      justifyContent: ["flex-start", "center", "flex-end", "space-between"],
      alignItems: ["flex-start", "center", "flex-end"]
    },
    ships: [{ id: "s1", label: "🛸" }, { id: "s2", label: "🛸" }, { id: "s3", label: "🛸" }, { id: "s4", label: "🛸" }],
    points: 350
  },
  {
    id: 46,
    title: "Double-Row Patrol Perimeter",
    concept: "Flexbox Advanced",
    tag: "flex-direction + justify-content",
    instructions: "Stack patrolling fleet vertically and push them to the very bottom.",
    hint: "Set flex-direction: column and justify-content: flex-end",
    initialCSS: { display: "flex", flexDirection: "row", justifyContent: "flex-start" },
    targetCSS: { flexDirection: "column", justifyContent: "flex-end" },
    editableProperties: ["flexDirection", "justifyContent"],
    allowedValues: {
      flexDirection: ["row", "row-reverse", "column", "column-reverse"],
      justifyContent: ["flex-start", "center", "flex-end", "space-between"]
    },
    ships: [{ id: "s1", label: "🛩️" }, { id: "s2", label: "🛩️" }],
    points: 350
  },
  {
    id: 47,
    title: "Asymmetric Starship Core",
    concept: "Grid Advanced",
    tag: "grid-template-columns + gap",
    instructions: "Define three columns where the center column is 2fr and the side columns are 1fr, with a 24px gap.",
    hint: "Set grid-template-columns: 1fr 2fr 1fr and gap: 24px",
    initialCSS: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0px" },
    targetCSS: { gridTemplateColumns: "1fr 2fr 1fr", gap: "24px" },
    editableProperties: ["gridTemplateColumns", "gap"],
    allowedValues: {
      gridTemplateColumns: ["1fr 1fr 1fr", "1fr 2fr 1fr", "2fr 1fr 2fr"],
      gap: ["0px", "8px", "16px", "24px", "32px"]
    },
    ships: [{ id: "s1", label: "🛰️" }, { id: "s2", label: "👑" }, { id: "s3", label: "🛰️" }],
    points: 380
  },
  {
    id: 48,
    title: "Grid Launch Deck Layout",
    concept: "Grid Advanced",
    tag: "grid-template-rows + gap",
    instructions: "Create a launching platform grid with 2 equal rows and a gap of 32px between cells.",
    hint: "Set grid-template-rows: repeat(2, 1fr) and gap: 32px",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto", gap: "0px" },
    targetCSS: { gridTemplateRows: "repeat(2, 1fr)", gap: "32px" },
    editableProperties: ["gridTemplateRows", "gap"],
    allowedValues: {
      gridTemplateRows: ["auto", "repeat(2, 1fr)", "repeat(3, 1fr)"],
      gap: ["0px", "8px", "16px", "24px", "32px"]
    },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🚀" }, { id: "s3", label: "🚀" }, { id: "s4", label: "🛸" }, { id: "s5", label: "🛸" }, { id: "s6", label: "🛸" }],
    points: 400
  },
  {
    id: 49,
    title: "Orbit Cross Grid Position",
    concept: "Grid Advanced",
    tag: "grid-column-start/end + grid-row-start/end",
    instructions: "Anchor the center portal structure to stretch from grid-column 2 to 3, and grid-row 2 to 4.",
    hint: "Set grid-column-start: 2, grid-column-end: 3, grid-row-start: 2, and grid-row-end: 4",
    initialCSS: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)", gridColumnStart: "auto", gridColumnEnd: "auto", gridRowStart: "auto", gridRowEnd: "auto" },
    targetCSS: { gridColumnStart: "2", gridColumnEnd: "3", gridRowStart: "2", gridRowEnd: "4" },
    editableProperties: ["gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd"],
    allowedValues: {
      gridColumnStart: ["auto", "1", "2", "3"],
      gridColumnEnd: ["auto", "2", "3", "4"],
      gridRowStart: ["auto", "1", "2", "3"],
      gridRowEnd: ["auto", "2", "3", "4"]
    },
    ships: [{ id: "s1", label: "🌀" }],
    points: 450
  },
  {
    id: 50,
    title: "Ultimate Docking Bay Master",
    concept: "Grid Advanced",
    tag: "grid-area + justify-self + align-self",
    instructions: "Your final test, Commander! Lock the flagship into grid-area 2 / 2 / 4 / 4 and align it perfectly to the center of its space.",
    hint: "Set grid-area: 2 / 2 / 4 / 4, justify-self: center, and align-self: center",
    initialCSS: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
      gridArea: "auto",
      justifySelf: "stretch",
      alignSelf: "stretch"
    },
    targetCSS: { gridArea: "2 / 2 / 4 / 4", justifySelf: "center", alignSelf: "center" },
    editableProperties: ["gridArea", "justifySelf", "alignSelf"],
    allowedValues: {
      gridArea: ["auto", "1 / 1 / 3 / 3", "2 / 2 / 4 / 4"],
      justifySelf: ["stretch", "start", "end", "center"],
      alignSelf: ["stretch", "start", "end", "center"]
    },
    ships: [{ id: "s1", label: "👑" }],
    points: 500
  }
];

export const TOTAL_LEVELS = levels.length;
export const MAX_SCORE = levels.reduce((sum, l) => sum + l.points, 0);

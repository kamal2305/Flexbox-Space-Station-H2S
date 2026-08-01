// ============================================================
// Flexbox / Grid Space Station — Level Data
// ============================================================

export const levels = [
  {
    id: 1,
    title: "The First Docking",
    concept: "Flexbox",
    tag: "justify-content",
    instructions:
      "The cargo ship is stuck at the start of the bay. Use **justify-content** to center it in the docking bay.",
    hint: "Try: justify-content: center",
    initialCSS: { display: "flex", justifyContent: "flex-start" },
    targetCSS: { justifyContent: "center" },
    editableProperties: ["justifyContent"],
    allowedValues: {
      justifyContent: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    ships: [{ id: "s1", label: "🚀" }],
    points: 100,
  },
  {
    id: 2,
    title: "Final Approach",
    concept: "Flexbox",
    tag: "justify-content",
    instructions:
      "Two ships need to be pushed to opposite ends of the bay. Use **justify-content: space-between** to spread them out.",
    hint: "Try: justify-content: space-between",
    initialCSS: { display: "flex", justifyContent: "flex-start" },
    targetCSS: { justifyContent: "space-between" },
    editableProperties: ["justifyContent"],
    allowedValues: {
      justifyContent: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    ships: [{ id: "s1", label: "🚀" }, { id: "s2", label: "🛸" }],
    points: 150,
  },
  {
    id: 3,
    title: "Vertical Alignment",
    concept: "Flexbox",
    tag: "align-items",
    instructions:
      "The ship is floating at the top of the bay. Use **align-items** to bring it to the center vertically.",
    hint: "Try: align-items: center",
    initialCSS: { display: "flex", justifyContent: "center", alignItems: "flex-start" },
    targetCSS: { alignItems: "center" },
    editableProperties: ["alignItems"],
    allowedValues: {
      alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"],
    },
    ships: [{ id: "s1", label: "🚀" }],
    points: 150,
  },
  {
    id: 4,
    title: "Column Formation",
    concept: "Flexbox",
    tag: "flex-direction",
    instructions:
      "Three ships need to stack vertically in the bay. Change **flex-direction** to column.",
    hint: "Try: flex-direction: column",
    initialCSS: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    targetCSS: { flexDirection: "column" },
    editableProperties: ["flexDirection"],
    allowedValues: {
      flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    },
    ships: [
      { id: "s1", label: "🚀" },
      { id: "s2", label: "🛸" },
      { id: "s3", label: "🛩️" },
    ],
    points: 200,
  },
  {
    id: 5,
    title: "Fleet Wrap",
    concept: "Flexbox",
    tag: "flex-wrap",
    instructions:
      "The fleet of 5 ships is overflowing the bay! Use **flex-wrap: wrap** to let them wrap onto multiple rows.",
    hint: "Try: flex-wrap: wrap",
    initialCSS: { display: "flex", flexWrap: "nowrap", gap: "8px" },
    targetCSS: { flexWrap: "wrap" },
    editableProperties: ["flexWrap"],
    allowedValues: {
      flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    },
    ships: [
      { id: "s1", label: "🚀" },
      { id: "s2", label: "🛸" },
      { id: "s3", label: "🛩️" },
      { id: "s4", label: "🚀" },
      { id: "s5", label: "🛸" },
    ],
    points: 200,
  },
  {
    id: 6,
    title: "Row Alignment",
    concept: "Flexbox",
    tag: "align-content",
    instructions:
      "Your wrapped fleet rows are bunched at the top. Use **align-content: space-evenly** to distribute the rows evenly.",
    hint: "Try: align-content: space-evenly",
    initialCSS: {
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start",
      gap: "8px",
    },
    targetCSS: { alignContent: "space-evenly" },
    editableProperties: ["alignContent"],
    allowedValues: {
      alignContent: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
      ],
    },
    ships: [
      { id: "s1", label: "🚀" },
      { id: "s2", label: "🛸" },
      { id: "s3", label: "🛩️" },
      { id: "s4", label: "🚀" },
      { id: "s5", label: "🛸" },
      { id: "s6", label: "🛩️" },
    ],
    points: 250,
  },
  {
    id: 7,
    title: "Grid Sectors",
    concept: "Grid",
    tag: "grid-template-columns",
    instructions:
      "The docking bay has switched to Grid mode! Set **grid-template-columns** to create 3 equal columns for the ships.",
    hint: "Try: grid-template-columns: repeat(3, 1fr)",
    initialCSS: { display: "grid", gridTemplateColumns: "1fr" },
    targetCSS: { gridTemplateColumns: "repeat(3, 1fr)" },
    editableProperties: ["gridTemplateColumns"],
    allowedValues: {
      gridTemplateColumns: [
        "1fr",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "200px 1fr",
        "1fr 2fr",
      ],
    },
    ships: [
      { id: "s1", label: "🚀" },
      { id: "s2", label: "🛸" },
      { id: "s3", label: "🛩️" },
      { id: "s4", label: "🚀" },
      { id: "s5", label: "🛸" },
      { id: "s6", label: "🛩️" },
    ],
    points: 300,
  },
  {
    id: 8,
    title: "Orbital Grid",
    concept: "Grid",
    tag: "grid-template-rows + gap",
    instructions:
      "Final mission! Set **grid-template-rows** to create 2 equal rows and add **gap: 16px** between all cells.",
    hint: "Set grid-template-rows: repeat(2, 1fr) and gap: 16px",
    initialCSS: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "auto",
      gap: "0px",
    },
    targetCSS: { gridTemplateRows: "repeat(2, 1fr)", gap: "16px" },
    editableProperties: ["gridTemplateRows", "gap"],
    allowedValues: {
      gridTemplateRows: ["auto", "repeat(2, 1fr)", "repeat(3, 1fr)", "100px 1fr"],
      gap: ["0px", "8px", "16px", "24px", "32px"],
    },
    ships: [
      { id: "s1", label: "🚀" },
      { id: "s2", label: "🛸" },
      { id: "s3", label: "🛩️" },
      { id: "s4", label: "🚀" },
      { id: "s5", label: "🛸" },
      { id: "s6", label: "🛩️" },
    ],
    points: 400,
  },
];

export const TOTAL_LEVELS = levels.length;
export const MAX_SCORE = levels.reduce((sum, l) => sum + l.points, 0);

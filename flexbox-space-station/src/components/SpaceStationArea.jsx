import React from "react";
import { useGame } from "../context/GameContext";
import "./SpaceStationArea.css";

// Compute the style object to apply from userCSS + initialCSS
function buildContainerStyle(css) {
  // Map camelCase keys to actual CSS style object
  return css;
}

export default function SpaceStationArea() {
  const { currentLevel, userCSS, isCorrect } = useGame();

  const containerStyle = buildContainerStyle(userCSS);

  return (
    <section className="station-area">
      {/* Instructions panel */}
      <div className="instructions-panel glass">
        <p
          className="instructions-text"
          dangerouslySetInnerHTML={{ __html: currentLevel.instructions.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
        />
        {currentLevel.hint && (
          <p className="hint-text">💡 {currentLevel.hint}</p>
        )}
      </div>

      {/* Docking Bay */}
      <div className={`docking-bay-wrapper ${isCorrect ? "correct" : ""}`}>
        <div className="bay-label">
          <span>DOCKING BAY — {currentLevel.tag.toUpperCase()}</span>
        </div>

        <div
          className={`docking-bay ${isCorrect ? "docked" : ""}`}
          style={containerStyle}
        >
          {currentLevel.ships.map((ship, i) => (
            <div
              key={ship.id}
              className="ship"
              style={{ animationDelay: `${i * 0.15}s` }}
              title={`Ship ${ship.id}`}
            >
              <span className="ship-emoji">{ship.label}</span>
              <div className="ship-glow" />
            </div>
          ))}
        </div>

        {/* Target overlay hint */}
        {!isCorrect && (
          <div className="target-hint">
            <span className="target-label">🎯 TARGET</span>
            <TargetPreview level={currentLevel} />
          </div>
        )}

        {/* Success overlay */}
        {isCorrect && (
          <div className="success-overlay">
            <span className="success-icon">✓</span>
            <span className="success-text">DOCKED!</span>
          </div>
        )}
      </div>
    </section>
  );
}

function TargetPreview({ level }) {
  // Build final target CSS by merging initialCSS + targetCSS
  const targetStyle = { ...level.initialCSS, ...level.targetCSS };

  return (
    <div className="target-preview" style={targetStyle}>
      {level.ships.map((ship, i) => (
        <div key={ship.id} className="ship-ghost" style={{ animationDelay: `${i * 0.15}s` }}>
          <span className="ship-ghost-emoji">{ship.label}</span>
        </div>
      ))}
    </div>
  );
}

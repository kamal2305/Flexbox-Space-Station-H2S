import React from "react";
import { useGame } from "../context/GameContext";
import "./HeaderHUD.css";

export default function HeaderHUD() {
  const {
    currentLevel,
    currentLevelIndex,
    levelsData,
    totalScore,
    completedLevels,
    streak,
    resetLevel,
    goToLevel,
  } = useGame();

  const progressPct = (completedLevels.length / levelsData.length) * 100;

  return (
    <>
      {/* Progress Rail */}
      <div className="progress-rail" style={{ width: `${progressPct}%` }} />

      <header className="hud glass">
        {/* Left: Level info */}
        <div className="hud-left">
          <span className={`concept-chip ${currentLevel.concept === "Grid" ? "grid" : ""}`}>
            {currentLevel.concept}
          </span>
          <div className="hud-level-info">
            <span className="hud-level-num">LEVEL {currentLevel.id}</span>
            <h1 className="hud-level-title">{currentLevel.title}</h1>
          </div>
        </div>

        {/* Center: Level nav dots */}
        <nav className="hud-dots" aria-label="Level navigation">
          {levelsData.map((lvl, i) => (
            <button
              key={lvl.id}
              className={`hud-dot ${i === currentLevelIndex ? "active" : ""} ${
                completedLevels.includes(lvl.id) ? "done" : ""
              }`}
              onClick={() => goToLevel(i)}
              title={`Level ${lvl.id}: ${lvl.title}`}
              aria-label={`Go to Level ${lvl.id}`}
            />
          ))}
        </nav>

        {/* Right: Score + streak + reset */}
        <div className="hud-right">
          {streak > 0 && (
            <div className="hud-streak" title="Current streak">
              <span className="streak-fire">🔥</span>
              <span className="streak-num">{streak}</span>
            </div>
          )}
          <div className="hud-score">
            <span className="score-icon">⭐</span>
            <span className="score-val">{totalScore.toLocaleString()}</span>
          </div>
          <button className="btn-ghost" onClick={resetLevel} aria-label="Reset current level">
            ↺ Reset
          </button>
        </div>
      </header>
    </>
  );
}

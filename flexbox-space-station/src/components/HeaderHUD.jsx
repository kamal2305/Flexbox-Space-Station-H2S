import React from "react";
import { useGame } from "../context/GameContext";
import "./HeaderHUD.css";

export default function HeaderHUD({ onExit }) {
  const {
    currentLevel,
    currentLevelIndex,
    levelsData,
    totalScore,
    completedLevels,
    streak,
    resetLevel,
    goToLevel,
    nextLevel,
  } = useGame();

  const progressPct = (completedLevels.length / levelsData.length) * 100;

  const isLastLevel = currentLevelIndex === levelsData.length - 1;

  const handleSkip = () => {
    if (!isLastLevel) {
      nextLevel();
    } else {
      // Loop back to level 1 or simply show first level
      goToLevel(0);
    }
  };

  return (
    <>
      {/* Progress Rail */}
      <div className="progress-rail" style={{ width: `${progressPct}%` }} />

      <header className="hud glass">
        {/* Left: Level info & Home button */}
        <div className="hud-left">
          {onExit && (
            <button className="btn-ghost btn-home" onClick={onExit} aria-label="Go to homepage">
              🏠 Home
            </button>
          )}
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

        {/* Right: Score + streak + actions */}
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
          <button className="btn-ghost btn-skip" onClick={handleSkip} aria-label="Skip level">
            ⏭️ Skip
          </button>
        </div>
      </header>
    </>
  );
}

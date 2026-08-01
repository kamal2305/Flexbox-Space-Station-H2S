import React, { useEffect, useRef } from "react";
import { useGame } from "../context/GameContext";
import { levels, TOTAL_LEVELS } from "../data/levels";
import "./LevelCompleteModal.css";

export default function LevelCompleteModal() {
  const { showSuccessModal, currentLevel, currentLevelIndex, totalScore, nextLevel, closeModal, goToLevel } = useGame();
  const isLastLevel = currentLevelIndex >= TOTAL_LEVELS - 1;
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  // Confetti animation
  useEffect(() => {
    if (!showSuccessModal) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.3,
      size: Math.random() * 8 + 3,
      color: ["#00f3ff", "#bd00ff", "#00fc86", "#ffca28", "#ff5722"][Math.floor(Math.random() * 5)],
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 4 + 2,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 5,
    }));

    let running = true;

    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotV;
        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
        ctx.restore();
      });
      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      running = false;
      cancelAnimationFrame(animRef.current);
    };
  }, [showSuccessModal]);

  if (!showSuccessModal) return null;

  function handleShare() {
    const text = `🚀 I just completed Level ${currentLevel.id}: "${currentLevel.title}" on Flexbox Space Station! Score: ${totalScore} pts\n\nPlay at: flexboxspace.station`;
    navigator.clipboard?.writeText(text).then(() => {
      alert("Result copied to clipboard! Share it 🚀");
    });
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Level Complete">
      <canvas ref={canvasRef} className="confetti-canvas" />

      <div className="modal-card glass">
        {/* Header */}
        <div className="modal-header">
          <span className="modal-icon">{isLastLevel ? "🏆" : "✨"}</span>
          <h2 className="modal-title">
            {isLastLevel ? "MISSION COMPLETE!" : "DOCKING SUCCESSFUL!"}
          </h2>
          <p className="modal-subtitle">
            {isLastLevel
              ? "You've mastered all Flexbox & Grid concepts!"
              : `Level ${currentLevel.id} — ${currentLevel.title}`}
          </p>
        </div>

        {/* Score */}
        <div className="modal-score-row">
          <div className="modal-stat">
            <span className="stat-label">POINTS EARNED</span>
            <span className="stat-val cyan">+{currentLevel.points}</span>
          </div>
          <div className="modal-stat">
            <span className="stat-label">TOTAL SCORE</span>
            <span className="stat-val">{totalScore.toLocaleString()}</span>
          </div>
          <div className="modal-stat">
            <span className="stat-label">CONCEPT</span>
            <span className={`concept-chip ${currentLevel.concept === "Grid" ? "grid" : ""}`}>
              {currentLevel.tag}
            </span>
          </div>
        </div>

        {/* Next levels preview */}
        {!isLastLevel && (
          <div className="modal-next-preview">
            <span className="next-preview-label">UP NEXT</span>
            <span className="next-preview-title">
              Level {currentLevelIndex + 2}: {levels[currentLevelIndex + 1]?.title}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="modal-actions">
          <button className="btn-ghost" onClick={handleShare} id="share-btn">
            ↗ Share
          </button>
          {!isLastLevel ? (
            <button className="btn-primary modal-cta" onClick={nextLevel} id="next-level-btn">
              <span>NEXT MISSION →</span>
            </button>
          ) : (
            <button className="btn-primary modal-cta" onClick={() => goToLevel(0)} id="restart-btn">
              <span>↺ PLAY AGAIN</span>
            </button>
          )}
        </div>

        <button className="modal-close" onClick={closeModal} aria-label="Close modal">✕</button>
      </div>
    </div>
  );
}

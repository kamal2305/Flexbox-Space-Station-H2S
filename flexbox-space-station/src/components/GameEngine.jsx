import React from "react";
import HeaderHUD from "./HeaderHUD";
import SpaceStationArea from "./SpaceStationArea";
import CodeEditorPanel from "./CodeEditorPanel";
import LevelCompleteModal from "./LevelCompleteModal";
import "./GameEngine.css";

export default function GameEngine() {
  return (
    <div className="game-root">
      <HeaderHUD />

      <main className="game-main">
        {/* Left: Code Editor (40%) */}
        <CodeEditorPanel />

        {/* Divider */}
        <div className="game-divider" aria-hidden="true" />

        {/* Right: Space Station Visual (60%) */}
        <SpaceStationArea />
      </main>

      {/* Modals */}
      <LevelCompleteModal />
    </div>
  );
}

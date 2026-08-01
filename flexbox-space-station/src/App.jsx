import React, { useState } from "react";
import { GameProvider } from "./context/GameContext";
import GameEngine from "./components/GameEngine";
import LandingPage from "./components/LandingPage";
import "./index.css";

export default function App() {
  const [showGame, setShowGame] = useState(false);

  if (!showGame) {
    return <LandingPage onStart={() => setShowGame(true)} />;
  }

  return (
    <GameProvider>
      <GameEngine onExit={() => setShowGame(false)} />
    </GameProvider>
  );
}

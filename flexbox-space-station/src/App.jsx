import React from "react";
import { GameProvider } from "./context/GameContext";
import GameEngine from "./components/GameEngine";
import "./index.css";

export default function App() {
  return (
    <GameProvider>
      <GameEngine />
    </GameProvider>
  );
}

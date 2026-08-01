import React, { createContext, useContext, useReducer, useEffect, useCallback } from "react";
import { levels } from "../data/levels";

const GameContext = createContext(null);

const STORAGE_KEY = "flexbox_space_station_v1";

const initialState = {
  currentLevelIndex: 0,
  userCSS: {},          // the CSS the user is building
  totalScore: 0,
  completedLevels: [],  // array of level ids
  streak: 0,
  showSuccessModal: false,
  isCorrect: false,
  attempts: 0,
};

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return {
        ...initialState,
        currentLevelIndex: data.currentLevelIndex ?? 0,
        totalScore: data.totalScore ?? 0,
        completedLevels: data.completedLevels ?? [],
        streak: data.streak ?? 0,
      };
    }
  } catch (_) {}
  return initialState;
}

function gameReducer(state, action) {
  switch (action.type) {
    case "INIT_LEVEL": {
      const level = levels[state.currentLevelIndex];
      return {
        ...state,
        userCSS: { ...level.initialCSS },
        showSuccessModal: false,
        isCorrect: false,
        attempts: 0,
      };
    }
    case "SET_CSS_PROP": {
      return {
        ...state,
        userCSS: { ...state.userCSS, [action.prop]: action.value },
        isCorrect: false,
      };
    }
    case "SUBMIT": {
      const level = levels[state.currentLevelIndex];
      const target = level.targetCSS;
      // Check every target property matches userCSS
      const isCorrect = Object.entries(target).every(([key, val]) => {
        return state.userCSS[key] === val;
      });

      if (isCorrect) {
        const alreadyCompleted = state.completedLevels.includes(level.id);
        const scoreGain = alreadyCompleted ? 0 : level.points;
        const newCompleted = alreadyCompleted
          ? state.completedLevels
          : [...state.completedLevels, level.id];
        return {
          ...state,
          isCorrect: true,
          showSuccessModal: true,
          totalScore: state.totalScore + scoreGain,
          completedLevels: newCompleted,
          streak: state.streak + 1,
          attempts: state.attempts + 1,
        };
      }
      return { ...state, isCorrect: false, attempts: state.attempts + 1 };
    }
    case "NEXT_LEVEL": {
      const nextIndex = Math.min(state.currentLevelIndex + 1, levels.length - 1);
      const level = levels[nextIndex];
      return {
        ...state,
        currentLevelIndex: nextIndex,
        userCSS: { ...level.initialCSS },
        showSuccessModal: false,
        isCorrect: false,
        attempts: 0,
      };
    }
    case "GO_TO_LEVEL": {
      const level = levels[action.index];
      return {
        ...state,
        currentLevelIndex: action.index,
        userCSS: { ...level.initialCSS },
        showSuccessModal: false,
        isCorrect: false,
        attempts: 0,
      };
    }
    case "RESET_LEVEL": {
      const level = levels[state.currentLevelIndex];
      return {
        ...state,
        userCSS: { ...level.initialCSS },
        showSuccessModal: false,
        isCorrect: false,
        attempts: 0,
      };
    }
    case "CLOSE_MODAL": {
      return { ...state, showSuccessModal: false };
    }
    case "RESET_ALL": {
      return { ...initialState };
    }
    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, null, loadFromStorage);

  // Init the CSS for whatever level we're on (runs on mount and level change)
  useEffect(() => {
    dispatch({ type: "INIT_LEVEL" });
  }, [state.currentLevelIndex]); // eslint-disable-line

  // Persist progress to LocalStorage
  useEffect(() => {
    const toSave = {
      currentLevelIndex: state.currentLevelIndex,
      totalScore: state.totalScore,
      completedLevels: state.completedLevels,
      streak: state.streak,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [state.currentLevelIndex, state.totalScore, state.completedLevels, state.streak]);

  const currentLevel = levels[state.currentLevelIndex];

  const setCSSProp = useCallback((prop, value) => {
    dispatch({ type: "SET_CSS_PROP", prop, value });
  }, []);

  const submit = useCallback(() => dispatch({ type: "SUBMIT" }), []);
  const nextLevel = useCallback(() => dispatch({ type: "NEXT_LEVEL" }), []);
  const resetLevel = useCallback(() => dispatch({ type: "RESET_LEVEL" }), []);
  const closeModal = useCallback(() => dispatch({ type: "CLOSE_MODAL" }), []);
  const goToLevel = useCallback((index) => dispatch({ type: "GO_TO_LEVEL", index }), []);
  const resetAll = useCallback(() => dispatch({ type: "RESET_ALL" }), []);

  return (
    <GameContext.Provider
      value={{
        ...state,
        currentLevel,
        levelsData: levels,
        setCSSProp,
        submit,
        nextLevel,
        resetLevel,
        closeModal,
        goToLevel,
        resetAll,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside <GameProvider>");
  return ctx;
}

import { useState, useEffect, useCallback } from 'react';
import { createGameRuntime, GameRuntimeAPI, Difficulty } from '../../game/game-runtime';

let globalRuntime: GameRuntimeAPI | null = null;

export function getOrCreateRuntime(): GameRuntimeAPI {
  if (!globalRuntime) {
    globalRuntime = createGameRuntime();
  }
  return globalRuntime;
}

export function resetRuntime(): GameRuntimeAPI {
  globalRuntime = createGameRuntime();
  return globalRuntime;
}

export function usePacketrailLiteRuntime() {
  const [runtime] = useState(() => getOrCreateRuntime());
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const listener = () => forceUpdate((n) => n + 1);
    // Attach via internal listener mechanism if available
    const internal = runtime as any;
    if (internal._listeners) {
      internal._listeners.add(listener);
      return () => internal._listeners.delete(listener);
    }
    // Fallback: poll state changes every tick ms
    const id = setInterval(() => forceUpdate((n) => n + 1), 100);
    return () => clearInterval(id);
  }, [runtime]);

  const moveLeft = useCallback(() => runtime.actions.moveLeft(), [runtime]);
  const moveRight = useCallback(() => runtime.actions.moveRight(), [runtime]);
  const start = useCallback(() => runtime.actions.start(), [runtime]);
  const pause = useCallback(() => runtime.actions.pause(), [runtime]);
  const resume = useCallback(() => runtime.actions.resume(), [runtime]);
  const restart = useCallback(() => runtime.actions.restart(), [runtime]);
  const setDifficulty = useCallback((d: Difficulty) => runtime.actions.setDifficulty(d), [runtime]);

  return {
    state: runtime.state,
    actions: {
      start,
      pause,
      resume,
      restart,
      moveLeft,
      moveRight,
      setDifficulty,
    },
  };
}

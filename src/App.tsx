import { useState, useEffect, useCallback } from 'react';
import {
  GameplayPacketrailLite,
  GameSettingsPacketrailLite,
} from './screens';
import { getOrCreateRuntime } from './features/packetrail-lite/packetrail-lite.store';
import { saveSession } from './features/packetrail-lite/packetrail-lite.repo';

type Screen = 'gameplay' | 'settings';

export default function App() {
  const [screen, setScreen] = useState<Screen>('gameplay');
  const [runtime] = useState(() => getOrCreateRuntime());
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const id = setInterval(() => forceUpdate((n) => n + 1), 100);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (screen !== 'gameplay') return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        runtime.actions.moveLeft();
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        runtime.actions.moveRight();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        if (runtime.state.paused) {
          runtime.actions.resume();
        } else {
          runtime.actions.pause();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [runtime, screen]);

  const goToSettings = useCallback(() => setScreen('settings'), []);
  const goToGameplay = useCallback(() => setScreen('gameplay'), []);

  const handleStartGame = useCallback(() => {
    runtime.actions.start();
  }, [runtime]);

  const handlePause = useCallback(() => {
    runtime.actions.pause();
  }, [runtime]);

  const handleRestart = useCallback(() => {
    runtime.actions.restart();
  }, [runtime]);

  const handleResume = useCallback(() => {
    runtime.actions.resume();
  }, [runtime]);

  const handleSaveAndReturn = useCallback(() => {
    setScreen('gameplay');
  }, []);

  const handleBackToGame = useCallback(() => {
    setScreen('gameplay');
  }, []);

  const handleResetPreferences = useCallback(() => {
    runtime.actions.setDifficulty('normal');
  }, [runtime]);

  const handleCasual = useCallback(() => {
    runtime.actions.setDifficulty('casual');
  }, [runtime]);

  const handleNormal = useCallback(() => {
    runtime.actions.setDifficulty('normal');
  }, [runtime]);

  const handleHardcore = useCallback(() => {
    runtime.actions.setDifficulty('hardcore');
  }, [runtime]);

  const handleHistory = useCallback(() => {
    // History action placeholder
  }, []);

  const handleUpgradeEngine = useCallback(() => {
    // Upgrade engine placeholder
  }, []);

  const gameplayActions = {
    'settings-1': goToSettings,
    'history-2': handleHistory,
    'upgrade-engine-3': handleUpgradeEngine,
    'pause-4': handlePause,
    'restart-5': handleRestart,
    'start-game-6': handleStartGame,
    'dashboard-1': () => {},
    'arsenal-2': () => {},
    'leaderboard-3': () => {},
    'support-4': () => {},
    'exit-5': () => {},
    'engage-6': () => {},
    'loadout-7': () => {},
    'intel-8': () => {},
    'systems-9': () => {},
  };

  const settingsActions = {
    'casual-1': handleCasual,
    'normal-2': handleNormal,
    'hardcore-3': handleHardcore,
    'save-and-return-4': handleSaveAndReturn,
    'reset-preferences-5': handleResetPreferences,
    'back-to-game-6': handleBackToGame,
  };

  const rt = {
    player: runtime.state.player,
    obstacles: runtime.state.obstacles,
    shards: runtime.state.shards,
    score: runtime.state.score,
    energy: runtime.state.energy,
    lives: runtime.state.lives,
    paused: runtime.state.paused,
  };

  return (
    <div
      data-setfarm-root="packetrail-lite"
      data-testid="setfarm-app-root"
      className="relative h-screen w-screen overflow-hidden bg-slate-950 text-slate-50"
    >
      {screen === 'gameplay' && (
        <GameplayPacketrailLite actions={gameplayActions} runtime={rt} />
      )}
      {screen === 'settings' && (
        <GameSettingsPacketrailLite actions={settingsActions} />
      )}
    </div>
  );
}

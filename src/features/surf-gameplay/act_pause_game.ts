import { GameRuntimeAPI } from '../../game/game-runtime';

export function actPauseGame(runtime: GameRuntimeAPI): void {
  if (runtime.state.paused) {
    runtime.actions.resume();
  } else {
    runtime.actions.pause();
  }
}

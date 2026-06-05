import { GameRuntimeAPI } from '../../game/game-runtime';

export function actReturnToGameplay(runtime: GameRuntimeAPI): void {
  if (runtime.state.paused) {
    runtime.actions.resume();
  }
}

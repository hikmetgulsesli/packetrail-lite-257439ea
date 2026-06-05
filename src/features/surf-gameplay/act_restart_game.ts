import { GameRuntimeAPI } from '../../game/game-runtime';

export function actRestartGame(runtime: GameRuntimeAPI): void {
  runtime.actions.restart();
}

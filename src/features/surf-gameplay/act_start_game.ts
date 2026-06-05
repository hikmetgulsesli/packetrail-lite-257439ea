import { GameRuntimeAPI } from '../../game/game-runtime';

export function actStartGame(runtime: GameRuntimeAPI): void {
  runtime.actions.start();
}

import { createGameRuntime, GameRuntimeAPI, GameRuntimeState } from '../game/game-runtime';

export interface TestBridge {
  runtime: GameRuntimeAPI;
  getState: () => GameRuntimeState;
  tick: (times?: number) => void;
  moveLeft: () => void;
  moveRight: () => void;
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: () => void;
}

export function createTestBridge(): TestBridge {
  const runtime = createGameRuntime();

  function tick(times = 1) {
    for (let i = 0; i < times; i++) {
      runtime.actions.tick();
    }
  }

  return {
    runtime,
    getState: () => runtime.state,
    tick,
    moveLeft: () => runtime.actions.moveLeft(),
    moveRight: () => runtime.actions.moveRight(),
    start: () => runtime.actions.start(),
    pause: () => runtime.actions.pause(),
    resume: () => runtime.actions.resume(),
    restart: () => runtime.actions.restart(),
  };
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

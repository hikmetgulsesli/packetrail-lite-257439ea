import { GameRuntimeState, Difficulty } from '../game/game-runtime';

export function createFixtureState(overrides?: Partial<GameRuntimeState>): GameRuntimeState {
  return {
    player: { lane: 1, position: 0 },
    obstacles: [],
    shards: [],
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
    difficulty: 'normal',
    gameOver: false,
    started: false,
    ...overrides,
  };
}

export function createRunningFixture(overrides?: Partial<GameRuntimeState>): GameRuntimeState {
  return createFixtureState({
    started: true,
    score: 120,
    energy: 80,
    obstacles: [{ lane: 0, position: 500, id: 'o1' }],
    shards: [{ lane: 2, position: 300, id: 's1' }],
    ...overrides,
  });
}

export function createPausedFixture(overrides?: Partial<GameRuntimeState>): GameRuntimeState {
  return createRunningFixture({
    paused: true,
    ...overrides,
  });
}

export function createGameOverFixture(overrides?: Partial<GameRuntimeState>): GameRuntimeState {
  return createRunningFixture({
    lives: 0,
    gameOver: true,
    ...overrides,
  });
}

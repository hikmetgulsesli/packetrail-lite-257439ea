export type Difficulty = 'casual' | 'normal' | 'hardcore';

export interface Obstacle {
  lane: number;
  position: number;
  id: string;
}

export interface Shard {
  lane: number;
  position: number;
  id: string;
}

export interface GameRuntimeState {
  player: { lane: number; position: number };
  obstacles: Obstacle[];
  shards: Shard[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  difficulty: Difficulty;
  gameOver: boolean;
  started: boolean;
}

export interface GameRuntimeActions {
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  tick: () => void;
  setDifficulty: (d: Difficulty) => void;
}

export interface GameRuntimeAPI {
  state: GameRuntimeState;
  actions: GameRuntimeActions;
}

const LANES = 3;
const TRACK_LENGTH = 1000;
const TICK_MS = 100;

function randId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function createInitialState(): GameRuntimeState {
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
  };
}

function spawnObstacles(state: GameRuntimeState): Obstacle[] {
  const count = state.difficulty === 'casual' ? 1 : state.difficulty === 'normal' ? 2 : 3;
  const next: Obstacle[] = [];
  for (let i = 0; i < count; i++) {
    if (Math.random() < 0.3) {
      next.push({
        lane: Math.floor(Math.random() * LANES),
        position: TRACK_LENGTH - 1 - Math.floor(Math.random() * 200),
        id: randId(),
      });
    }
  }
  return next;
}

function spawnShards(state: GameRuntimeState): Shard[] {
  const next: Shard[] = [];
  if (Math.random() < 0.2) {
    next.push({
      lane: Math.floor(Math.random() * LANES),
      position: TRACK_LENGTH - 1 - Math.floor(Math.random() * 200),
      id: randId(),
    });
  }
  return next;
}

function advance(state: GameRuntimeState): GameRuntimeState {
  if (!state.started || state.paused || state.gameOver) return state;

  const speed = state.difficulty === 'casual' ? 2 : state.difficulty === 'normal' ? 4 : 6;

  let obstacles = state.obstacles
    .map((o) => ({ ...o, position: o.position - speed }))
    .filter((o) => o.position > -50);

  let shards = state.shards
    .map((s) => ({ ...s, position: s.position - speed }))
    .filter((s) => s.position > -50);

  const newObstacles = spawnObstacles(state);
  const newShards = spawnShards(state);

  obstacles = obstacles.concat(newObstacles);
  shards = shards.concat(newShards);

  let lives = state.lives;
  let energy = state.energy;
  let score = state.score + 1;

  // Collision detection with player
  const playerPos = state.player.position;
  for (const o of obstacles) {
    if (o.lane === state.player.lane && Math.abs(o.position - playerPos) < 10) {
      lives -= 1;
      energy = Math.max(0, energy - 20);
    }
  }

  for (const s of shards) {
    if (s.lane === state.player.lane && Math.abs(s.position - playerPos) < 10) {
      score += 50;
      energy = Math.min(100, energy + 10);
    }
  }

  // Remove collected shards
  shards = shards.filter((s) => !(s.lane === state.player.lane && Math.abs(s.position - playerPos) < 10));

  const gameOver = lives <= 0;

  return {
    ...state,
    obstacles,
    shards,
    score,
    energy,
    lives: Math.max(0, lives),
    gameOver,
  };
}

export function createGameRuntime(): GameRuntimeAPI {
  let state = createInitialState();
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const listeners = new Set<() => void>();

  function notify() {
    listeners.forEach((fn) => fn());
  }

  function setNext(next: GameRuntimeState) {
    state = next;
    notify();
  }

  const actions: GameRuntimeActions = {
    start() {
      if (state.started) return;
      setNext({ ...createInitialState(), started: true, difficulty: state.difficulty });
      if (!intervalId) {
        intervalId = setInterval(() => {
          actions.tick();
        }, TICK_MS);
      }
    },
    pause() {
      setNext({ ...state, paused: true });
    },
    resume() {
      if (!state.gameOver) {
        setNext({ ...state, paused: false });
      }
    },
    restart() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      setNext(createInitialState());
      setNext({ ...createInitialState(), started: true, difficulty: state.difficulty });
      intervalId = setInterval(() => {
        actions.tick();
      }, TICK_MS);
    },
    moveLeft() {
      if (state.paused || state.gameOver || !state.started) return;
      const lane = Math.max(0, state.player.lane - 1);
      setNext({ ...state, player: { ...state.player, lane } });
    },
    moveRight() {
      if (state.paused || state.gameOver || !state.started) return;
      const lane = Math.min(LANES - 1, state.player.lane + 1);
      setNext({ ...state, player: { ...state.player, lane } });
    },
    tick() {
      setNext(advance(state));
    },
    setDifficulty(d) {
      setNext({ ...state, difficulty: d });
    },
  };

  const api: GameRuntimeAPI = {
    get state() {
      return state;
    },
    actions,
  };

  // Expose for interactive debugging and tests
  if (typeof window !== 'undefined') {
    (window as any).app = api;
  } else if (typeof globalThis !== 'undefined') {
    (globalThis as any).app = api;
  }

  return api;
}

import { GameRuntimeState } from '../../game/game-runtime';

export interface GameSession {
  id: string;
  score: number;
  difficulty: string;
  date: string;
}

const SESSIONS_KEY = 'packetrail-lite-sessions';

export function saveSession(state: GameRuntimeState): GameSession {
  const session: GameSession = {
    id: Math.random().toString(36).slice(2),
    score: state.score,
    difficulty: state.difficulty,
    date: new Date().toISOString(),
  };
  const existing = loadSessions();
  existing.push(session);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(existing.slice(-20)));
  return session;
}

export function loadSessions(): GameSession[] {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    return raw ? (JSON.parse(raw) as GameSession[]) : [];
  } catch {
    return [];
  }
}

export function clearSessions(): void {
  localStorage.removeItem(SESSIONS_KEY);
}

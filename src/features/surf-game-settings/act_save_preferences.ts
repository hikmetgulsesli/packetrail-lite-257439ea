import { GameRuntimeAPI } from '../../game/game-runtime';

export interface SavePreferencesInput {
  difficulty?: 'casual' | 'normal' | 'hardcore';
  speedMultiplier?: number;
}

export function actSavePreferences(
  runtime: GameRuntimeAPI,
  input: SavePreferencesInput
): { ok: boolean; errors?: string[] } {
  const errors: string[] = [];

  if (input.speedMultiplier !== undefined) {
    if (input.speedMultiplier < 0.5 || input.speedMultiplier > 2.0) {
      errors.push('Speed multiplier must be between 0.5 and 2.0');
    }
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  if (input.difficulty) {
    runtime.actions.setDifficulty(input.difficulty);
  }

  return { ok: true };
}

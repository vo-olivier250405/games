export interface GameStateManager {
  state: GameState;
  count: number;
  setState: (state: GameState) => void;
  setCount: (count: number) => void;
}

export type GameState = "playing" | "paused" | "lose" | "win" | "title";

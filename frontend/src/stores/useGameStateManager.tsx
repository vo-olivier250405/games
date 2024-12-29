import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { GameStateManager } from "@/types/GameStateManager";

const useGameStateManager = create<GameStateManager>()(
  persist(
    (set) => ({
      state: "title",
      count: 0,
      setState: (state) => set({ state }),
      setCount: (count) => set({ count }),
    }),
    {
      name: "game-state",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);

export default useGameStateManager;

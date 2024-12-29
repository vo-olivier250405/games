import useGameStateManager from "@/stores/useGameStateManager";
import { PauseCircle } from "lucide-react";
import { FC } from "react";

const GameScreen: FC = () => {
  const { setState } = useGameStateManager();
  return (
    <div>
      <h1>PLAYIIING</h1>
      <button
        className="absolute inset-0 p-4 bg-red-500"
        onClick={() => setState("paused")}
      >
        <PauseCircle size={6} />
      </button>
    </div>
  );
};

export default GameScreen;

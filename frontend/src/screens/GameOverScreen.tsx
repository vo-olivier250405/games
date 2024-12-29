import useGameStateManager from "@/stores/useGameStateManager";
import { FC } from "react";

const GameOverScreen: FC = () => {
  const { setCount, setState } = useGameStateManager();

  const resetGame = () => {
    setCount(0);
    setState("playing");
  };

  return (
    <div>
      <h1>YOU LOSE</h1>
      <button onClick={() => setState("title")}>Quit</button>
      <button onClick={() => resetGame()}>Replay</button>
    </div>
  );
};

export default GameOverScreen;

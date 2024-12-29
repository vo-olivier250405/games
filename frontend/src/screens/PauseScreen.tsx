import useAuth from "@/stores/useAuth";
import useGameStateManager from "@/stores/useGameStateManager";
import { FC } from "react";

const PauseScreen: FC = () => {
  const { setState } = useGameStateManager();
  const { clearAuth } = useAuth();

  return (
    <div className="size-full">
      <h1>Pause Screen</h1>
      <div className="flex flex-col gap-4 items-center justify-center size-full">
        <button onClick={() => setState("playing")}>Resume</button>
        <button onClick={() => setState("title")}>Quit</button>
        <button onClick={() => clearAuth()}>Log out</button>
      </div>
    </div>
  );
};

export default PauseScreen;

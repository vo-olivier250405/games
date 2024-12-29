import useAuth from "@/stores/useAuth";
import useGameStateManager from "@/stores/useGameStateManager";
import { FC } from "react";

const TitleScreen: FC = () => {
  const { setState } = useGameStateManager();
  const { username } = useAuth().user!;

  return (
    <div>
      <h1>Hello {username || "Unamed"}</h1>
      <button onClick={() => setState("playing")}>Start Game</button>
    </div>
  );
};

export default TitleScreen;

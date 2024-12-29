import useGameStateManager from "./stores/useGameStateManager";
import useAuth from "./stores/useAuth";
import {
  GameOverScreen,
  GameScreen,
  LoginScreen,
  PauseScreen,
  TitleScreen,
  WinScreen,
} from "./screens";

function App() {
  const { state } = useGameStateManager();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) return <LoginScreen />;
  switch (state) {
    case "lose":
      return <GameOverScreen />;
    case "win":
      return <WinScreen />;
    case "paused":
      return <PauseScreen />;
    case "playing":
      return <GameScreen />;
    default:
      return <TitleScreen />;
  }
}

export default App;

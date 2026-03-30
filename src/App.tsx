import { useGamepad } from "./hooks/useGamePad"
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const { gamepad } = useGamepad()
  const isConnected = gamepad?.connected

  return (
    <>
      <h2>{isConnected ? 'Ready for Test' : 'Connect your controller with USB or BlueTooth (USB only Linux) and press any key to start'}</h2>
      <p>ID: {gamepad?.id}</p>

      {isConnected && <MainPage />}

      <div>
        <p>LEFT STICK:</p>
        <p>X: {gamepad?.axes[0].toFixed(2)}</p>
        <p>Y: {gamepad?.axes[1].toFixed(2)}</p>
      </div>
      <div>
        <p>RIGHT STICK:</p>
        <p>X: {gamepad?.axes[2].toFixed(2)}</p>
        <p>Y: {gamepad?.axes[3].toFixed(2)}</p>
      </div>
    </>
  )
}

export default App

import type { GamePadProp } from "../../types/GamePadProp"
import GPButton from "../GPButton/GPButton"

const GPTouchPad = ({gamepad}: GamePadProp) => (
   <GPButton buttonName={"TOUCH_PAD"} gamepad={gamepad} />
)

export default GPTouchPad
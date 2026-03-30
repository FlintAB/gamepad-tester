import type { GamePadProp } from "../../types/GamePadProp";
import GPButton from "../GPButton/GPButton";

const GPRightTriggers = ({gamepad}: GamePadProp) => (
   <>
      <GPButton buttonName={"R2"} gamepad={gamepad} />
      <GPButton buttonName={"R1"} gamepad={gamepad} />
   </>
)

export default GPRightTriggers;

import type { GamePadProp } from "../../types/GamePadProp";
import GPButton from "../GPButton/GPButton";

const GPLeftTriggers = ({ gamepad }: GamePadProp) => (
   <>
      <GPButton buttonName={"L2"} gamepad={gamepad} />
      <GPButton buttonName={"L1"} gamepad={gamepad} />
   </>
);

export default GPLeftTriggers;
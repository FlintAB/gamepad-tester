import type { GamePadProp } from "../../types/GamePadProp";
import GPButton from "../GPButton/GPButton";

const GPRightStick = ({gamepad, posX=0, posY=0}: GamePadProp) => {
   const x = (posX + 1) * 20 + 'px'
   const y = (posY + 1) * 20  + 'px'
   return (
      <div style={{position: "relative", left: x, top: y,}}>
         <GPButton buttonName={"RIGHT_STICK_PRESSED"} gamepad={gamepad} />
      </div>
   )
}

export default GPRightStick;
import { gpButtonMap } from "../../constants/gpButtonMap";
import { gpButtonIcons } from "../../constants/gpButtonIcons";
import type { GPButtonProps } from "../../types/GPButtonProps";
import styles from './GPButton.module.css';

const GPButton = ({buttonName, gamepad, className}: GPButtonProps) => {
   const buttonIndex = gpButtonMap[buttonName]
   const isPressed = gamepad?.buttons[buttonIndex]?.pressed ?? false

   return (
      <p className={`${styles['body']} ${isPressed ? styles['pressed'] : ''} ${className || ''}`}>
         {gpButtonIcons[buttonName]}
      </p>
   )
}

export default GPButton;
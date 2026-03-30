import { gpButtonMap } from "../../constants/gpButtonMap";
import { gpButtonIcons } from "../../constants/gpButtonIcons";
import styles from './GPButton.module.css';

type GPButtonProps = {
   buttonName: keyof typeof gpButtonMap;
   gamepad: Gamepad | null;
   className?: string;
}

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
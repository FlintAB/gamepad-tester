import type { GamePadProp } from "../../types/GamePadProp";
import GPButton from "../GPButton/GPButton";
import styles from './GPOptionButtons.module.css'

const GPLogoButton = ({gamepad}: GamePadProp) => (
   <div className={styles.logo}>
      <GPButton buttonName="PS_LOGO" gamepad={gamepad}/>
   </div>
)

export default GPLogoButton;
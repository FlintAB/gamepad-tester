import type { GamePadProp } from "../../types/GamePadProp";
import GPButton from "../GPButton/GPButton";
import styles from './GPOptionButtons.module.css';

const GPShareMenuButtons = ({gamepad}: GamePadProp) => (
   <div className={styles.body}>
      <GPButton buttonName={"SHARE"} gamepad={gamepad} />
      <GPButton buttonName={"OPTIONS"} gamepad={gamepad} />
   </div>
)

export default GPShareMenuButtons;
import type { GamePadProp } from "../../types/GamePadProp";
import GPButton from "../GPButton/GPButton";
import styles from './GPGroupButtons.module.css';

const GPGroupRightButtons = ({gamepad}: GamePadProp) => (
      <div className={styles['body']}>
            <GPButton buttonName={"X"} className={styles['gridBottom']} gamepad={gamepad}/>
            <GPButton buttonName={"O"} className={styles['gridRight']} gamepad={gamepad}/>
            <GPButton buttonName={"SQUARE"} className={styles['gridLeft']} gamepad={gamepad}/>
            <GPButton buttonName={"TRIANGLE"} className={styles['gridTop']} gamepad={gamepad}/>
      </div>
)

export default GPGroupRightButtons;
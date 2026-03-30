import type { GamePadProp } from "../../types/GamePadProp";
import GPButton from "../GPButton/GPButton";
import styles from './GPGroupButtons.module.css';

const GPGroupLeftButtons = ({gamepad}: GamePadProp) => (
      <div className={styles['body']}>
            <GPButton buttonName={"CROSS_DOWN"} className={styles['gridBottom']} gamepad={gamepad}/>
            <GPButton buttonName={"CROSS_RIGHT"} className={styles['gridRight']} gamepad={gamepad}/>
            <GPButton buttonName={"CROSS_LEFT"} className={styles['gridLeft']} gamepad={gamepad}/>
            <GPButton buttonName={"CROSS_UP"} className={styles['gridTop']} gamepad={gamepad}/>
      </div>
)

export default GPGroupLeftButtons;
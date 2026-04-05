import GPGroupLeftButtons from "../../components/GroupButtons/GPGroupLeftButtons";
import GPGroupRightButtons from "../../components/GroupButtons/GPGroupRightButtons";
import GPLeftTriggers from "../../components/GPGroupTriggers/GPLeftTriggers";
import GPRightTriggers from "../../components/GPGroupTriggers/GPRightTriggers";
import GPLogoButton from "../../components/GPOptionButtons/GPLogoButton";
import GPShareMenuButtons from "../../components/GPOptionButtons/GPShareMenuButtons"
import GPLeftStick from "../../components/GPSticks/GPLeftStick";
import GPRightStick from "../../components/GPSticks/GPRightStick";
import GPTouchPad from "../../components/GPTouchPad/GPTouchPad";
import styles from './MainPage.module.css';

const MainPage = ({ gamepad }: {gamepad: Gamepad}) => {


return (
<div className={styles.body}>


   <div className={styles['gp-group-triggers']}>

      <div className={styles['gp-left-triggers']}>
         <GPLeftTriggers gamepad={gamepad} />
      </div>

      <div className={styles['gp-right-triggers']}>
         <GPRightTriggers gamepad={gamepad} />
      </div>

   </div>


   <div className={styles['gp-share-menu']}>
      <GPShareMenuButtons gamepad={gamepad} />
   </div>

   <div className={styles['gp-touch-pad']}>
      <GPTouchPad gamepad={gamepad} />
   </div>

   <div className={styles['group-buttons']}>
      <div className={styles.leftGroup}>
         <GPGroupLeftButtons gamepad={gamepad} />
      </div>
      <div className={styles.rightGroup}>
         <GPGroupRightButtons gamepad={gamepad} />
      </div>
   </div>


   <div className={styles['gp-bottom']}>
      <GPLeftStick gamepad={gamepad} posX={gamepad?.axes[0]} posY={gamepad?.axes[1]}/>
      <GPLogoButton gamepad={gamepad} />
      <GPRightStick gamepad={gamepad} posX={gamepad?.axes[2]} posY={gamepad?.axes[3]}/>
   </div>

</div>
   )
}

export default MainPage;
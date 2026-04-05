import { createPortal } from "react-dom";
import { useDriftDetect } from "../../hooks/useDriftDetected";
import type { ModalDriftProps } from "../../types/ModalDriftProps";
import styles from './ModalDriftTest.module.css';

const ModalDrift = ({ show, toggleShowing, gamepad }: ModalDriftProps) => {
   const { isDrifting, driftingAxes } = useDriftDetect(gamepad)

   if (!show) {
      return (
         <button className={styles['button-toggle']} onClick={toggleShowing}>Check Drift</button>
      )
   }

   return createPortal(
      <div className={styles['modal-wrapper']}>
         <>
               {isDrifting ? 
                  (<p className={`${styles.drift} ${styles.warning}`}>Drift: {driftingAxes.join(',')}</p>)  
                  :
                  (<p className={`${styles.drift} ${styles.none}`}>No Drift</p>)
               }  
         </>
         <>
            <button className={styles['button-toggle']} onClick={toggleShowing}>Close modal</button>
         </>
      </div>
      , document.body
   )
}

export default ModalDrift;
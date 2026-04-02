/**
 * 
 * @Возвращает 
 * @boolean isDrifting, при отклонении стика X/Y больше 0.1 
 * @Array driftingAxes
 */
export const useDriftDetect = (gamepad: Gamepad | null): {isDrifting: boolean, driftingAxes: string[]} => {

   if (!gamepad || !gamepad.axes.length) {
      return { isDrifting: false, driftingAxes: [] };
   }

   const [leftX, leftY, rightX, rightY] = gamepad?.axes ?? []

   const DRIFT_THRESHOLD = 0.1

   const driftingAxes: string[] = []

   const checkAxes = (value: number, name: string) => { 
      if (Math.abs(value) >= DRIFT_THRESHOLD) driftingAxes.push(name)
   }

   checkAxes(leftX, 'Left on X pos')
   checkAxes(leftY, 'Left on Y pos')
   checkAxes(rightX, 'Righ on X pos')
   checkAxes(rightY, 'Right on Y pos')

   return { isDrifting: driftingAxes.length > 0, driftingAxes }
};
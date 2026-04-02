import { useEffect, useState } from "react";

/**
 * 
 * @Возвращает объект gamepad
 */
export function useGamepad(): {gamepad: Gamepad | null} {
   const [gamepad, setGamepad] = useState<Gamepad | null>(null);

   useEffect(() => {
      let frameId: number;

      const loop = () => {
         const gamepads = navigator.getGamepads()[0];

         if (gamepads?.timestamp !== gamepad?.timestamp) {
         setGamepad(gamepads);
         }

         frameId = requestAnimationFrame(loop);
      };

      frameId = requestAnimationFrame(loop);

      return () => cancelAnimationFrame(frameId);
   }, [gamepad?.timestamp]);

   return { gamepad };
}
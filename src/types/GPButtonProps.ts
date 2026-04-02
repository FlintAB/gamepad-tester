import type { gpButtonMap } from "../constants/gpButtonMap";

export type GPButtonProps = {
   buttonName: keyof typeof gpButtonMap;
   gamepad: Gamepad | null;
   className?: string;
}
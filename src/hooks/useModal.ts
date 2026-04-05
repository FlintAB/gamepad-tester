import { useReducer } from "react";

const useModal = (): [boolean, () => void] => {
   const [isShowing, toggleIsShowing] = useReducer(state => !state, false)

   return [isShowing, toggleIsShowing]
}


export default useModal;
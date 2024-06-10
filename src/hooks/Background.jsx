import { create } from "zustand";

const useStore = create((set) =>({
    BackGroundColor: "linear-gradient( 90deg,#0081A7,#00AFB9)",
    ChangeBackGroundColor: (color) => set({ BackGroundColor: color })
}))

export default useStore

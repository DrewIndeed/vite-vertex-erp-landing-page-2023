import { create } from "zustand";

const INIT_DATA = {
  isStarting: false,
};

type ROOT_DATA = {
  isStarting: boolean;
};

interface rootStore {
  data: ROOT_DATA;
  toggleStarted: () => void;
}

export const rootStore = create<rootStore>((set) => ({
  data: INIT_DATA,
  toggleStarted: () => {
    return set((state) => {
      // console.log({ isStarting: !state.data.isStarting });
      return {
        data: { ...state.data, isStarting: !state.data.isStarting },
      };
    });
  },
}));

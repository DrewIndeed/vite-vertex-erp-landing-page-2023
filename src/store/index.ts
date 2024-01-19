import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import { DecodedJwt } from "types/auth.request";

type ROOT_DATA = {
  isStarting: boolean;
  isSignUp: boolean;
  isIn: boolean;
  isConfigSite: boolean;
  isPayment: boolean;
  confirmPayment: boolean;
  man: DecodedJwt | null;
  tk: string;
};

const INIT_DATA: ROOT_DATA = {
  isStarting: false,
  isSignUp: false,
  isIn: false,
  isConfigSite: false,
  isPayment: false,
  confirmPayment: false,
  man: null,
  tk: "",
};

interface rootStore {
  data: ROOT_DATA;
  toggleStarted: () => void;
  toggleSignUp: () => void;
  toggleConfigSite: () => void;
  togglePayment: () => void;
  confirmPayment: () => void;
  handleClientLogin: (accessToken: string) => void;
  handleClientLogout: () => void;
}

export const rootStore = create<rootStore>((set) => ({
  data: INIT_DATA,
  toggleStarted: () =>
    set((state) => {
      // console.log({ isStarting: !state.data.isStarting });
      // final update
      return {
        data: { ...state.data, isStarting: !state.data.isStarting },
      };
    }),
  toggleSignUp: () =>
    set((state) => {
      // console.log({ isStarting: !state.data.isSignUp });
      // final update
      return {
        data: { ...state.data, isSignUp: !state.data.isSignUp },
      };
    }),
  toggleConfigSite: () => set((state) => {
    return {
      data: { ...state.data, isConfigSite: !state.data.isConfigSite },
    }
  }),
  togglePayment: () => set((state) => {
    return {
      data: { ...state.data, isPayment: !state.data.isPayment },
    }
  }),
  confirmPayment: () => set((state) => {
    return {
      data: { ...state.data, confirmPayment: true },
    }
  }),
  handleClientLogin: (accessToken) =>
    // save global data
    set((state) => {
      // save global login status as TRUE
      localStorage.setItem("in", "true");
      // save access token
      localStorage.setItem("tk", accessToken);
      // decode data from token and save them
      const acTokenDecoded = jwtDecode<DecodedJwt>(accessToken);
      localStorage.setItem("man", JSON.stringify(acTokenDecoded));

      // final update
      return {
        data: {
          ...state.data,
          isIn: true,
          tk: accessToken,
          man: acTokenDecoded,
        },
      };
    }),
  handleClientLogout: () => {
    localStorage.setItem("in", "false");
    localStorage.removeItem("tk");
    localStorage.removeItem("man");
    return set(() => ({ data: INIT_DATA }));
  },
}));


import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isLoginCheckDone: boolean;
  setIsLoginCheckDone: (isLoginCheckDone: boolean) => void;
  userName: string;
  setUserName: (userName: string) => void;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(persist((set, get) => ({
  isLoggedIn: false,
  setIsLoggedIn: (_isLoggedIn) => set({ isLoggedIn: _isLoggedIn }),
  isLoginCheckDone: false,
  setIsLoginCheckDone: (_isLoginCheckDone) => set({ isLoginCheckDone: _isLoginCheckDone }),
  userName: "",
  setUserName: (_userName) => set({ userName: _userName }),
  login: () => {
    if(get().userName) {
      set({ isLoggedIn: true });
    }
  },
  logout: () => {
    set({ isLoggedIn: false, userName: "" });
  }
}),
{
  name: 'auth-state',
  partialize: (state) => ({
    isLoggedIn: state.isLoggedIn,
    userName: state.userName
    }),
    onRehydrateStorage: () => {
      console.log("hydration starts");

      return (state, error) => {
        if (error) {
          console.log("an error happened during hydration", error);
        } else {
          if(state){
          state.isLoginCheckDone = true;
        }
          console.log("Rehydration finished");
        }
      };
    },
  }
)
);
import { useEffect } from "react";
import { useAuthStore } from "../../stores/use-auth-store";

const USER_NAME_KEY = "user-name";

export const useAuth = () => {
  const {isLoggedIn, isLoginCheckDone, setIsLoginCheckDone, userName, setUserName, login, logout} = useAuthStore();

  // マウント時にlocalStorageからユーザ名を取得する
  // ユーザー名が取得できた場合はログイン中として扱う
  useEffect(() => {
    const userNameData = localStorage.getItem(USER_NAME_KEY);
    setIsLoginCheckDone(true);
  },[]);

  return{
    isLoggedIn,
    isLoginCheckDone,
    login,
    logout,
    userName,
    setUserName
  }
};
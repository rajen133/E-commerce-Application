import { createContext, useContext, useEffect, useState } from "react";
import authSvc from "../services/auth.service";
import { getLocalStorage, setLocalStorage } from "../utilities/helpers";

interface AuthContextProps {
  isAuthenticated: boolean;
  user: any;
  login: (credentials: { username: string; password: string }) => Promise<any>;
  getLoggedInUser: () => Promise<any>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  login: async () => Promise.resolve(),
  getLoggedInUser: () => Promise.resolve(),
  loading: false,
});

//Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};

//hydration and dehydration

const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const login = async (credentials: { username: string; password: string }) => {
    try {
      let loginResponse = await authSvc.post("/auth/login", credentials);
      //localStorage
      setLocalStorage("accessToken", loginResponse.data.accessToken);
      setLocalStorage("refreshToken", loginResponse.data.refreshToken);

      await getLoggedInUser();
    } catch (exception) {
      // console.log(exception);
    } finally {
      setLoading(false);
    }
  };
  const getLoggedInUser = async () => {
    try {
      let userResponse = await authSvc.get("/auth/me");
      setUser(userResponse.data);
    } catch (exception) {
      console.error(exception);
    }
  };
  useEffect(() => {
    const token = getLocalStorage("accessToken");
    if (token) {
      getLoggedInUser();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          isAuthenticated: user ? true : false,
          user: user,
          login: login,
          getLoggedInUser: getLoggedInUser,
          loading: loading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthProvider;

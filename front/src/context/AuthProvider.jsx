import { createContext, useContext, useEffect, useState } from "react";
import {
  getAccessToken,
  removeFromStorage,
} from "../services/auth/auth-token.service";
import { authService } from "../services/auth/auth.service";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuthCheck = async () => {
      try {
        setIsLoading(true);
        const accessToken = getAccessToken();

        if (accessToken) {
          const userData = await authService.refesh();

          setUser(userData.user);

          setIsAuth(true);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    if (isAuth) return;

    checkAuthCheck();
  }, []);

  const deleteUser = () => {
    setUser({});
    setIsAuth(false);
    removeFromStorage();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        isAuth,
        setIsAuth,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default AuthProvider;

"use client";
import { userInfo } from "@/app/(withComonLayout)/actions/auth";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>({
  user: null,
  setUser: () => {}

});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const x = async () => {
    const res = await userInfo();
    setUser(res);
  };

  useEffect(() => {
    x();
  }, []);

  return <AuthContext.Provider  value={{user,setUser}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

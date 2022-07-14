import React, { useState, createContext, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserData, Context } from "../types/context";

export const initState = {
  user: {
    auth: false,
    id: "",
    email: "",
    name: "",
    role: "",
    token: ""
  },
  loading: false,
  setLoading: (l: boolean) => {},
  setUser: (u: UserData) => {}
}

export const AppContext = createContext<Context>(initState);

type Props = {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {

  const [userData, setUserData] = useState<UserData>(initState.user);
  const [isLoading, setIsLoading] = useState<boolean>(initState.loading);
  const loadStatus = useRef<boolean>(false);

  const setUser = (user: UserData) => {
    setUserData(user);
  }

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  }

  const saveState = async () => {
    await AsyncStorage.setItem("user", JSON.stringify(userData));
  }

  const loadState = async () => {
    const savedData = await AsyncStorage.getItem("user") || "";
    const parsedData = JSON.parse(savedData);
    if(parsedData){
      setUser(parsedData);
    }
  }

  useEffect(() => {
    loadState();
  }, []);

  useEffect(() => {
    if(loadStatus.current){
      saveState();
    } else {
      loadStatus.current = true;
    }
  }, [userData]);

  return(
    <AppContext.Provider value={{
      user: userData,
      loading: isLoading,
      setLoading,
      setUser
    }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
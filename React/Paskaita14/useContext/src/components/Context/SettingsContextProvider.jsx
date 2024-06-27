import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export default function SettingsContextProvider({children}) {
  const [show, setShow] = useState("show");

  return (
    <SettingsContext.Provider value={{ show, setShow }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettingsContext should be used inside SettingsContext provider")
  }

  return context;
}
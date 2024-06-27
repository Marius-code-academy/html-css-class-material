import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export const SettingsContext = createContext();

function App() {
  const [show, setShow] = useState("show");

  return (
    <div>
      <SettingsContext.Provider value={{ show, setShow }}>
        <Header setShow={setShow} />
        <Main />
      </SettingsContext.Provider>
    </div>
  );
}

export default App;

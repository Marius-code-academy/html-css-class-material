import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/main" element={<Main name={"Kazkos vardas"} />} />
      <Route path="/contacts" element={<Contacts />}/>
    </Routes>
  );
}

export default App;

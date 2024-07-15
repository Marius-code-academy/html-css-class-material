import { useRef } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import RegisterSection from "./components/RegisterSection/RegisterSection";

function App() {
  const inputRef = useRef();
  const registerSectionRef = useRef();
  const someelement = useRef();

  function handleFocusInput() {
    inputRef.current.focus();
  }

  function handleScrollToSection() {
    registerSectionRef.current.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div ref={someelement}>
      <div style={{ height: "200vh" }}>
        <RegisterSection ref={registerSectionRef} />
        <Input ref={inputRef} value={"Kazkazs"} />
        <button onClick={handleFocusInput}>Focus input</button>
      </div>
      <button onClick={handleScrollToSection}>Leave your email for a newsletter</button>
    </div>
  );
}

export default App;

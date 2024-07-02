import { useMemo, useState } from "react";
import "./App.css";
import TodosContainer from "./components/TodosContainer/TodosContainer";

function App() {
  const [number, setNumber] = useState(0)
  const [multiplyer, setMultiplyer] = useState(1);

  function hardCalculation() {
    console.log("Hard calculation");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result * multiplyer;
  }

  const hardCalculationResult = useMemo(hardCalculation, [multiplyer])

  return <div>
    <TodosContainer />
    <h5>{number}</h5>
    <button onClick={() => setNumber(number + 1)}>Increment</button>
    <button onClick={() => setMultiplyer(multiplyer + 1)}>Increase multiplyer</button>
    <p>{hardCalculationResult}</p>
  </div>;
}

export default App;

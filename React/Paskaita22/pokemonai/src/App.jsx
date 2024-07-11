import { useState } from "react";
import "./App.css";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
  const [pokemonData, setPokemonData] = useState();

  return (
    <div>
      <PokemonForm setPokemonData={setPokemonData} />
      {
        pokemonData && <PokemonCard pokemonData={pokemonData} />
      }
    </div>
  );
}

export default App;

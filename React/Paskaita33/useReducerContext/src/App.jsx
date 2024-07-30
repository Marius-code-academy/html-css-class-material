import { useState } from 'react'
import './App.css'
import { ACTION_TYPES, useAppContext } from './context/AppContextProvider';
import Header from './components/Header/Header';
import ItemsContainer from './components/ItemsContainer/ItemsContainer';

function App() {
  const {state, dispatch} = useAppContext();

  const [name, setName] = useState("");

  function handleSetUser() {
    dispatch({
      type: ACTION_TYPES.SET_USER,
      payload: name,
    })
  }

  return (
    <div>
      <Header />
      <h1>{state.user}</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleSetUser}>Set user</button>
      <ItemsContainer />
    </div>
  )
}

export default App

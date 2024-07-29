import { useReducer } from 'react'
import './App.css'
import TodosContainer from './Components/TodosContainer/TodosContainer';

const ACTION_TYPES = {
  INCREMENT: "increment123",
  DECREMENT: "decrement",
  INCREASE_BY_NUM: "increase-by-num"
}

function reducer(state, action) {
  console.log(action, state);

  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { count: state.count + 1 }
    case ACTION_TYPES.DECREMENT: 
      return { count: state.count - 1}
    case ACTION_TYPES.INCREASE_BY_NUM:
        return { count: state.count + action.payload }
    default: 
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
        <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT })}>
          count is {state.count}
        </button>
        <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT })}>Decrement</button>
        <button onClick={() => dispatch({ type: ACTION_TYPES.INCREASE_BY_NUM, payload: 5 })}>Increase by something</button>
        <TodosContainer />
    </>
  )
}

export default App

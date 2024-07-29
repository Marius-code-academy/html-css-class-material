import { useReducer, useState } from "react";

const ACTION_TYPES = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, { title: action.payload.title, id: action.payload.id, isFinished: false }];
    case ACTION_TYPES.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          const todoCopy = {...todo};
          todoCopy.isFinished = !todoCopy.isFinished;
          return todoCopy;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

export default function TodosContainer() {
  const [state, dispatch] = useReducer(reducer, []);

  const [inputValue, setInputValue] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    dispatch({ type: ACTION_TYPES.ADD_TODO, payload: { title: inputValue, id: new Date().getMilliseconds() } });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </form>
      {state.map((todo) => (
        <div key={todo.id} style={{ color: todo.isFinished ? "red" : "white" }}>
          <p>{todo.title}</p>
          <input type="checkbox" onChange={() => dispatch({ type: ACTION_TYPES.TOGGLE_TODO, payload: { id: todo.id } })} checked={todo.isFinished} />
          <hr />
        </div>
      ))}
    </div>
  );
}

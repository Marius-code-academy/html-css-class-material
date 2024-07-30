import { useState } from "react";
import { ACTION_TYPES, useAppContext } from "../../context/AppContextProvider";

export default function ItemsContainer() {
  const [itemValue, setItemValue] = useState("");

  const { state, dispatch } = useAppContext();
  return (
    <div>
      <input type="text" value={itemValue} onChange={(e) => setItemValue(e.target.value)} />
      <button onClick={() => dispatch({ type: ACTION_TYPES.ADD_ITEM, payload: itemValue })}>create new item</button>
      {state.items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

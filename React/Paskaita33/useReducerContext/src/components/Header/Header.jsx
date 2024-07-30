import { ACTION_TYPES, useAppContext } from "../../context/AppContextProvider"

export default function Header() {
  const { dispatch } = useAppContext();

  return (
    <div>
      <button onClick={() => {
        dispatch({ type: ACTION_TYPES.DELETE_USER })
      }}>Log out user</button>
    </div>
  )
}

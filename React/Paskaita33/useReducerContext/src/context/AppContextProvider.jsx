import { createContext, useContext, useReducer } from "react"

const initialState = {
  user: null,
  items: [],
  documentId: null,
}

export const ACTION_TYPES = {
  SET_USER: "set-user",
  DELETE_USER: "delete-user",
  ADD_ITEM: "add-item"
}

const AppStateContext = createContext();

function appStateReducer(state, action) {
  switch(action.type) {
    case ACTION_TYPES.SET_USER: 
      return { ...state, user: action.payload }
    case ACTION_TYPES.DELETE_USER:
      return { ...state, user: null }
    case ACTION_TYPES.ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] }
    default:
      return state;
  }
}

export function AppStateProvider({ children }) {

  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppContext must be inside a AppStateProvider");
  }

  return context;
}
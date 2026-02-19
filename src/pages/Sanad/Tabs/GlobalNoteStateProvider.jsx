import { createContext, useReducer } from "react";

const initialState = {
  notes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? { ...note, ...action.payload } : note,
        ),
      };

    default:
      return state;
  }
};

export const GlobalNoteStateContext = createContext();

export const GlobalNoteStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalNoteStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalNoteStateContext.Provider>
  );
};

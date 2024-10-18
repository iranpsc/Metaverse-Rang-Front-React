import { createContext, useContext, useReducer } from "react";

const initialState = {
  subject: "",
  title: "",
  description: "",
  files: [],
  selectedCitizens: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_FILES":
      return { ...state, files: action.payload };
    case "SET_SELECTED_CITIZENS":
      return { ...state, selectedCitizens: action.payload };
    default:
      return state;
  }
};
const GlobalVodStateContext = createContext();

export const GlobalVodStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalVodStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalVodStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalVodStateContext);
};

import  { createContext, useContext, useReducer } from "react";

const initialState = {
  about: "",
  educations: "",
  job: "",
  hobbies: [],
  country: "",
  language: '',
  city: '',
  memory: "",
  opportunity: "",
  prediction2023: "",
  prediction2024: "",
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ABOUT":
      return { ...state, about: action.payload };
    case "SET_EDUCATIONS":
      return { ...state, educations: action.payload };
    case "SET_JOB":
      return { ...state, job: action.payload };
    case "SET_HOBBIES":
      return { ...state, hobbies: action.payload };
    case "SET_COUNTRY":
      return { ...state, country: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_MEMORY":
      return { ...state, memory: action.payload };
    case "SET_OPPORTUNITY":
      return { ...state, opportunity: action.payload };
    case "SET_PREDICTION_2023":
      return { ...state, prediction2023: action.payload };
    case "SET_NEXT_YEAR_PREDICTION":
      return { ...state, prediction2024: action.payload };
    default:
      return state;
  }
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

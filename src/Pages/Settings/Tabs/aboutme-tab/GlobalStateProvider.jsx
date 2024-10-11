  import  { createContext, useContext, useReducer } from "react";

  const initialState = {
    about: "",
    education: "",
    occupation: "",
    hobbies: [],
    country: "",
    language: '',
    city: '',
    memory: "",
    opportunity: "",
    prediction: "",
  };


  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ABOUT":
        return { ...state, about: action.payload };
      case "SET_EDUCATION":
        return { ...state, education: action.payload };
      case "SET_OCCUPATION":
        return { ...state, occupation: action.payload };
      case "SET_HOBBIES":
        return { ...state, hobbies: action.payload };
      case "SET_COUNTRY":
        return { ...state, loved_country: action.payload };
      case "SET_CITY":
        return { ...state, loved_city: action.payload };
      case "SET_LANGUAGE":
        return { ...state, loved_language: action.payload };
      case "SET_MEMORY":
        return { ...state, memory: action.payload };
      case "SET_OPPORTUNITY":
        return { ...state, opportunity: action.payload };
      case "SET_PREDICTION":
        return { ...state, prediction: action.payload };
    
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

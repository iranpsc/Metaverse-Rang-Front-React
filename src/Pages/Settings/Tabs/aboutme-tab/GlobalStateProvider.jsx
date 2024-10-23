import { createContext, useContext, useReducer, useEffect } from "react";
import useRequest from "../../../../Services/Hooks/useRequest/index";

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

  useEffect(() => {
    const { Request } = useRequest(); 

    const fetchData = async () => {
      try {
        const response = await Request("personal-info", "GET");

        if (response.data && response.data.data) {
          dispatch({ type: "SET_ABOUT", payload: response.data.data.about });
          dispatch({ type: "SET_EDUCATION", payload: response.data.data.education });
          dispatch({ type: "SET_OCCUPATION", payload: response.data.data.occupation });
          dispatch({ type: "SET_HOBBIES", payload: response.data.data.passions});
          dispatch({ type: "SET_COUNTRY", payload: response.data.data.loved_country });
          dispatch({ type: "SET_CITY", payload: response.data.data.loved_city });
          dispatch({ type: "SET_LANGUAGE", payload: response.data.data.loved_language });
          dispatch({ type: "SET_MEMORY", payload: response.data.data.memory });
          dispatch({ type: "SET_OPPORTUNITY", payload: response.data.data.problem_solving });
          dispatch({ type: "SET_PREDICTION", payload: response.data.data.prediction });

        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    if (!state.about) {
      fetchData(); 
    }
  }, [state.about, dispatch]); 

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

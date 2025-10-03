import { createContext, useContext, useReducer, useEffect } from "react";
import useRequest from "../../../../services/Hooks/useRequest/index";
import { useLanguage } from "../../../../services/reducers/LanguageContext";

const initialState = {
  about: "",
  education: "",
  occupation: "",
  hobbies: [],
  country: "",
  language: "",
  city: "",
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

const aboutStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isPersian = useLanguage();

  useEffect(() => {
    const { Request } = useRequest();

    const fetchData = async () => {
      try {
        const response = await Request("personal-info", "GET");

        if (response.data && response.data.data) {
          const data = response.data.data;

          const educationMap = {
            سیکل: { fa: "سیکل", en: "Cycle" },
            "مدرک دیپلم": { fa: "مدرک دیپلم", en: "Diploma" },
            "مدرک کاردانی": { fa: "مدرک کاردانی", en: "Associate degree" },
            "مدرک کارشناسی": { fa: "مدرک کارشناسی", en: "Bachelor's degree" },
            "مدرک کارشناسی ارشد": {
              fa: "مدرک کارشناسی ارشد",
              en: "Master's degree",
            },
            "مدرک PHD": { fa: "مدرک PHD", en: "PHD degree" },
            "مدرک فوق دکتری": {
              fa: "مدرک فوق دکتری",
              en: "Postdoctoral degree",
            },
            Cycle: { fa: "سیکل", en: "Cycle" },
            Diploma: { fa: "مدرک دیپلم", en: "Diploma" },
            "Associate degree": { fa: "مدرک کاردانی", en: "Associate degree" },
            "Bachelor's degree": {
              fa: "مدرک کارشناسی",
              en: "Bachelor's degree",
            },
            "Master's degree": {
              fa: "مدرک کارشناسی ارشد",
              en: "Master's degree",
            },
            "PHD degree": { fa: "مدرک PHD", en: "PHD degree" },
            "Postdoctoral degree": {
              fa: "مدرک فوق دکتری",
              en: "Postdoctoral degree",
            },
          };

          const translatedEducation =
            educationMap[data.education]?.[isPersian ? "fa" : "en"] ||
            data.education;

          dispatch({ type: "SET_ABOUT", payload: data.about });
          dispatch({ type: "SET_EDUCATION", payload: translatedEducation });
          dispatch({ type: "SET_OCCUPATION", payload: data.occupation });
          dispatch({ type: "SET_HOBBIES", payload: data.passions });
          dispatch({ type: "SET_COUNTRY", payload: data.loved_country });
          dispatch({ type: "SET_CITY", payload: data.loved_city });
          dispatch({ type: "SET_LANGUAGE", payload: data.loved_language });
          dispatch({ type: "SET_MEMORY", payload: data.memory });
          dispatch({ type: "SET_OPPORTUNITY", payload: data.problem_solving });
          dispatch({ type: "SET_PREDICTION", payload: data.prediction });
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    if (!state.about) {
      fetchData();
    }
  }, []);

  return (
    <aboutStateContext.Provider value={{ state, dispatch }}>
      {children}
    </aboutStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(aboutStateContext);
};

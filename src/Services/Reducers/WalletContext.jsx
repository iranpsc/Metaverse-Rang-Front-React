import { createContext, useEffect, useReducer } from "react";

export const WalletContext = createContext({});

export const WalletContextTypes = {
  ADD_WALLET: "ADD_WALLET",
  SUBTRACT_WALLET: "SUBTRACT_WALLET",
};

function convert(value) {
  if (!isNaN(value)) {
    return parseFloat(value);
  } else if (value.endsWith("K")) {
    return parseFloat(value) * 1000;
  } else if (value.endsWith("M")) {
    return parseFloat(value) * 1000000;
  }
  return parseFloat(value);
}

function reformat(value) {
  if (value >= 1000000) {
    return value / 1000000 + "M";
  } else if (value >= 1000) {
    return value / 1000 + "K";
  }
  return value;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "#d5d504":
      const newYellow = (
        convert(state.yellow) + convert(action.payload)
      ).toFixed(3);
      return {
        ...state,
        yellow: reformat(newYellow),
      };

    case "red":
      const newRed = (convert(state.red) + convert(action.payload)).toFixed(3);
      return {
        ...state,
        red: reformat(newRed),
      };

    case "blue":
      const newBlue = (convert(state.blue) + convert(action.payload)).toFixed(
        3
      );
      return {
        ...state,
        blue: reformat(newBlue),
      };

    case WalletContextTypes.ADD_WALLET:
      return action.payload;

    case WalletContextTypes.SUBTRACT_WALLET:
      const convertedSubtractAmount = convert(action.payload);
      const subtractedAmount = (
        convert(state[action.color]) - convertedSubtractAmount
      ).toFixed(3);
      return {
        ...state,
        [action.color]: reformat(subtractedAmount),
      };

    default:
      return state;
  }
};

export default function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    if (!children) {
      throw Error("You must use WalletContext provider...");
    }
  }, [children]);

  return (
    <WalletContext.Provider value={[state, dispatch]}>
      {children}
    </WalletContext.Provider>
  );
}

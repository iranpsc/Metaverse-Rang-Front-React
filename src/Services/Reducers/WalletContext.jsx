import { createContext, useEffect, useReducer } from "react";

export const WalletContext = createContext({});

export const WalletContextTypes = {
  ADD_WALLET: "ADD_WALLET",
  SUBTRACT_WALLET: "SUBTRACT_WALLET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "#d5d504":
      const newYellow = (
        parseFloat(state.yellow) + parseFloat(action.payload)
      ).toFixed(3);
      return {
        ...state,
        yellow: parseFloat(newYellow).toString(),
      };

    case "red":
      const newRed = (
        parseFloat(state.red) + parseFloat(action.payload)
      ).toFixed(3);
      return {
        ...state,
        red: parseFloat(newRed).toString(),
      };

    case "blue":
      const newBlue = (
        parseFloat(state.blue) + parseFloat(action.payload)
      ).toFixed(3);
      return {
        ...state,
        blue: parseFloat(newBlue).toString(),
      };

    case WalletContextTypes.ADD_WALLET:
      return action.payload;

    case WalletContextTypes.SUBTRACT_WALLET:
      const subtractedAmount = (
        parseFloat(state[action.color]) - parseFloat(action.payload)
      ).toFixed(3);
      return {
        ...state,
        [action.color]: parseFloat(subtractedAmount).toString(),
      };

    default:
      return state;
  }
};

export default function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    if (!children) {
      throw Error("You must use WalletContext provider ...");
    }
  }, [children]);

  return (
    <WalletContext.Provider value={[state, dispatch]}>
      {children}
    </WalletContext.Provider>
  );
}

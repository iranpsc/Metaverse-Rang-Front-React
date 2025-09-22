import { createContext, useEffect, useReducer } from 'react';

export const WalletContext = createContext({});

export const WalletContextTypes = {
    ADD_WALLET: "ADD_WALLET"
}

const reducer = (state, action) => {
    switch (action.type) {
        case WalletContextTypes.ADD_WALLET:
            return action.payload

        default:
            return state
    }
}

export default function WalletProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        if(!children) {
            throw Error('You must use WalletContext provider ...');
        }
    }, [children]);

    return (
        <WalletContext.Provider value={[state, dispatch]}>
            {children}
        </WalletContext.Provider>
    );
}


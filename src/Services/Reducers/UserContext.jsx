import { createContext, useEffect, useReducer } from 'react';
import { UserContextTypes } from '../actions/UserContextAction';


export const UserContext = createContext({});

const reducer = (state, action) => {
    switch (action.type) {
        case UserContextTypes.ADD_USER:
            const user = action?.payload?.user;
            return user

        default:
            return state
    }
}

export default function UserProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        if(!children) {
            throw Error('You must use UserContext provider ...');
        }
    }, [children]);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
}


import { createContext, useEffect, useState } from 'react';
import useRequest from '../Hooks/useRequest';

export const FollowContext = createContext({});

export default function FollowProvider({ children }) {
    const [state, dispatch] = useState([]);
    const { Request } = useRequest();
    useEffect(() => {
        if(!children) {
            throw Error('You must use FollowProvider provider ...');
        }
        
        if(state.length === 0) {
            Request('following').then((response) => {
                dispatch(response.data.data);
            });
        }

        window.Echo.channel('user-status').listen('.user-status-changed', (e) => {
            let changedPlayer = [];
            state.forEach(item => {
                if(item.id === e.data.id) {
                changedPlayer.push({...item, online: e.data.online});
                } else {
                changedPlayer.push(item);
                }
            });

            dispatch(changedPlayer);
        });

    }, [children, state.length]);

    return (
        <FollowContext.Provider value={[state, dispatch]}>
            {children}
        </FollowContext.Provider>
    );
}


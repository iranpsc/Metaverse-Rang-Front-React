import useAuth from '../Services/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PrivateRoute({ children }) {
    const { isLoggedIn } = useAuth();
    const navigation = useNavigate();
    const [components, setComponents] = useState();

    useEffect(() => {
        if(!isLoggedIn()) {
            return navigation('/metaverse/login');
        }

        setComponents(children)

    }, [isLoggedIn])


    return components ? components : <></>;
}

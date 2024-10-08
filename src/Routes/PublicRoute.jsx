import { useNavigate } from 'react-router-dom';
import useAuth from '../Services/Hooks/useAuth';

export default function PublicRoute({ children }) {
    const { isLoggedIn } = useAuth();
    const navigation = useNavigate();

    if(isLoggedIn()) {
        return navigation('/metaverse');
    }

    return children
}

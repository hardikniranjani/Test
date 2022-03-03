import {useAuth} from '../Login/Loginpage';
import { useHistory } from "react-router-dom";


export const RequireAuth = ({children}) =>{
    const Auth = useAuth();
    const history = useHistory();
    if(!Auth.user){
        return history.push("/login");
    }
    return children
}
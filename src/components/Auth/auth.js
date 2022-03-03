import {useState, useContext,createContext} from 'react';
import { auth} from '../../Firebase/config';
import { useHistory } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children}) =>{
    const [user, setUser] = useState();
    const history = useHistory();
    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            history.push("/");
        }).catch((error) => alert(error.message));
        setUser(email);
      }
    const logout =() =>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user , login , logout}}>{children}</AuthContext.Provider>
    )
}
export const userAuth = () =>{
    return useContext(AuthContext)
}
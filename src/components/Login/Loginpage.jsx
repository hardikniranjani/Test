import React,{ useState,useEffect, useContext,createContext } from 'react';
import { auth} from '../../Firebase/config';
import { useHistory } from "react-router-dom";

import './Login.css';
const AuthContext = createContext();
const Login = ({children}) => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            history.push("/dashboard");
            setUser("login")
            console.log(user);
        }).catch((error) => alert(error.message));
        
      }
      const logout =() =>{
        setUser(null);
    }
    useEffect(() => {
        return () => {
            signIn();
        };
    }, []);
    return (
        <>
        <section className="login">
            <form className="loginContainer">
                <input
                    type="email"
                    placeholder="Email"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="LoginBtn" type="submit" onClick={signIn}>Login</button>
            </form>
        </section>
         <AuthContext.Provider value={{user , logout}}>{children}</AuthContext.Provider>
         </>
    )
};

export default Login;
export const useAuth = () =>{
    return useContext(AuthContext)
}
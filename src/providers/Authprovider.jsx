/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,passowrd) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,passowrd);
    }
    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        } );
        return () => {
            return unsubscribe();
        }
    },[])

    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        logout
    };
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
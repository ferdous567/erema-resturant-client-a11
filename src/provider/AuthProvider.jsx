import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, 
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('Current user is', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    const values = {
        user,
        loading,
        googleSignIn,
        logOut,
        signInWithEmail,
        createUser
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, 
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import axios from "axios";

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

            // const userEmail = currentUser?.email || user?.email;
            // const loggedUser = {email: userEmail};

            setUser(currentUser);
            setLoading(false);

            // if(currentUser){
                
            //     axios.post('https://resturant-mgmt-server.vercel.app/jwt', loggedUser, {withCredentials: true})
            //     .then(res => {
            //         console.log('token response', res.data)
            //     })
            // }
            // else{
            //     axios.post('https://resturant-mgmt-server.vercel.app/logout', loggedUser, {
            //         withCredentials: true
            //     })
            //     .then(res => {
            //         console.log(res.data)
            //     })
            // }
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
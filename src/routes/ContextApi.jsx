import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../../firebase.config";

export const ContextAll = createContext(null)

const ContextApi = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)


    const UserCreate = async (email, password) => {
        setLoading(false)
        return await createUserWithEmailAndPassword(Auth, email, password)
    }

    const UserLogin = async (email, password) => {
        return await signInWithEmailAndPassword(Auth, email, password)
    }

    const UserUpdate = async (name, photo) => {
        return await updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () =>{
        return signInWithPopup(Auth,provider)
    }

    const UserLogout = () => {
        setLoading(false)
        return signOut(Auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            setLoading(true)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const value = { user, loading, UserCreate, UserLogin, UserUpdate , googleLogin , UserLogout }
    return (
        <ContextAll.Provider value={value}>{children}</ContextAll.Provider>
    );
};

export default ContextApi;
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()
    //create user with email & password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Email & password login
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // logout
    const logOut = () => {
        return signOut(auth);
    }
    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // const uid = currentUser.uid;
            console.log('from onAuthStateChange', currentUser);
            setUser(currentUser);

        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, setUser, createUser, loginWithEmailAndPassword, logInWithGoogle, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
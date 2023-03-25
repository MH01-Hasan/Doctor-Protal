import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../FireBase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    //---------------------------------------Creat User--...............----------------//
    const creatuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //---------------------------------------Login--...............----------------//
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    //---------------------------------------Obser--...............----------------//

    useEffect(() => {
        const unsuccribe = onAuthStateChanged(auth, Curentuser => {
            setUser(Curentuser)

        });
        return () => unsuccribe();

    }, [])
    //---------------------------------------Sing Out--...............----------------//
    const singout = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            });
    }

    const authInfo = {
        creatuser,
        login,
        singout,
        user


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
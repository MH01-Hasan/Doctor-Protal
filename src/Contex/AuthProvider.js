import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FireBase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const provider = new GoogleAuthProvider();


    //---------------------------------------Creat User--...............----------------//
    const creatuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //---------------------------------------Update User/Set Dispaly Name--...............----------------//

    const updateUser = (userinfo) => {
        return updateProfile(auth.currentUser, userinfo)


    }
    //---------------------------------------Google Login--...............----------------//

    const singgoogle = () => {
        return signInWithPopup(auth, provider)
            .then((result) => {


            }).catch((error) => {


            });



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
        user,
        updateUser,
        singgoogle


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
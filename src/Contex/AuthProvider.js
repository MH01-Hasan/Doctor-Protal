import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FireBase/firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState('');
    const [loding, setLoding] = useState(true)





    //---------------------------------------Creat User--...............----------------//
    const creatuser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //---------------------------------------Update User/Set Dispaly Name--...............----------------//

    const updateUser = (userinfo) => {
        return updateProfile(auth.currentUser, userinfo)


    }
    //---------------------------------------Google Login--...............----------------//

    const singgoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, provider)
            .then((result) => {




            }).catch((error) => {


            });



    }
    //---------------------------------------Login--...............----------------//
    const login = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    //---------------------------------------Obser--...............----------------//

    useEffect(() => {
        const unsuccribe = onAuthStateChanged(auth, Curentuser => {
            setUser(Curentuser)
            setLoding(false)

        });
        return () => unsuccribe();

    }, [])
    //---------------------------------------Sing Out--...............----------------//
    const singout = () => {
        setLoding(true)
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
        loding,
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
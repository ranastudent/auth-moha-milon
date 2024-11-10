import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


export const AuthContext = createContext(null)
            const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)
      const createUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const signInUser = (email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }
      const signOutUser = ()=>{
            setLoading(true)
            return signOut(auth)
      }
      const signInWithGoogle = ()=>{
            return signInWithPopup(auth, googleProvider)
      }

     useEffect(()=>{
           const unSubscribed = onAuthStateChanged(auth, currentUser => {
                  console.log('currentUser', currentUser)
                  setUser(currentUser)
                  setLoading(false)
            })
            return ()=>{
                  unSubscribed()
            }
     },[])


     const name = 'alu mia'
      const authInfo = {
            name,
            user,
            loading,
            createUser,
            signInUser,
            signOutUser,
            signInWithGoogle,

      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Authentication/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider= new GoogleAuthProvider()

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   update profile
  const update = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };
//   sign in with google
const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,provider);
}
  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log("current User",currentUser);
        setLoading(false)
    })
    return()=>{
        return unSubscribe()
    }
},[])


  const authinfo = {
    user,
    loading,
    createUser,
    signIn,
    update,
    logOut,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

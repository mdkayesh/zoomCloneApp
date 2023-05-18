import { createContext, useContext, useEffect, useReducer } from "react";
import authReducer from "./AuthContextReducer";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const AuthContext = createContext();
// initial values

const initialValues = {
  currentUser: null,
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "GET_CURRENT_USER", payload: user });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = async () => {
    const res = await signOut(auth);
    console.log(res);
  };

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, logOut, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };

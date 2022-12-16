import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
const authContext = createContext();

/**
 * If the context is not passed, throw an error, otherwise return the context. */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("No me pasaste el context ,crack");
  } else {
    return context;
  }
};

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [firestore, setFirestore] = useState("");
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    const userSession = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser("");
      } else {
        setUser(currentUser.email);
        setUserName(currentUser.displayName);
        setId(currentUser.uid);
      }
    });
    return () => userSession();
  }, []);

  const register = async (username, email, password, rol = "user") => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user.email;
      console.log(user);
      const docRef = doc(db, `users/${response.user.uid}`);
      setDoc(docRef, {
        username: username,
        email: email,
        rol: rol,
        id: response.user.uid
      });
      setError("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  async function getRole(uid) {
    const docRef = doc(db, `users/${uid}`);
    const data = await getDoc(docRef);
    const dataRole = data.data();
    localStorage.setItem("role", dataRole.rol || "user");
    localStorage.setItem("username", dataRole.username);
  }
  async function setRoleDb(uid, admin) {
    const docRef = doc(db, `users/${uid}`);
    setDoc(
      docRef,
      {
        rol: admin,
      },
      { merge: true }
    );
  }
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      getRole(response.user.uid);
      setError("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const googleAuth = async () => {
    const google = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, google);
    console.log(response.user.email);
    navigate("/");
  };
  const logout = async () => {
    localStorage.removeItem("role");
    const response = await signOut(auth);
    console.log(response);
    setUser("");
  };
  const resetPassword = async (email) => {
    try {
      const response = await sendPasswordResetEmail(auth, email);
      const user = response.user;
      console.log(user);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const getAllUsers = async () => {
    const data = await getDocs(collection(db, "users"));
    
  }
  return (
    <authContext.Provider
      value={{
        register,
        login,
        error,
        user,
        userName,
        googleAuth,
        logout,
        resetPassword,
        setRoleDb,
        id,
        getAllUsers
      }}
    >
      {children}
    </authContext.Provider>
  );
}

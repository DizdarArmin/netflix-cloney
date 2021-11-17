import { useContext, createContext, useState, useEffect } from "react";

import { getCurrentUser } from "../scripts/authentication";
import { authInstance } from "../scripts/firebase";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [courses, setCourses] = useState(Array);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
    const unsubscribe = authInstance.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    userData,
    setUserData,
    courses,
    setCourses,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

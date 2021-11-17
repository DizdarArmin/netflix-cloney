import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";

const firebaseConfiguration = {
  apiKey: "AIzaSyDF66MVoEzv6sHGpyCGJng70YfpgYyv0GQ",
  authDomain: "netflix-cloney.firebaseapp.com",
  projectId: "netflix-cloney",
  storageBucket: "netflix-cloney.appspot.com",
  messagingSenderId: "835237652161",
  appId: "1:835237652161:web:da1d9447db8afbcc745640",
};

export const firebaseInstance = initializeApp(firebaseConfiguration);

export const authInstance = getAuth(firebaseInstance);
export const fireStoreInstance = getFirestore(firebaseInstance);
export const storage = getStorage(firebaseInstance);

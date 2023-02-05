import { initializeApp } from "firebase/app";
import { firebaseConfigDEVELOP } from "./firebaseDEVELOP";
import { firebaseConfigPROD } from "./firebasePROD";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const getFirebaseApp = () =>
  process.env.REACT_APP_ENV === "production"
    ? firebaseConfigPROD
    : firebaseConfigDEVELOP;
export const personnalCollectionKey = () => {
    const proces = process.env.REACT_APP_ENV 
    const prod = process.env.REACT_APP_PORTFOLIO_COLLECTION_KEY_PROD;
    const develop = process.env.REACT_APP_PORTFOLIO_COLLECTION_KEY_DEVELOP;
  return proces === "production"
    ? prod
    : develop;
};

export const app = initializeApp(getFirebaseApp());
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore();

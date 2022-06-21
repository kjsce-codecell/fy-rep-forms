import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

export const Firebase = initializeApp(firebaseConfig);
export const database = getFirestore();

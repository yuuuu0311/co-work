// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEqeuvRW2OEUTWFDsjYGjYOOTOVUK9Tw",
  authDomain: "coworkgroup1.firebaseapp.com",
  projectId: "coworkgroup1",
  storageBucket: "coworkgroup1.appspot.com",
  messagingSenderId: "260456759499",
  appId: "1:260456759499:web:88b820bbc00306230a1b4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

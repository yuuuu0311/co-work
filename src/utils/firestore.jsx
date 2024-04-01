// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Ddqor8cqHyxUHYtdsChuax7ibBzCnHg",
  authDomain: "co-work-d9ba7.firebaseapp.com",
  projectId: "co-work-d9ba7",
  storageBucket: "co-work-d9ba7.appspot.com",
  messagingSenderId: "590381400399",
  appId: "1:590381400399:web:d2bae3ca2bd9a98e6bc53a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-43fc1.firebaseapp.com",
  projectId: "real-estate-43fc1",
  storageBucket: "real-estate-43fc1.appspot.com",
  messagingSenderId: "603739715501",
  appId: "1:603739715501:web:38cb426a96b4b37b8b5324",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

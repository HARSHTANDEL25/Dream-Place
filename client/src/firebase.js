// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-fed3e.firebaseapp.com",
  projectId: "mern-estate-fed3e",
  storageBucket: "mern-estate-fed3e.appspot.com",
  messagingSenderId: "938001938562",
  appId: "1:938001938562:web:2d4ecd063ba89e42129c9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
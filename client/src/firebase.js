// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gopiestate-c9fcc.firebaseapp.com",
  projectId: "gopiestate-c9fcc",
  storageBucket: "gopiestate-c9fcc.appspot.com",
  messagingSenderId: "932307647669",
  appId: "1:932307647669:web:4b4f3d95051d23dcac52fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
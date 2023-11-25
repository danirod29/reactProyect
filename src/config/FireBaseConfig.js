// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOd8xr83QBZEtgZj5mmXSjJYdwqa7wTVY",
  authDomain: "horario-28282.firebaseapp.com",
  projectId: "horario-28282",
  storageBucket: "horario-28282.appspot.com",
  messagingSenderId: "688598704423",
  appId: "1:688598704423:web:cce88911f9d00ac4ec0902",
  measurementId: "G-ZN3DPNYXHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
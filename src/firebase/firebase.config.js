// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9g_4tDBQQyohPGtGmSqSeo7L9X7qmZ-k",
  authDomain: "craftyfiber.firebaseapp.com",
  projectId: "craftyfiber",
  storageBucket: "craftyfiber.appspot.com",
  messagingSenderId: "915559206573",
  appId: "1:915559206573:web:0532554f1e70f311d40024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

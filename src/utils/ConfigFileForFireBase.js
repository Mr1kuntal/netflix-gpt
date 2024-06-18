// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY ,
  authDomain: "testproject-b7b93.firebaseapp.com",
  projectId: "testproject-b7b93",
  storageBucket: "testproject-b7b93.appspot.com",
  messagingSenderId: "839683636504",
  appId: "1:839683636504:web:5eb41cda4bfcf15414326d",
  measurementId: "G-6B9HRRZFEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();



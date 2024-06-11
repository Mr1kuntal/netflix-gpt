// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPZadIOv3p7iIg-jFRTACfBMz01jQPXy0",
  authDomain: "netflixgpt-a966f.firebaseapp.com",
  projectId: "netflixgpt-a966f",
  storageBucket: "netflixgpt-a966f.appspot.com",
  messagingSenderId: "973677987308",
  appId: "1:973677987308:web:a021bd69b91d3b3889ecc9",
  measurementId: "G-3HC9X8Z5B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
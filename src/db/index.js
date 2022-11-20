// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIwvuxr0Tt3MhYe4m4H7rH0iRebY0jPrA",
  authDomain: "travelpack-c2d9e.firebaseapp.com",
  projectId: "travelpack-c2d9e",
  storageBucket: "travelpack-c2d9e.appspot.com",
  messagingSenderId: "1018371128632",
  appId: "1:1018371128632:web:9c50d1cc368f3901bb55cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtzNq1nzCqlVnMzYPVYKn3LVt1VdGvKO4",
  authDomain: "travel-7e5f8.firebaseapp.com",
  projectId: "travel-7e5f8",
  storageBucket: "travel-7e5f8.appspot.com",
  messagingSenderId: "183831899669",
  appId: "1:183831899669:web:4e74e697664c086397e81c",
  measurementId: "G-2FS5VS0EVL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
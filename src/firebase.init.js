// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHV-FhXX4C3vcDSTx_TOxoQUSnFb7Jwc",
  authDomain: "auth-moha-milon-8de59.firebaseapp.com",
  projectId: "auth-moha-milon-8de59",
  storageBucket: "auth-moha-milon-8de59.firebasestorage.app",
  messagingSenderId: "216309824022",
  appId: "1:216309824022:web:7742b7581f8e430b951337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3qQIwInoRLxW8l4nAeIUlPmxxIaw4Acc",
  authDomain: "netflix-react-4a3d0.firebaseapp.com",
  projectId: "netflix-react-4a3d0",
  storageBucket: "netflix-react-4a3d0.appspot.com",
  messagingSenderId: "230337804469",
  appId: "1:230337804469:web:8026532330fc589568a6fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);

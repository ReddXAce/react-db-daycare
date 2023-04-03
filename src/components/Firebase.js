// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAjyHJ4nWeKfTdN_ml5TROixMzwOOxYso",
  authDomain: "daycare-sys.firebaseapp.com",
  projectId: "daycare-sys",
  storageBucket: "daycare-sys.appspot.com",
  messagingSenderId: "514239851472",
  appId: "1:514239851472:web:0d19b79cb3090fe9fa67d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
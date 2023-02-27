// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSwJ0IW47BfeAQ9achYLs1YOtqxs0UXb0",
  authDomain: "ac-personal-blog.firebaseapp.com",
  projectId: "ac-personal-blog",
  storageBucket: "ac-personal-blog.appspot.com",
  messagingSenderId: "1044636902840",
  appId: "1:1044636902840:web:2baf13354733a6ce145b4d",
  measurementId: "G-PM8K02S74R"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };

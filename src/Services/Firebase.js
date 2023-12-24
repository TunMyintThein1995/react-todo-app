// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider, OAuthProvider } from "@firebase/auth";
import { getStorage } from "@firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAzDwHHCL0tkhX2ARWv1I_MedQwP1zlqM",
  authDomain: "react-todo-app-a9703.firebaseapp.com",
  projectId: "react-todo-app-a9703",
  storageBucket: "react-todo-app-a9703.appspot.com",
  messagingSenderId: "682446203716",
  appId: "1:682446203716:web:a88638296ac4c21650c511",
  measurementId: "G-MS2Y4PYZBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

// Authentication
const authDb = getAuth(app);

// Storage
const storageDb = getStorage(app);

// Provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');


// export
export { authDb, firestoreDb, storageDb, googleProvider, facebookProvider, twitterProvider, githubProvider, microsoftProvider };
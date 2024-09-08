// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyABMvNaJNH-y5StuEzBlIzqWZ5qLl0KOQw",
  authDomain: "auth-crud-79255.firebaseapp.com",
  projectId: "auth-crud-79255",
  storageBucket: "auth-crud-79255.appspot.com",
  messagingSenderId: "26099071911",
  appId: "1:26099071911:web:a4af0099ae755185f79482",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage };

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvTKpswkhW70g93-4C7WEueput3H5wk7I",
  authDomain: "amin-clothing-db-61bfa.firebaseapp.com",
  projectId: "amin-clothing-db-61bfa",
  storageBucket: "amin-clothing-db-61bfa.appspot.com",
  messagingSenderId: "1034829440933",
  appId: "1:1034829440933:web:d5e699504f32d8c19c2a4c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

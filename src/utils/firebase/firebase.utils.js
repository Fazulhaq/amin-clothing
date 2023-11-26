import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvTKpswkhW70g93-4C7WEueput3H5wk7I",
  authDomain: "amin-clothing-db-61bfa.firebaseapp.com",
  projectId: "amin-clothing-db-61bfa",
  storageBucket: "amin-clothing-db-61bfa.appspot.com",
  messagingSenderId: "1034829440933",
  appId: "1:1034829440933:web:d5e699504f32d8c19c2a4c",
};

const firebaseApp = initializeApp(firebaseConfig);

const googelProvider = new GoogleAuthProvider();
googelProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googelProvider);

export const db = getFirestore();

export const createUserDocumentFrom = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocumentRef = doc(db, "users", userAuth.uid);
  const userDataSnapshot = await getDoc(userDocumentRef);

  if (!userDataSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocumentRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user.", error.message);
    }
  }
  return userDocumentRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callBack) =>
  onAuthStateChanged(auth, callBack);

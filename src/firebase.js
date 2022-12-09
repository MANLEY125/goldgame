import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQgf00NuiUptnr4i_SnLG8SR6re6FhxHA",
  authDomain: "goldgame-1d980.firebaseapp.com",
  projectId: "goldgame-1d980",
  storageBucket: "goldgame-1d980.appspot.com",
  messagingSenderId: "799498169015",
  appId: "1:799498169015:web:b83ec8ddf61950cabc7b32",
  measurementId: "G-3KYT1CPH0N",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

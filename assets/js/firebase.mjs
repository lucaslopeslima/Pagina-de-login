import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from './fireKey.mjs'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let colecao = 'teste'
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
console.log(db)

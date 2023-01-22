console.log('firebase On')
import { firebaseConfig } from './fireKey.mjs';

/* import { firebaseConfig } from './fireKey.mjs';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; */
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

/* const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); */




/* 
//Criar Usuário
//const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//Logar Usuário
//const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

 */
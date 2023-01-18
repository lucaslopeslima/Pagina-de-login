import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from './fireKey.mjs'
console.log('Firebase ON')

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
console.log(db)




/* Cadastrar novos usuários */

//Quando um usuário preencher o formulário
//Valide o endereço de e - mail e a senha fornecidos pelo usuário
//passe - os para o método createUserWithEmailAndPassword

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });


/* Entrar usuários existentes */
  
//Crie um formulário que permita que os usuários existentes entrem usando seu endereço de e-mail e senha.
//Quando um usuário preencher o formulário, chame o método signInWithEmailAndPassword

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
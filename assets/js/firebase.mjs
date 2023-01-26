console.log('firebase On')
import { firebaseConfig } from './fireKey.mjs';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth();
//Create User
const createUserBtn = document.querySelector('.create-btn')
const newUserName = document.querySelector('#create-user')
const newUserPassword = document.querySelector('#create-password')
const confirmPassword = document.querySelector('#confirm-password')
//Log In User
const logarAcc = document.querySelector('.logar-btn')
const logUser = document.querySelector('#user')
const logPwd = document.querySelector('#password')



function createNewUser() {
  console.log("iniciando criação de usuário...")
  let email = newUserName.value
  let password = newUserPassword.value
  let password2 = confirmPassword.value
  if (validateNewUser(email, password, password2)) {
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
      console.log('Usuario criado com sucesso')
      alert('Usuario criado com sucesso.')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
    return
  }
  console.log("Validação reprovada")
  return
  
}


function logInUser() {
  console.log("iniciando login...")
  let logUserI = logUser.value
  let logPwdI = logPwd.value
  //console.log(logUserI)
  //console.log(logPwdI)
  //console.log(validateEmail(logUserI))
  //console.log(validatePassword(logPwdI))
  if (validadeLogIn(logUserI, logPwdI)) {
    auth.signInWithEmailAndPassword(logUserI, logPwdI)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log('Login bem sucedido')
      rememberUser()
      alert('Vc logou com sucesso.')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Login falhou. Usuário ou senha incorretos.")
    });
    return
  }
  console.log("Login falhou")
  return
  
}


createUserBtn.addEventListener('click', createNewUser)

logarAcc.addEventListener('click', logInUser)



/* logarAcc.addEventListener('click', () => {
  console.log("iniciando login...")
  console.log(logUser)
  console.log(validateEmail(logUser))
  console.log(logPwd)
  console.log(validatePassword(logPwd))
  
  if (validateEmail(logUser)&&validatePassword(logPwd)) {
    auth.signInWithEmailAndPassword(logUser, logPwd)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log('Login bem sucedido')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  console.log("Login falhou")
  return
}) */







/* let string = 'hello world'
function hello(prop) {
  console.log(prop)
  console.log('prop 2')
}
logarAcc.addEventListener('click', hello(string)) */








/* const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); */

//npm install firebase


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
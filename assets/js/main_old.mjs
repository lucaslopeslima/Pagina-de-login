console.log('main JS on')

let user
let password

///////Handle Buttons ///////

const singMode = document.querySelectorAll('.mode')
const singIn = document.querySelector('#sing-in')
const singInContent = document.querySelector('.sing-in-content')
const singUp = document.querySelector('#sing-up')
const singUpContent = document.querySelector('.sing-up-content')
const dontHaveAcc = document.querySelector('.dont-have-acc')
//console.log(singMode)
singIn.addEventListener('click', () => {
    singUp.className = singUp.className.replace('mode-active', '')
    singIn.className += ' mode-active'
    singUpContent.style.display = 'none'
    singInContent.style.display = 'block'
    singInContent.style.opacity = '1'
    singInContent.style.animation = 'none'
    /* singUpContent.style.visibility = 'hidden'
    singInContent.style.visibility = 'visible' */
    
    
})
singUp.addEventListener('click', () => {
    singIn.className = singUp.className.replace('mode-active', '')
    singUp.className += ' mode-active'
    singInContent.style.display = 'none'
    singUpContent.style.display = 'block'
    singUpContent.style.opacity = '1'
    singUpContent.style.animation = 'none'
    /* singInContent.style.visibility = 'hidden'
    singUpContent.style.visibility = 'visible' */
})
dontHaveAcc.addEventListener('click', () => {
    singIn.className = singUp.className.replace('mode-active', '')
    singUp.className += ' mode-active'
    singInContent.style.display = 'none'
    singUpContent.style.display = 'block'
    singUpContent.style.opacity = '1'
    singUpContent.style.animation = 'none'
    /* singInContent.style.visibility = 'hidden'
    singUpContent.style.visibility = 'visible' */
})



/* for (let i = 0; i < singMode.length; i++){
    singMode[i].addEventListener('click', ()=>{
        let currentActiveMode = document.querySelectorAll('.mode-active')
        currentActiveMode[0].className = currentActiveMode[0].className.replace('mode-active', '')
        this.className += ' mode-active'
        console.log(this)
    })
} */


//Remember user////////////////////////////////////
const sphereToggle = document.querySelector('.remember-user-name')
const inputEmail = document.querySelector('#user')
inputEmail.value = localStorage.getItem('userName')
if (localStorage.getItem('userName')) {
    sphereToggle.className += ' remember-user-name-active'
}
function rememberUser() {
    if (sphereToggle.classList.contains('remember-user-name-active')) {
        //console.log('tem remember-user-name-active')
        localStorage.setItem('userName', inputEmail.value);
    }
}
//rememberUser()
sphereToggle.addEventListener('click', () => {
    sphereToggle.classList.toggle('remember-user-name-active')
})
const logarBtn = document.querySelector('.logar-btn')
//const inputEmail = document.querySelector('#user')
//inputEmail.value = localStorage.getItem('userName')
/* logarBtn.addEventListener('click', () => {
    if (sphereToggle.classList.contains('remember-user-name-active')) {
        //console.log('tem remember-user-name-active')
        localStorage.setItem('userName', inputEmail.value);
    }
    else {
        //console.log('não tem remember-user-name-active')
    }
}) */

//Create User //////////////////////////////////////
const createUserBtn = document.querySelector('.create-btn')
const newUserName = document.querySelector('#create-user')
const newUserPassword = document.querySelector('#create-password')
const confirmPassword = document.querySelector('#confirm-password')
createUserBtn.addEventListener('click', createUser)
function createUser(e) {
    if (newUserName.value.length == 0 || newUserPassword.value.length == 0) {
        console.log('Por favor insira os dados.')
        alert('Por favor insira os dados.')
        return
    }
    if (validateEmail(newUserName.value) == false) {
        console.log('email invalido')
        alert('email invalido')
        return
    }
    if (verifyPassword() == false) {
        console.log('Senhas não são iguais')
        alert('Senhas não são iguais')
        return
    }
    console.log('Usuário criado com sucesso')
    alert('Usuário criado com sucesso')
    user = newUserName.value
    password = newUserPassword.value

    //e.preventDefault() 
}
function verifyPassword() {
    if (newUserPassword.value !== confirmPassword.value) {
      return false  
    }
}


//Log User /////////////////////////////////////////
const logarAcc = document.querySelector('.logar-btn')
const logUser = document.querySelector('#user')
const logPwd = document.querySelector('#password')

logarAcc.addEventListener('click', (e) => {
    if (logUser.value.length == 0 || logPwd.value.length == 0) {
        console.log('Entre com um usuário e uma senha')
        alert('Entre com um usuário e uma senha')
        return
    }
    if (validateEmail(logUser.value) == false) {
        console.log('email invalido')
        alert('email invalido')
        return
    }
    if (user != undefined && password != undefined && logUser.value === user && logPwd.value === password){
        console.log('vc logou')
        rememberUser()
        alert('vc logou')
        return
    }
    console.log('Usuário ou senha incorretos.')
    alert('Usuário ou senha incorretos.')

    //e.preventDefault()
})


//Validate fileds////////////////////////////////////
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

/* newUserName.addEventListener('change', () => {
    console.log(validateEmail(newUserName.value))
    if (validateEmail(newUserName.value) == true) {
        console.log('email valido')
    }
}) */



/* const requiredFields = document.querySelectorAll('[required]')
console.log(requiredFields)
function validateFields() {
    requiredFields.forEach((field) => {
        console.log(field)
        field.addEventListener('onchange', () => {
            if (!field) {
                console.log('campo invalido')
            } else if (validateEmail(newUserName)) {
                console.log('campo valido')
            }
        })
    })
} */
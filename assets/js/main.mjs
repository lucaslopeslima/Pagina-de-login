console.log('JS on')

///////Handle Buttons ///////

const singMode = document.querySelectorAll('.mode')
const singIn = document.querySelector('#sing-in')
const singUp = document.querySelector('#sing-up')
console.log(singMode)
singIn.addEventListener('click', () => {
    singUp.className = singUp.className.replace('mode-active', '')
    singIn.className += ' mode-active'
})
singUp.addEventListener('click', () => {
    singIn.className = singUp.className.replace('mode-active', '')
    singUp.className += ' mode-active'
})



/* for (let i = 0; i < singMode.length; i++){
    singMode[i].addEventListener('click', ()=>{
        let currentActiveMode = document.querySelectorAll('.mode-active')
        currentActiveMode[0].className = currentActiveMode[0].className.replace('mode-active', '')
        this.className += ' mode-active'
        console.log(this)
    })
} */


//Remember user
const sphereToggle = document.querySelector('.remember-user-name')
//console.log(sphereToggle)
sphereToggle.addEventListener('click', () => {
    sphereToggle.classList.toggle('remember-user-name-active')
})
//////////////
const logarBtn = document.querySelector('.logar-btn')
const inputEmail = document.querySelector('#email')
inputEmail.value = localStorage.getItem('userName')
//console.log(inputEmail)
//console.log(logarBtn)
logarBtn.addEventListener('click', () => {
    //console.log(sphereToggle.classList)
    if (sphereToggle.classList.contains('remember-user-name-active')) {
        //console.log('tem remember-user-name-active')
        localStorage.setItem('userName', inputEmail.value);
    }
    else {
        //console.log('não tem remember-user-name-active')
    }
})
console.log('handleButtons ON')

///////Handle Buttons ///////

const singMode = document.querySelectorAll('.mode')
const singIn = document.querySelector('#sing-in')
const singInContent = document.querySelector('.sing-in-content')
const singUp = document.querySelector('#sing-up')
const singUpContent = document.querySelector('.sing-up-content')
const dontHaveAcc = document.querySelector('.dont-have-acc')
console.log(singMode)

function handleMode() {
    for (let i = 0; i < singMode.length; i++){
        singMode[i].addEventListener('click', function(){
            let currentActiveMode = document.querySelectorAll('.mode-active')
            currentActiveMode[0].className = currentActiveMode[0].className.replace('mode-active', '')
            this.className += ' mode-active'
            console.log('currentActiveMode',currentActiveMode)
            console.log('this', this) //o This não funciona em arrowfunction

            //Alternar o conteúdo de cada this
            
            
        })
    }

    

}
handleMode()


/* dontHaveAcc.addEventListener('click', () => {
    singIn.className = singUp.className.replace('mode-active', '')
    singUp.className += ' mode-active'
    singInContent.style.display = 'none'
    singUpContent.style.display = 'block'
    singUpContent.style.opacity = '1'
    singUpContent.style.animation = 'none'
}) */





/*
singIn.addEventListener('click', () => {
    singUp.className = singUp.className.replace('mode-active', '')
    singIn.className += ' mode-active'
    singUpContent.style.display = 'none'
    singInContent.style.display = 'block'
    singInContent.style.opacity = '1'
    singInContent.style.animation = 'none' 
})
singUp.addEventListener('click', () => {
    singIn.className = singUp.className.replace('mode-active', '')
    singUp.className += ' mode-active'
    singInContent.style.display = 'none'
    singUpContent.style.display = 'block'
    singUpContent.style.opacity = '1'
    singUpContent.style.animation = 'none'
})
dontHaveAcc.addEventListener('click', () => {
    singIn.className = singUp.className.replace('mode-active', '')
    singUp.className += ' mode-active'
    singInContent.style.display = 'none'
    singUpContent.style.display = 'block'
    singUpContent.style.opacity = '1'
    singUpContent.style.animation = 'none'
})
*/
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


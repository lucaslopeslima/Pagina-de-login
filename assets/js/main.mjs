console.log('JS on')

///////Handle Buttons ///////
const sphereToggle = document.querySelector('.remember-user-name')
//console.log(sphereToggle)
sphereToggle.addEventListener('click', () => {
    sphereToggle.classList.toggle('remember-user-name-active')
})

const logarBtn = document.querySelector('.logar-btn')
const inputEmail = document.querySelector('#email')
inputEmail.value = localStorage.getItem('userName')
//console.log(inputEmail)
//console.log(logarBtn)
logarBtn.addEventListener('click', () => {
    console.log(sphereToggle.classList)
    if (sphereToggle.classList.contains('remember-user-name-active')) {
        console.log('tem remember-user-name-active')
        localStorage.setItem('userName', inputEmail.value);
    }
    else {
        console.log('não tem remember-user-name-active')
    }
})
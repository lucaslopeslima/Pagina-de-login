console.log('JS on')

///////Handle Buttons ///////
const sphereToggle = document.querySelector('.remember-user-name')
console.log(sphereToggle)
sphereToggle.addEventListener('click', () => {
    sphereToggle.classList.toggle('remember-user-name-active')
})
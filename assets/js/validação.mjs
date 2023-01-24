console.log('validação ON')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    if (password.map.lenght < 6) {
        return false
    }
    return true
}
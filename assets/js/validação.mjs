console.log('validação ON')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    if (password.length < 6) {
        return false
    }
    return true
}

function validateNewUser(user, password1, password2) {
    if (validateEmail(user) == false) {
        return false
    } if (validatePassword(password1) == true) {
        if (validatePassword(password2) == true) {
            if (password1 !== password2) {
                return false
            }
            return true
        }
    } 

}
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

function validateNewUser(email, password1, password2) {
    if (validateEmail(email) == true) {
        if (validatePassword(password1) == true) {
            if (validatePassword(password2) == true) {
                if (password1 === password2) {
                    console.log('Validação de novo usuario completa')
                    return true
                }
                console.log('Senhas devem ser iguais')
                return false                
            }
            console.log('Senha 2 deve ter pelo menos 6 digitos')
            return false
        } 
        console.log('Senha 1 deve ter pelo menos 6 digitos')
        return false
    }
    console.log('Email Invalido')
    return false
}


let email = 'lucas@gmail.com'
let psw1 = '123456'
let psw2 = '123467'

validateNewUser(email, psw1, psw2)

/**
 
 
 function validateNewUser (email, pass, pass2){
  if(!validateEmail(email)) {
    console.log('msg de erro')
    return false
  }
  {...}
  if(!validateX(X)){
    console.log('msg') 
    return false
  }
  return true
} 

if(true) console.log('é verdadeiro')
if(!true) console.log('é falso, vou aparecer')

const valorTrue = true;
const valorFalse = false;

if(valorTrue) console.log('é verdadeiro, vou aparecer')
if(!valorTrue) console.log('é falso, não vou aparecer')

if(valorFalse) console.log('é falso, não vou aparecer')
if(!valorFalse) console.log('é verdadeiro, vou aparecer')



 */
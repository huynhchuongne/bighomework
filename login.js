var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirm = document.querySelector('#confirm')
var form = document.querySelector('form')

function showError (input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess (input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError (listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value){
            isEmptyError = true;
            showError(input, 'Khong duoc de trong')
        }
        else{
            showSuccess(input)
        }
    });
    return isEmptyError
}

function checkLength (input, min ,max){
    input.value = input.value.trim()

    if (input.value.length < min){
        showError(input, `Phai co it nhat ${min} ky tu`)
        return true
    }

    if (input.value.length > max){
        showError(input, `Khong duoc qua  ${max} ky tu`)
        return true
    }
    return false
}

function checkMathPassword (cpassword, cfpassword){
    if (cpassword.value != cfpassword.value){
        showError(cfpassword, 'Mat khau khong trung khop')
        return true
    }
    return false
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([username, email, password, confirm])
    let isUsernameLength = checkLength(username, 5, 10)
    let isPasswordLength = checkLength(password, 5, 10)
    let isConfirmLength = checkLength(confirm, 5, 10)
    let isMathPassword = checkMathPassword(password, confirm)
})


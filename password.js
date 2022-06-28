// create a variable called password and set it equal to a string of your choice
//write a conditional statement to check if the password meets the constraints of having at least 10 charachters long and contains at least one letter and one number. 
//If the password meets the constraint, console log a success message.
//If the password fails the constraint, console log a failure message.

let password = `PassWord445`

if (( password.length > 9) && /[a-zA-Z]/.test(password) === true && /[0-9]/.test(password) === true) {
    console.log('Success!')
} else {
    console.log('Your password does not meet standards. Try Again.')
}


//Additional Checks 
//Create 2 additoinal checks on the password :
// 1. contains at least one special character
// /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\.test(password) === true
//2. Does not have any spaces
// pasword.contains(" ") === false

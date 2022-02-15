const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // Get the values from the inputs
    const emailValue = email.value
    const passwordValue = password.value
    const confirmPasswordValue = confirmPassword.value
    const checkboxValue = checkbox.value

    if (emailValue === "") {
        // Show error
        // Add error Class
        setErrorFor(email, "O email deve ser preenchido.")
    } else if (!isEmail(emailValue) ) {
        setErrorFor(email, "Por favor, insira um email válido.")
    } else {
        //Set sucesss class
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "Por favor informe sua senha.")
    } else if(passwordValue < 8) {
        setErrorFor(password, "Sua senha deve ter mais de 8 caracteres")
        } else {
        setSuccessFor(password)
    }

    if (confirmPasswordValue === "") {
        setErrorFor(confirmPassword, "Por favor confirme a sua senha.")
    } else if(confirmPasswordValue !== passwordValue) {
        setErrorFor(password, "Senhas diferentes!")
    }{
        setSuccessFor(confirmPassword)
    }

    if (checkboxValue === false) {
        setErrorFor(checkbox, "Marque a checkbox para continuar.")
    } else {
        setSuccessFor(checkbox)
    }

}

function setErrorFor(input, message) {
    formControl = input.parentElement; //form-control
    const span = formControl.querySelector("span")

    //add error message inside span
    span.innerText = message

    //add error class
    formControl.className = "form-control error" 
}

function setSuccessFor(input) {
    formControl = input.parentElement; //form-control
    formControl.className = "form-control success"
}

function isEmail(email) {

}
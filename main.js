const form = document.getElementById("form")
let i = 0

form.addEventListener("submit", event => {
    event.preventDefault()
    //     // Email Inválido
    //     function customMessage(typeError) {
    //     const messages = {
    //         text: {
    //             valueMissing: "Por favor, preencha este campo"
    //         },
    //         email: {
    //             valueMissing: "Email é obrigatório",
    //             typeMismatch: "Por favor, preencha um email válido"
    //         }
    //     }
        
    //     return messages[typeError]
    //     }
        
    // Validação da Senha
    function passwordValidation() {  
        let password = document.getElementById("password").value;  
        // Checkar se o campo está vazio  
        if(password == "") {  
            document.getElementById("error").innerHTML = "A senha precisa ser preenchida!";
            return false;  
        } else if(password.length < 8) {   
            document.getElementById("error").innerHTML = "Este campo precisa ter mais do que 8 caracteres";
            return false;
        } else {
            document.getElementById("error").innerHTML = "";
        }
    }
    passwordValidation();
        
    // Aviso Checkbox Desmarcada
    function checkboxValidation() {
        let check = document.getElementById("checkbox").checked
        if (check = false) {
            document.getElementById("error").innerHTML = "A checkbox deve estar marcada!";
            return false
        } else {
            document.getElementById("error").innerHTML = "";
        }
    }
    checkboxValidation();
        
    //Checar se as senhas são iguais
    function passwordMatch() {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
    
        if( confirmPassword.length !== password.length) {
            document.getElementById("error").innerHTML = "As senhas devem ser iguais!";
        }
    }
    passwordMatch();

        // Em caso de envio bem-sucedido do formulário, a página de confirmação deve ser exibida
    // function switchPage() {
    //     // window.location.href();
    //     if () {
    //     } else {
    //         location.assign("http://www.mozilla.org")
    //     }
    // }
    // switchPage()
})
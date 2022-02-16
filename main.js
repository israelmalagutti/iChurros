const form = document.getElementById("form")
let error = document.getElementById("error")

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
        const password = document.getElementById("password").value;  
        // Checkar se o campo está vazio  
        if(password == "") {  
            document.getElementById("error").innerHTML = "A senha precisa ser preenchida!";
            return false;  
        }
        
        if(password.length < 8) {   
            document.getElementById("error").innerHTML = "Este campo precisa ter mais do que 8 caracteres";
            return false;
        } else {
            document.getElementById("error").innerHTML = "";
        }
    }
    passwordValidation();
    
    //Checar se as senhas são iguais
    function passwordMatch() {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        
        if( confirmPassword !== password) {
            document.getElementById("error").innerHTML = "As senhas devem ser iguais!";
        }
    }
    passwordMatch();
        
    // Aviso Checkbox Desmarcada
    function checkboxValidation() {
        let check = document.getElementById("checkbox").checked
        if (check == false) {
            document.getElementById("error").innerHTML = "A checkbox deve estar marcada!";
            return false
        } 
    }
    checkboxValidation();

    // Em caso de envio bem-sucedido do formulário, a página de confirmação deve ser exibida
    function switchPage() {
        // window.location.href();
        if (error.innerHTML === "") {
            location.assign("./confirmation.html")
        }
    }
    switchPage()
})
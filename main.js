const form = document.getElementById("form")
let error = document.getElementById("error")

form.addEventListener("submit", event => {
    event.preventDefault()
    document.getElementById("error").innerHTML = "";

    function emailValidation() {
        const email = document.getElementById("email").value;
        if (email == "") {
            document.getElementById("error").innerHTML = "Email é obrigatório!";
            return false;
        }
        return true;
    }
        
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
        }
        return true;
    }
    
    //Checar se as senhas são iguais
    function passwordMatch() {
        const password = document.getElementById("password").value; 
        const confirmPassword = document.getElementById("confirmPassword").value;
        
        if( confirmPassword !== password) {
            document.getElementById("error").innerHTML = "As senhas devem ser iguais!";
            return false;
        }
        return true;
    }
        
    // Aviso Checkbox Desmarcada
    function checkboxValidation() {
        let check = document.getElementById("checkbox").checked
        if (check == false) {
            document.getElementById("error").innerHTML = "A checkbox deve estar marcada!";
            return false;
        } 
        return true;
    }

    // Em caso de envio bem-sucedido do formulário, a página de confirmação deve ser exibida
    function switchPage() {
        // window.location.href();
        if (error.innerHTML === "") {
            location.assign("./confirmation.html")
        }
    }
    
    if (!emailValidation()) return;
    if (!passwordValidation()) return;
    if (!passwordMatch()) return;
    if (!checkboxValidation()) return;
    switchPage();
})


// emailValidation();
// passwordValidation();
// passwordMatch();
// checkboxValidation();


// Email Inválido
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
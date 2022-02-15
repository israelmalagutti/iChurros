const form = document.getElementById("form")

form.addEventListener("submit", event => {
    event.preventDefault()

    // function formValidation() {
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
        }
            
        //Checkar se o campo tem ao menos 8 caracteres 
        if(password.length < 8) {   
            document.getElementById("error").innerHTML = "Este campo precisa ter mais do que 8 caracteres";  
            return false;
        }
    }
    passwordValidation();
        
    // Aviso Checkbox Desmarcada
    function checkboxValidation() {
        let check = document.getElementById("checkbox").value
        if (check = false) {
            document.getElementById("error").innerHTML = "A checkbox deve estar marcada!";  
        }
    }
    checkboxValidation();
        
    //Checar se as senhas são iguais
    function passwordMatch() {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
    
        if(password !== confirmPassword) {
            document.getElementById("error").innerHTML = "A checkbox deve estar marcada!";  
        }
    }
    passwordMatch();
    // Em caso de envio bem-sucedido do formulário, a página de confirmação deve ser exibida
})
const form = document.getElementById("form")

form.addEventListener("submit", event => {
    event.preventDefault()

    function formValidation() {
        // Email Inválido
        function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
        }
        
        return messages[typeError]
        }

        
        // Validação da Senha
        function passwordValidation() {  
            let password = document.getElementById("password").value;  
            // Checkar se o campo está vazio  
            if(password == "") {  
               document.getElementById("message").innerHTML = "Este campo precisa ser preenchido!";  
               return false;  
            }  
             
           //Checkar se o campo tem ao menos 8 caracteres 
            if(password.length < 8) {   
               document.getElementById("message").innerHTML = "Este campo precisa ter mais do que 8 caracteres";  
               return false;
            }  
        }
        
        // Aviso campo em Branco
        
        
        // Aviso Checkbox Desmarcada
        function checkboxValidation() {
            const check = document.getElementById(checkbox).value
            if (check != true) {
                alert("Para continuar a checkbox deve estar marcada.")
            }
        }
        
        //Checar se as senhas são iguais
        function passwordMatch() {
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
        
            if(password !== confirmPassword) {
                alert("Senhas diferentes!");
            }
        }
        // Em caso de envio bem-sucedido do formulário, a página de confirmação deve ser exibida
    }
})
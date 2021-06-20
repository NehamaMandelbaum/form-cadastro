const nome = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    // Validando campos obrigatórios
    if (nome.value.trim() === ""){
        messages.push('Nome é obrigatório!')
    }

    if (email.value.trim() === ""){
        messages.push('Email é obrigatório!')
    }

    if (password.value.trim() === ""){
        messages.push('Senha é obrigatória!')
    }

    // Validando os padrões de senha: 
    if (password.value.length < 8){
        messages.push('Sua senha deve conter no mínimo 8 caracteres!')
    }

    if (password.value.length > 14){
        messages.push('Sua senha deve conter no máximo 14 caracteres!')
    }

    if (!containsUpperCase(password.value)){
        messages.push('Sua senha deve conter uma letra maiúscula!')
    }

    if (!containsLowerCase(password.value)){
        messages.push('Sua senha deve conter uma letra minúscula!')
    }
    if(!containsNumber(password.value)){
        messages.push('Sua senha deve conter um número!')
    }

    if (!containsSpecialCharacters(password.value)){
        messages.push('Sua senha deve conter um caracter especial!')
    }



// Funções que validam os padrões de senha: 
function containsUpperCase(password){
    return /[A-Z]/.test(password)
}

function containsLowerCase(password){
    return /[a-z]/.test(password)
}

function containsNumber(password){
    return /[0-9]/.test(password)
}

function containsSpecialCharacters(password){
    return /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(password)
}



    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(' ')
    } else {
        alert('Cadastro concluído com sucesso!')
    }
})
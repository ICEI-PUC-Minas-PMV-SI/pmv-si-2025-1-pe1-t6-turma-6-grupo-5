const email = document.getElementById("email")
const name = document.getElementById("name")
const cpf = document.getElementById("cpf")
const password = document.getElementById("password")
const rePassword =  document.getElementById("re-password")
const user = document.getElementById("usuario")
const showPasscode = document.getElementById("showPasscode")
const passcode = document.getElementById("passcode")

const formCad =  document.getElementById("formCad")

let users = JSON.parse(localStorage.getItem('users')) || []

let manager = false

user.addEventListener('change', (v) =>{
    const actualValue = v.target.value

    if(actualValue === 'Gestor'){
        showPasscode.style.display = 'block'
        manager = true
    }else{
        showPasscode.style.display = 'none'
        manager = false
    }
})

formCad.addEventListener("submit",(event) =>{
    event.preventDefault()

    createNewUser({
        email: email.value,
        name: name.value,
        cpf: cpf.value,
        password: password.value,
        rePassword: rePassword.value,
        passcode: manager ? passcode.value : ''
    })
})

function createNewUser(data){
    const { email,name, cpf, password, rePassword, passcode } = data

    if(manager && passcode != 90){
        alert('Código de gestor inválido')

        return false
    }

    if(user.value === ''){
        alert('Selecione um perfil de usuário')

        return false
    }

    const emailAlreadyExist = verifyDuplicateEmail(email)

    if(emailAlreadyExist){
        alert('Já existe um usuário com este email')
    }

    if(email === '' || email === undefined || email === null)
        return false
    if(name === '' || name === undefined || name === null)
        return false
    if(cpf === '' || cpf === undefined || cpf === null)
        return false
    if(password === '' || password === undefined || password === null)
        return false
    if(rePassword === '' || rePassword === undefined || rePassword === null)
        return false
    if(password.toString() != rePassword.toString()){
        alert('Senhas não conferem')
        return false
    }

    

    users.push({
        email,
        name,
        cpf,
        password,
        manager,
        session: false
    })

    resetFields()

    localStorage.setItem('users', JSON.stringify(users))

    alert('Usuário criado com sucesso')

    return window.location = 'entrar.html'
}

function resetFields(){
    email.innerHTML=''
    name.innerHTML=''
    cpf.innerHTML=''
    password.innerHTML=''
    rePassword.innerHTML=''
    passcode.innerHTML=''
}

function verifyDuplicateEmail(email){
    const emailAlreadyExist = users.some(user => {
        return user.email === email
    })

    return emailAlreadyExist
}

console.log(users)
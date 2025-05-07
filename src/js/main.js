const email = document.getElementById("email")
const name = document.getElementById("name")
const cpf = document.getElementById("cpf")
const password = document.getElementById("password")
const rePassword =  document.getElementById("re-password")

const form =  document.getElementById("form")

let users;

form.addEventListener("submit",(event) =>{
    event.preventDefault()

    createNewUser({
        email: email.value,
        name: name.value,
        cpf: cpf.value,
        password: password.value,
        rePassword: rePassword.value
    })
})

function createNewUser(data){
    const { email,name, cpf, password, rePassword } = data

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

    if(password.toString() != rePassword.toString())
        return false

    users.push({
        email,
        name,
        cpf,
        password
    })

    return localStorage.setItem('users', JSON.stringify(users))
}

function verifyDuplicateEmail(){

    // need to verify if there is a user with the same email
    console.log(users)
}

function getUsers(){
    users = localStorage.getItem('users') || []
}

getUsers()
verifyDuplicateEmail()
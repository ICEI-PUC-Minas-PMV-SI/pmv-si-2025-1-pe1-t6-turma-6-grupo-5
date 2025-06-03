const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form-login')

let users = JSON.parse(localStorage.getItem('users')) || []

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    verifyAccountDetails({
        email: email.value,
        password: password.value
    })

    password.value = ''
})

function verifyAccountDetails(data){
    const { email, password} = data

    let existUser = false

    users.forEach((user,index) =>  {
        if(user !== null && user !== undefined && user.email === email && user.password === password){
            existUser = true
            
            users[index] = {
                ...user,
                session : true
            }

            persistUser()
        } 
    })

    if(!existUser){
        alert('Verifique os dados digitados')

        return 
    }

    if(existUser){
        window.location = 'perfil-cidadao.html'
    }
}

function persistUser(){
    localStorage.setItem('users', JSON.stringify(users))
}

function verifyIfUserIsAlreadyLoggedIn(){
    users.forEach(user => {
        if(user.session){
            window.location = 'perfil-cidadao.html'
        }
    })

}

function logout(){
    const newUsers = users.map(user => {
        return {
            ...user,
            session : false
        }
    })

    users = newUsers

    persistUser()
}

console.log(users)
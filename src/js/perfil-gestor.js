let users = JSON.parse(localStorage.getItem('users')) || []

function verifyLoggedUser(){
    let isUserLogged = false

    users.forEach((user) => {
        if(user !== null && user !== undefined && user.session === true){
            isUserLogged = true
        }
    });

    if(isUserLogged === false){
        window.location = 'entrar.html'
    }
}

function logout(){
    const newUsers = users.map(user => {
        if(user !== null && user !== undefined){
            return {
                ...user,
                session: false
            }
        }

        return user
    })

    users = newUsers

    console.log(users)

    persistUser()

    verifyLoggedUser()
}

function persistUser(){
    localStorage.setItem('users', JSON.stringify(users))
}

console.log(users)
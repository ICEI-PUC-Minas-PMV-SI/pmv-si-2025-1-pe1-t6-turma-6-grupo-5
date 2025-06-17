let users = JSON.parse(localStorage.getItem('users')) || []

function verifyLoggedUser(){
    let numbersOfUserLogged = 0
    let isUserLogged = false

    users.forEach((user) => {
        if(user !== null && user !== undefined && user.session === true){
            isUserLogged = true
            numbersOfUserLogged++
        }
    });

    if(numbersOfUserLogged >= 2){
        users = users.map(currentUser => {
            return {
                ...currentUser,
                session : false
            }
        })

        persistUser()
        window.location = 'entrar.html'
    }

    if(isUserLogged === false){
        window.location = 'entrar.html'
    }
}

verifyLoggedUser()

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

const user = getCurrentUser()
const html = createPersonalDetailsHTML(user)

document.getElementById("users").appendChild(html);

function createPersonalDetailsHTML({
  name,
  /*phone,*/
  cpf,
  /*rg,*/
  email,
  /*address,*/
  profileImageSrc = "../assets/Rogerio.png",
  profileImageAlt = "Foto de Perfil."
}) {
    const personalDetails = document.createElement('div')
    personalDetails.classList.add('personal')
    personalDetails.classList.add('details')

    const profile = document.createElement('div')
    profile.classList.add('profile-photo')

    const photo = document.createElement('img')
    photo.setAttribute('width','119')
    photo.setAttribute('height','119')
    photo.setAttribute('src',profileImageSrc)

    const info = document.createElement('ul')
    info.classList.add('info')

    const nameProfile = document.createElement('li')
    nameProfile.innerHTML = `<strong>Nome</strong><br />${name}`

    /*const phoneProfile = document.createElement('li')
    phoneProfile.innerHTML = `<strong>Telefone</strong><br />${phone ? phone: '(xx) x xxxx-xxxx'}`*/

    const cpfProfile = document.createElement('li')
    cpfProfile.innerHTML = `<strong>CPF</strong><br />${cpf}`

    /*const rgProfile = document.createElement('li')
    rgProfile.innerHTML = `<strong>RG</strong><br />${rg ? rg : 'xxxxxxx'}`*/

    const emailProfile = document.createElement('li')
    emailProfile.innerHTML = `<strong>Email</strong><br />${email}`

    /*const addressProfile = document.createElement('li')
    addressProfile.innerHTML = `<strong>Endereço</strong><br />${address ? address : `Rua xxx, Qd xxx, Lt xxx, Setor xxx`}`*/

    const nav = document.createElement('nav')

    const changeData = document.createElement('a')
    changeData.classList.add('btn-datails')
    changeData.innerHTML= `Editar Dados`

    const changePassword = document.createElement('a')
    changePassword.classList.add('btn-password')
    changePassword.innerHTML = `Alterar Senha`

    personalDetails.appendChild(profile)
    profile.appendChild(photo)
    personalDetails.appendChild(info)
    info.appendChild(nameProfile)
    /*info.appendChild(phoneProfile)*/
    info.appendChild(cpfProfile)
    /*info.appendChild(rgProfile)*/
    info.appendChild(emailProfile)
    /*info.appendChild(addressProfile)*/
    personalDetails.appendChild(nav)
    nav.appendChild(changeData)
    nav.appendChild(changePassword)


    return personalDetails
}

function getCurrentUser(){
    const [user] = users.filter((user) => {
        return user.session === true
    })

    return user
}

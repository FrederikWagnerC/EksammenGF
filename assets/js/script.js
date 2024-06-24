// TILE SWITCHER 

const mainImage = document.getElementById('mainImage')
const smallImageOne = document.getElementById('smallImageOne')
const smallImageTwo = document.getElementById('smallImageTwo')
const smallImageThree = document.getElementById('smallImageThree')
const smallImageFour = document.getElementById('smallImageFour')
console.log(smallImageOne);
function imageSwitcher() {

    let eventImageSrc = event.target.src

    mainImage.src = eventImageSrc
}


smallImageOne.addEventListener('click', imageSwitcher)
smallImageTwo.addEventListener('click', imageSwitcher)
smallImageThree.addEventListener('click', imageSwitcher)
smallImageFour.addEventListener('click', imageSwitcher)

// MODAL 

const ModalOpenButton = document.getElementById('ModalOpenButton')
const modalCloseButton = document.getElementById('modalCloseButton')
const modal = document.getElementById('modal')
const modalBackground = document.getElementById('modalBackground')

ModalOpenButton.addEventListener('click', () => {
    modal.classList.add('modalShow')
    modal.classList.remove('modalStart')
    modal.classList.remove('modalHidden')
})

modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('modalShow')
    modal.classList.add('modalHidden')
})

modalBackground.addEventListener('click', () => {
    modal.classList.remove('modalShow')
    modal.classList.add('modalHidden')
})

// FORM VALIDATION 

const formName = document.getElementById('formName')
const formLastname = document.getElementById('formLastname')
const formEmail = document.getElementById('formMail')
const formSubmit = document.getElementById('formSubmit')
const formPassword = document.getElementById('formPassword')
const formPasswordRepeat = document.getElementById('formPasswordRepeat')

let formNameBoo = false
let formLastnameBoo = false
let formMailBoo = false



formName.addEventListener('keyup', (event) => {
    if (formName.value.length >= 2) {
        formName.classList.add('formValid')
        formName.classList.remove('formInvalid')
        formNameBoo = true
    } else {
        formName.classList.add('formInvalid')
        formName.classList.remove('formValid')
        formNameBoo = false
    }
})

formLastname.addEventListener('keyup', (event) => {
    if (formLastname.value.length >= 2) {
        formLastname.classList.add('formValid')
        formLastname.classList.remove('formInvalid')
        formLastnameBoo = true
    } else {
        formLastname.classList.add('formInvalid')
        formLastname.classList.remove('formValid')
        formLastnameBoo = false
    }
})

const mailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
formEmail.addEventListener('keyup', (event) => {
    let formEmailValue = formEmail.value.toLowerCase() + event.key;
    const emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (formEmailValue.toLowerCase().match(mailRegex)) {
        formEmail.classList.add('formValid')
        formEmail.classList.remove('formInvalid')
        formMailBoo = true
    } else {
        formEmail.classList.add('formInvalid')
        formEmail.classList.remove('formValid')
        formMailBoo = false
    }
})


formSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    if (formNameBoo === true && formMailBoo === true & formMailBoo === true && formPassword.value !='' && formPasswordRepeat.value != '') {
        alert('Success!')
        formName.value = ''
        formLastname.value = ''
        formEmail.value = ''
        formPassword.value = ''
        formPasswordRepeat.value = ''
        formName.classList.remove('formValid')
        formLastname.classList.remove('formValid')
        formEmail.classList.remove('formValid')
        formPassword.classList.remove('formValid')
        formPasswordRepeat.classList.remove('formValid')
        formNameBoo = false
        formLastnameBoo = false
        formMailBoo = false
    } else if (formNameBoo === false) {
        alert('Indtast dit Navn!')
    } else if (formLastnameBoo === false) {
        alert('Indtast dit Efternavn!')
    } else if (formMailBoo === false) {
        alert('Indtast din Email!')
    }  else if (!formPassword.value) {
        alert('Indtast din Password!')
    } else if (!formPasswordRepeat.value) {
        alert('Gentag dit Password!')
    }
})
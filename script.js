const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const fnameError = document.getElementById('fname-error')
const lnameError = document.getElementById('lname-error')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')
const fnameImg = document.getElementById('fname-img')
const lnameImg = document.getElementById('lname-img')
const emailImg = document.getElementById('email-img')
const passwordImg = document.getElementById('password-img')
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(e.target.fname.value == ''){
        fnameError.classList.toggle('active')
        fnameImg.classList.toggle('active')
    }
    if(e.target.lname.value == ''){
        lnameError.classList.toggle('active')
        lnameImg.classList.toggle('active')
    }
    if(e.target.email.value == '' || e.target.email.value.match(mailformat)){
        emailError.classList.toggle('active')
        emailImg.classList.toggle('active')
    }
    if(e.target.password.value == ''){
        passwordError.classList.toggle('active')
        passwordImg.classList.toggle('active')
    }

})
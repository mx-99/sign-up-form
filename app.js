let password = document.querySelector('#password')
let confirm_password = document.querySelector('#confirm-password');
const error = document.querySelector('.error')
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
    if (password.value !== confirm_password.value) {
        e.preventDefault();
        error.textContent="*Passwords do not match"
    }
})

const confirmPassword = document.getElementById('confirmPassword');
const form = document.querySelector('form');
const inputArea = document.querySelector('#input-section > div');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit');

function handleInput(e) {

    const isMatch = () => {
        if (e.target.value.length < 1) { return false; }
        // Compare to password
        if (e.target.id === confirmPassword.id) {
            return e.target.value === password.value ? true : false;
        } 
        // Compare to confirm
        if (e.target.id === password.id) {
            return e.target.value === confirmPassword.value ? true : false;
        }
        return false;
    };

    function addError() {
        inputArea.dataset.message = '* Passwords do not match';
        password.classList.add('error');
        confirmPassword.classList.add('error');
    }

    function removeError() {
        inputArea.dataset.message = '';
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
    }

    isMatch() ? 
        removeError() : 
        addError();
}

function handleSubmit(e) {
    if (confirmPassword.classList.contains('error')) {
        e.preventDefault();
    }
}

password.addEventListener('keyup', handleInput);
confirmPassword.addEventListener('keyup', handleInput);
form.addEventListener('submit', handleSubmit);
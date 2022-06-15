//array com todos os inputs
const inputs = document.querySelectorAll('.input');

const button = document.querySelector('.login-button');

//selecionar o span que input está
const focar = ({target}) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

//reverter e remover a classe do span
const desfocar = ({target}) =>{

    if(target.value == '')
    {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const mudar = () =>{
    const[username, password] = inputs;

    if(username.value && password.value.length >= 1)
    {
        button.removeAttribute('disabled');
    }
    else
    {
        button.setAttribute('disabled','');
    }
}

inputs.forEach((input) => input.addEventListener('focus', focar));
inputs.forEach((input) => input.addEventListener('focusout', desfocar));
inputs.forEach((input) => input.addEventListener('input', mudar));
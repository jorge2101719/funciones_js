// let body = document.querySelector('body');
let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');
let cuatro = document.querySelector('#cuatro');
let color = 'brown';


document.addEventListener('keydown', function(event) {
    console.log('dentro de la función');
    if (event.key === 'a') {
        color = 'blue';
    } else if (event.key === 's') {
        color = 'green';
    } else if (event.key === 'd') {
        color = 'yellow';
    }
});



uno.addEventListener('click', () => {
    uno.style.backgroundColor = color;
})

dos.addEventListener('click', () => {
    dos.style.backgroundColor = color;
})

tres.addEventListener('click', () => {
    tres.style.backgroundColor = color;
})

cuatro.addEventListener('click', () => {
    cuatro.style.backgroundColor = color;
})
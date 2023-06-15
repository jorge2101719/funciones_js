// let body = document.querySelector('body');
let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');
let cuatro = document.querySelector('#cuatro');
let color = 'greenyellow';


document.addEventListener('keydown', function(event) {
    console.log('dentro de la función');
    if (event.key === 'a') {
        color = 'black';
    } else if (event.key === 's') {
        color = 'violet';
    } else if (event.key === 'd') {
        color = 'brown';
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
// let body = document.querySelector('body');
let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');
let cuatro = document.querySelector('#cuatro');
let error = document.querySelector('#error');
let color = 'greenyellow';


document.addEventListener('keydown', function(event) {
    console.log('dentro de la función');
    if (event.key === 'a' || event.key === 'A') {
        color = 'black';
    } else if (event.key === 's' || event.key === 'S') {
        color = 'violet';
    } else if (event.key === 'd' || event.key === 'D') {
        color = 'brown';
    } else {
        error.style.backgroundColor = 'red';
        error.style.color = 'white';
        error.innerHTML = 'Debe oprimir solamente a, s , d';
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
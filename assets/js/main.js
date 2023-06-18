// let body = document.querySelector('body');
let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');
let cuatro = document.querySelector('#cuatro');
let comentario = document.querySelector('#comentario');
let color = 'purple';


document.addEventListener('keydown', function(event) {
    console.log('dentro de la función');
    if (event.key === 'a' || event.key === 'A') {
        color = 'black';
        comentario.style.backgroundColor = 'white';
        comentario.style.color = 'black';
        comentario.innerHTML = 'Usted ha escogido el negro';
    } else if (event.key === 's' || event.key === 'S') {
        color = 'violet';
        comentario.style.backgroundColor = 'white';
        comentario.style.color = 'black';
        comentario.innerHTML = 'Usted ha escogido el violeta';
    } else if (event.key === 'd' || event.key === 'D') {
        color = 'brown';
        comentario.style.backgroundColor = 'white';
        comentario.style.color = 'black'
        comentario.innerHTML = 'Usted ha escogido el café';
    } else {
        comentario.style.backgroundColor = 'red';
        comentario.style.color = 'white';
        comentario.innerHTML = 'Debe oprimir solamente a, s, d. Cualquier otra mostrará este mensaje.';
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
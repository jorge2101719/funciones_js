let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');
let cuatro = document.querySelector('#cuatro');
let color1 = 'brown';
let color2 = 'red';
let color3 = 'purple';


uno.addEventListener('keydown', function(event) {
    console.log('dentro de la función');
    if (event.key == 'a') {
        uno.style.backgroundColor = color1;
    } else if (event.key == 's') {
        uno.style.backgroundColor = color2;
    } else if (event.key == 'd') {
        uno.style.backgroundColor = color3;
    }
});
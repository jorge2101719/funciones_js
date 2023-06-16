// Parte 3: modificación de una función

// 3.1

/*
let ele1 = document.getElementById('ele1');

ele1.addEventListener('click', function () {
    console.log('función 3.1')
    ele1.style.backgroundColor = 'yellow';
})
*/



// 3.2

let ele2 = document.querySelector('#ele2')
ele2.addEventListener ('click', () => {
    pintar('yellow')
})

function pintar (color = 'green') {
    ele2.style.backgroundColor = color;
}



// 3.3

let ele3 = document.querySelector('#ele3');

ele3.addEventListener('click', () => {
    pintarDos();
} );

function pintarDos (color = 'green') {
    // e.preventDefault();
    // console.log('estamos dentro de la función 3.3');
    ele3.style.backgroundColor = color;
}
// Parte 3: modificación de una función

// 3.1

let ele1 = document.getElementById('ele1');


ele1.addEventListener('click', function () {
    console.log('función 3.1')
    ele1.style.backgroundColor = 'yellow';
})



// 3.2

function pintar (color = 'green') {
    // let ele2 = document.querySelector('#ele2');
    ele2.style.backgroundColor = color;
}


// 3.3

let elemento = documento.getElementById('elemento');

elemento.addEventListener('click', function (color = 'green') {
    console.log('estamos dentro de la función');
    elemento.innerHTML = 'elemento pintado';
    // elemento.style.backgroundColor = color;
})
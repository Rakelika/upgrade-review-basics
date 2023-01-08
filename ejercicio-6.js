'use strict'

// Función swap

const names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2) {
    let extra = array[index1];
    array[index1] = array[index2];
    array[index2] = extra;
    console.log(array)
    }

swap(names, 1, 3);




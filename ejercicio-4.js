'use strict'

//Métodos findArrayIndex

const animals= ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(text)) {
          console.log(i);
        }
    }
}

findArrayIndex(animals, 'Mosquito');
findArrayIndex(animals, 'Ajolote');
findArrayIndex(animals, 'Caracol');


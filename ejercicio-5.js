'use strict'

// Función rollDice

function rollDice(number) {
    return Math.floor(Math.random() * (number +1));
  }

  console.log(rollDice(6));
  console.log(rollDice(50));
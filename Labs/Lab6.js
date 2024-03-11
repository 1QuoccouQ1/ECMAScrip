// Bài 1
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase();
  }
  
// Bài 2

import { uppercaseString, lowercaseString } from './myFunctions';

const uppercased = uppercaseString("hello");
const lowercased = lowercaseString("WORLD!");

// Bài 3
function subtract(x,y) {

    return x-y;
}

// BÀi 4
// sum_function.js

export const subtract = (a, b) => {
    return a - b;
};

// main.js

import { subtract } from './sum_function';

const result = subtract(4, 7);

console.log(result); 

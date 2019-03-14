'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// function jadenCase(stringParam) {
//   let words = stringParam.split(' ');

//   // return words;
//   // return words.length


//   let letters = [...words];
//   return letters


//   // for (let i = 0; i < words.length; i++) {
//   //   words[i][0] = words[i][0].toUpperCase();
//   // }
//   // return words;
// }





//solution qui marche 1 --- MAP

function jadenCase(str) {
  let arr = str.toLowerCase().split(" ");
  let arr2 = arr.map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
  return arr2; // note that arr2 is a string now because of .join(" ")
};


const test = jadenCase('make uppercase')
console.log(test)

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')

// End of tests */

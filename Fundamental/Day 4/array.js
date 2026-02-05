/* 

ARRAY
Struktur data yang digunakan untuk menyimpan lebih dari satu nilai dalam satu variabel

*/

let firstArray = [1, 2, 3, 4, 5];
let secondArray = new Array(1, 2, 3, 4, 5);

let fruits = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

fruits[2] = 'melon';
console.log(fruits);

delete fruits[2];
console.log(fruits);
console.log(fruits[2]);
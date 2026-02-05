/*
    METHODS 
    Fungsi bawaan dari bahasa pemrograman. Gunanya untuk memanipulasi tipe data tertentu
*/

// .length      : Mendapatkan jumlah karakter
const text = 'abc';
console.log(text.length);

// .slice       : Memotong karakter tertentu berdasarkan index
let description = 'Belajar Javascript';
console.log(description.slice(0, 7));
console.log(description.slice(8, 18));

// .toUpperCase & .toLowerCase
let textParagraph = 'hello world';
console.log(textParagraph.toUpperCase());

let textParagraph01 = 'HELLO WORLD';
console.log(textParagraph01.toLowerCase());

// .split   : Mengkonversi menjadi array
let fruits = 'Apel, Mangga, Melon';
console.log(fruits.split(','));
console.log(fruits.split(' '));
console.log(fruits.split('M'));

// .indexOf     : Mencari suatu karakter paling awal
// .lastIndexOf : Mencari suatu karakter paling akhir
let message = 'bata'; 
console.log(message.indexOf('a')); 
console.log(message.lastIndexOf('a')); 

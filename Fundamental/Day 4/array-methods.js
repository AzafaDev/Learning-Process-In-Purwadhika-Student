// .push => menambahkan elemen di akhir array
// .unshift => menambahkan elemen di awal array
// .shift => menghapus elemen di awal array
// .pop => menghapus elemen di akhir array

let fruits = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
fruits.push('grape');
fruits.push('rambutan')
fruits.unshift('manggis')
console.log(fruits);

const foods = ['rice', 'noodles', 'pork', 'chicken', 'beef'];
foods.pop()
foods.shift()
console.log(foods);

// .splice => menghapus elemen di tengah array
// .slice => memotong array

let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2, 'a', 'b')
numbers.splice(1, 0, 'c', 'd')
console.log(numbers);

// .includes => mengecek apakah array memiliki elemen tertentu
// .indexOf => mengecek index dari elemen tertentu

let numbers01 = [1, 2, 3, 4, 5];
console.log(numbers01.includes(3));
console.log(numbers01.indexOf(3));

// .slice => memotong array
let numbers02 = [1, 2, 3, 4, 5];
console.log(numbers02.slice(2, 4));

// .join => menggabungkan array menjadi string
let numbers03 = [1, 2, 3, 4, 5];
console.log(numbers03.join('-'));

// .length => mendapatkan panjang array
let numbers04 = [1, 2, 3, 4, 5];
console.log(numbers04.length);
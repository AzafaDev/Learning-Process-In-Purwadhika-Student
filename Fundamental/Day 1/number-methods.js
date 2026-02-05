// .toString    : Konversi dari number ke string
let price = 15000;
let newPrice = price.toString();
console.log(typeof price);
console.log(typeof newPrice);

// toFixed
let number = 3.3;
console.log(number.toFixed());

// Number   : Konversi string menjadi number
let priceStr = '15000';
console.log(Number(priceStr));

// parseInt : Konversi string menjadi number
let discount = '70';
console.log(parseInt(discount));

let randomText = '12345ABC';
console.log(Number(randomText)); // NaN (Not a Number)
console.log(parseInt(randomText)); // 12345

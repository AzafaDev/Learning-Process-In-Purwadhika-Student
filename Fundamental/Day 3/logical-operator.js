/* 
LOGICAL OPERATOR
Digunakan untuk membuat perbandingan antara beberapa kondisi

AND &&
        - Akan me-return true jika semua kondisi bernilai true
        - Akan me-return false jika salah satu kondisi bernilai false
    OR ||
        - Akan me-return true jika salah satu kondisi bernilai true
        - Akan me-return false jika semua kondisi bernilai false

    NOT !
        - Reverse nilai
*/

console.log(75 >= 100 && 100 <= 100); // false && true = false
console.log('abc' === 'ABC' && 'abc' == 'abc' && 100 == '100'); // false && true && true = true

console.log('100' ==  100 || 'abc' === 'BCA'); // true || false = true
console.log(!(17 >= 17)); // !true = false
console.log(!('abc'.length >= 10)|| !(10 === Number('10') && 5 == '5')); // !false || !true = true
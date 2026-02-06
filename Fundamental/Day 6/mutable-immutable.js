/* 
    Immutable : Data yang tidak bisa diubah 
    Mutable : Data yang bisa diubah
*/

let description = 'Muhammad'
description[0] = 'm';
console.log(description);

const arrFruits = ['Apel', 'Anggur']
arrFruits[0] = 'Jeruk'
console.log(arrFruits);

// Copy by value

let student = 'Defriyan'
let studentCopy = student
studentCopy = 'John'
console.log(student);
console.log(studentCopy);

// Copy by references
let alphabets = ['A', 'B', 'C']
let alphabetsCopy = alphabets
alphabetsCopy[0] = 'D'
console.log(alphabets);
console.log(alphabetsCopy);

let user = {
    firstName: 'John',
    lastName: 'Doe',
    password: '123456',
    email: '8YH3e@example.com',
}

let userCopy = user
userCopy.password = 'bca123'
console.log(user);
console.log(userCopy);
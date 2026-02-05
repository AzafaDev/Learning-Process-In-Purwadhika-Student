/* 
    FUNCTION
    Fungsi digunakan untuk melakukan tugas tertentu
*/

// Deklarasi function
function sayHello() {
  console.log('Hello, World!');
}

// Expression function
const sayHello01 = function () {
  console.log('Hello, World!');
};

sayHello();
sayHello01();

// Function Hoisting
sayHello02();
function sayHello02() {
  console.log('Hello, World!');
}

function test() {
  const description = 'abc';
  console.log(description);
}

// Function with parameter and argument
function greeting(name) {
  console.log(`Hello, ${name}!`);
}

greeting('Defryan');
greeting('Isfandy');

function greetingUser(user = 'Guest', email = 'Guest@gmail.com') {
  console.log(`Hello, ${user}! Your email is ${email}`);
}


// function with rest parameter
function myFunc(arg1, arg2, ...args) {
  console.log(arg1);
  console.log(arg2);
  console.log(args);
}

myFunc(1, 2, 3, 4, 5);

// arrow function
const sayHello03 = () => {
  console.log('Hello, World!');
};
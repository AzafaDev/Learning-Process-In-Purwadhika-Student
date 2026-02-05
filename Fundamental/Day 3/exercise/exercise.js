/* 
● Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
● Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number
● Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
● Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
● Write a code to print the first N fibonacci numbers
○ Example: 15 → 610 
*/

import promptSync from 'prompt-sync';

const isOddOrEven = (number) => {
  console.log(
    number % 2 === 0
      ? `${number} is an even number`
      : `${number} is an odd number`,
  );
};

const isPrime = (number) => {
  let prime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  console.log(
    prime ? `${number} is a prime number` : `${number} is not a prime number`,
  );
};

const sum = (number) => {
  let sum = '';
  for (let i = 1; i <= number; i++) {
    sum += i === number ? `${i}` : `${i} + `;
  }
  console.log(
    `The sum of the numbers 1 to ${number} is ${sum} = ${(number * (number + 1)) / 2}`,
  );
};

const factorial = (number) => {
  let rumus = '';
  let result = 1;
  for (let i = number; i > 0; i--) {
    if (i === 1) {
      rumus += `${i}`;
      result *= i;
      break;
    }
    rumus += `${i} x `;
    result *= i;
  }
  console.log(`${number}! = ${rumus} = ${result}`);
};

const fibonacci = (n) => {
  let [a, b] = [0, 1];

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  console.log(a);
};

const prompt = promptSync();
let number = Number(prompt('Enter a number: '));
isOddOrEven(number);

number = Number(prompt('Enter a number: '));
isPrime(number);

number = Number(prompt('Enter a number: '));
sum(number);

number = Number(prompt('Enter a number: '));
factorial(number);

number = Number(prompt('Enter a number: '));
fibonacci(number);

console.log('Bye-bye!');

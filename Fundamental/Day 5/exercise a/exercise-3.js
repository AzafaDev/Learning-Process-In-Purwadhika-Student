/* 
3. Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 */

function secondSmallestNumber(numbers) {
  numbers.sort((a, b) => a - b);
  for (let i of numbers) {
    if (i !== numbers[0]) {
      return i;
    }
  }
}

console.log(secondSmallestNumber([5, 3, 1, 7, 2, 6]));

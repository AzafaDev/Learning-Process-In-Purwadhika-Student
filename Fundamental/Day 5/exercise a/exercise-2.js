/* 
2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated
by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
 */

function JoinArray(arr) {
  let result = '';
  for (let i = 0; i < arr.length - 1; i++) {
    result += `${arr[i]}, `;
  }
  result += `and ${arr[arr.length - 1]}.`;
  console.log(result);
}

JoinArray(['apple', 'banana', 'cherry', 'date']);

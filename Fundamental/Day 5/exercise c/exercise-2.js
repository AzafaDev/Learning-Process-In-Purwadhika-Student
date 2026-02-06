/* 
2. Write a function from the below array of number that will return sum of duplicate values.
a. let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
b. The function will return 40
*/

function sumDuplicate(arr) {
  arr.sort();
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]);
sumDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);

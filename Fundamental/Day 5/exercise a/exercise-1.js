/* 
1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

function getLowestHighestAverage(arr) {
  let lowest = arr[0];
  let highest = arr[0];
  let total = 0
  for (let n of arr) {
    if (n < lowest) {
      lowest = n;
    }
    if (n > highest) {
      highest = n;
    }
    total += n
  }

  let average = (total / arr.length).toFixed(4)
  console.log(`{lowest: ${lowest}, highest: ${highest}, average: ${average.slice(0, 4)}xxx}`);
}

getLowestHighestAverage([12, 5, 23, 18, 4, 45, 32]);

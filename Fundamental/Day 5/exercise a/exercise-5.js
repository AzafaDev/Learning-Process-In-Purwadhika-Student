/* 
5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not
already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/

let arr = [1, 2, 3, 4];

function newElement(number) {
  let sameNumber;
  for (let i = 0; i < arr.length; i++) {
    if (number !== arr[i]) {
      continue;
    } else {
      sameNumber = number;
    }
  }
  if (!sameNumber){
    arr.push(number)
    console.log(arr);
  } else {
    console.log(arr);
  }
}

newElement(4)
newElement(7)
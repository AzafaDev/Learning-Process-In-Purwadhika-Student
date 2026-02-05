/* 
2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array
can only contain 5 elements).
a. Example :
■ maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
*/

function insertMultipleInteger(maxSize, ...integer){
    let arr = []
    if (maxSize > integer.length) maxSize = integer.length
    for (let i = 0; i < maxSize; i++){
        arr.push(integer[i])
    }
    console.log(arr);
}

insertMultipleInteger(5, 5, 10, 24, 3, 6, 7, 8)
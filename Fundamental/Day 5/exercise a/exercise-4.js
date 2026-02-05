/* 
4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of
the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

function sumArrays(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i])
    }
    console.log(result);
}

sumArrays([1, 2, 3], [3, 2, 1])
/* 
1. Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/
function sum(mixedArray){
    let result = 0
    for (let i = 0; i < mixedArray.length;i++){
        if (typeof mixedArray[i] === 'number'){
            result += mixedArray[i]
        }
    }
    console.log(result);
}

sum(['3', 1, 'string', null, false, undefined, 2])
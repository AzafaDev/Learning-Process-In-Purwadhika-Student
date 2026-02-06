/* 
1. Based on the array below write a function that will return primitive data types only.
a. let arr = [1, [], undefined, {}, "string", {}, []];
b. The function will return [1, undefined, “string”]
*/

function primitiveDataTypes(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'string' || typeof arr[i] === 'number' || typeof arr[i] === 'boolean' || arr[i] === null || arr[i] === undefined){
            result.push(arr[i])
        }
    }
    console.log(result);
}

primitiveDataTypes([1, [], undefined, {}, "string", {}, []]);
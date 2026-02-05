/* 
3. Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/

function combine(arr1,arr2){
    let result = [...arr1,...arr2]
    console.log(result);
}

combine([1,2,3],[4,5,6])
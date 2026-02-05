/* 
4. Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/

function findDuplicate(arr){
    let number
    let sameNumber = []
    for (let i of arr){
        if (number !== i){
            number = i
        } else if (number === i){
            sameNumber.includes(i) ? '' : sameNumber.push(i)
        }

    }
    console.log(sameNumber);
}

findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5])
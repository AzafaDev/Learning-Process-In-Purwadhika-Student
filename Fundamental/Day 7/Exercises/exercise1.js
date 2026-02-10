/* 
    ● Create a function to convert Excel sheet column title to its corresponding column number.
    ● Example :
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
    ● Example :
    ○ Input : AB
    ○ Output : 28 
*/

function convertColumnTitle(columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle.charCodeAt(i) - 64;
    result += result * 26 + char;
  }
  console.log(result);
}

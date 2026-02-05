/* ● Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”] */

function splitString(string) {
  let newArray = [];
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newArray.push(newWord);
      newWord = '';
    } else {
      newWord += string[i];
    }
  }
  newArray.push(newWord);
  console.log(newArray);
}

splitString('Hello World');

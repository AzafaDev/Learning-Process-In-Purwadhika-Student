/*
    VARIABLE
    Tempat untuk menyimpan data

    Syntax: 
    var variableName; 
    let variableName; 
    const variableName; 

    Naming rules: 
    1. Not ambigous 
    2. Format: snake_case, PascalCase, camelCase
    3. Must start with alphabets / special character: $, _
*/
var fullName;
fullName = 'Defryan'; // = assignment operator

var lastName = 'Isfandy'; // declaration + assignment

let school;
school = 'Purwadhika';

let campus = 'BSD';

console.log(school);
console.log(fullName);

// Menampilkan output "Hello, World!" sebanyak 10x
var outputText = 'Hello, World!';
console.log(outputText);
console.log(outputText);
console.log(outputText);
console.log(outputText);
console.log(outputText);
console.log(outputText);
console.log(outputText);
console.log(outputText);
console.log(outputText);
console.log(outputText);



// 1. Not ambigous
var streetName = 'Ahmad Yani';

// 2. Format: snake_case / PascalCase / camelCase
var street_address; 
var StreetAddress; 
var streetAddress; 

// 3. Must start with alphabets / special character: $, _
// var 5treetName; 
// var %streetName; 
// var $streetName; 
// var _streetName; 



// var x let x const

// var can duplicate, let & const cant 
var studentName = 'Defryan'; 
var studentName = 'Immanuel';

// let student_name = 'M. Defryan';
// let student_name = 'Aboy'; 

// value var & let can be changed, const cant 
let programName = 'Web Development'; 
programName = 'Fullstack Web Development';
console.log(programName); // 'Fullstack Web Development'


const campusName = 'Purwadhika';
campusName = 'Pwd';
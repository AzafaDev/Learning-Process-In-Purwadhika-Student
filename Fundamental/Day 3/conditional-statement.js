/* 
CONDITIONAL STATEMENT
Digunakan untuk membuat/memberi keputusan

1. if
2. else
3. else if
*/

let age = 18;
if (age > 17) {
  console.log('You can create an identity card');
}

let score = 75;
if (score >= 75) {
  console.log('Your exam is passed');
} else {
  console.log('Your exam is failed');
}

score = 75
  ? console.log('Your exam is passed')
  : console.log('Your exam is failed');

let examScore = 90;
if (examScore >= 90) {
  console.log('Exam grade is A');
} else if (examScore >= 80) {
  console.log('Exam grade is B');
} else if (examScore >= 75) {
  console.log('Exam grade is C');
} else {
  console.log('Exam grade is D');
}

examScore >= 90
  ? console.log('A')
  : examScore >= 80
    ? console.log('B')
    : examScore >= 75
      ? console.log('C')
      : console.log('D');

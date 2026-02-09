/* 
● Create a function to calculate array of student data
● The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
● Parameters : array of student
● Return values :
    ○ Object with this following properties :
        ■ Score
            ● Highest
            ● Lowest
            ● Average
        ■ Age
            ● Highest
            ● Lowest
            ● Average
*/

class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const student1 = new Student('John Doe', 'JohnDoe@example.com', 20, 80);
const student2 = new Student('Jane Doe', 'JaneDoe@example.com', 21, 90);
const student3 = new Student('Jack Doe', 'JackDoe@example.com', 22, 100);
const student4 = new Student('Jill Doe', 'JillDoe@example.com', 23, 70);
const student5 = new Student('Joe Doe', 'JoeDoe@example.com', 24, 60);
const student6 = new Student('Judy Doe', 'JudyDoe@example.com', 25, 50);

function calculateScore(arr) {
  let scores = arr.Map((student) => student.score);
  let ages = arr.Map((student) => student.age);
  let averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
  let averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;

  return {
    score: {
      highest: Math.max(...scores),
      lowest: Math.min(...scores),
      average: averageScore,
    },
    age: {
      highest: Math.max(...ages),
      lowest: Math.min(...ages),
      average: averageAge,
    },
  };
}

console.log(calculateScore([student1, student2, student3, student4]));

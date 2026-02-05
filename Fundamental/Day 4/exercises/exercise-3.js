/* ● Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z */

function calculateBMI(weight, height) {
  let bmi = (weight / (height * height)).toFixed(1);
  if (bmi < 18.5) {
    
    return `Your BMI is ${bmi}, you are Less weight`
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Your BMI is ${bmi}, you are ideal`;
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return `Your BMI is ${bmi}, you are overweight`;
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return `Your BMI is ${bmi}, you are very overweight`;
  } else {
    return `Your BMI is ${bmi}, you are obesity`;
  }
}

console.log(calculateBMI(55, 1.7));

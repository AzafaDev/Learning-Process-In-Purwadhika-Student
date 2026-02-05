/* ● Create a function that can create a triangle pattern according to the height we provide like the following :

01
02 03
04 05 06
07 08 09 10

● Parameters : height → triangle height */

function triangle(height) {
  let counter = 1; 
  for (let i = 1; i <= height; i++){
    let result = ''
    for (let x = 1; x <= i; x++){
        result += counter < 10 ? `0${counter} ` : `${counter} `
        counter++
    }
    console.log(result);
  }
}

triangle(4);


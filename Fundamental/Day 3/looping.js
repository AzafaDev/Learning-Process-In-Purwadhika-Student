/* 
    LOOPING
    Digunakan untuk melakukan perulangan
    1. for
    2. while
    3. do while

    Syarat melakukan looping:
    1. Terdapat kondisi
    2. Terdapat perubahan kondisi
    3. Exit condition
*/

let start = 1;

while (start <= 5) {
  console.log(start);
  start++;
}

/* 
  declare startCondition
  do{
    action
    exitWay
  }while(startCondition)
*/

do {
  console.log(start);
  start++;
} while (start <= 3);

/* 
for(declare startCondition; exitWay; perubahan kondisi){
  action
}
*/

for (let start = 1; start <= 5; start++) {
  console.log(start);
}

/* 
BREAK & CONTINUE

break   : Hentikan perulangan
continue: Lewatkan perulangan
*/

for (let start = 1; start <= 5; start++) {
  if (start === 3) {
    break;
  }
  console.log(start);
}

for (let start = 1; start <= 5; start++) {
  if (start === 3) {
    continue;
  }
  console.log(start);
}
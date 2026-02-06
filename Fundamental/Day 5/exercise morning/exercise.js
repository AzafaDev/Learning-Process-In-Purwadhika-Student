/* 
shooting game

1. game ini terdiri dari 2 pemain
2. Setiap pemain memiliki tiga property. [name, health, power] ([budi, 100, 10])
3. Setiap pemain akan menembak secara bergantian.
4. Sebelum menembak, pemain mendapatkan kesempatan untuk mendapatkan item random (tambah health (+10 atau 0) dan power (+10 atau 0)).
5. Permainan akan berlanjut sampai salah satu pemain memiliki health < 0.

notes
1. buat function showStatus, untuk menampilkan status pemain (nama, health, dan power)
2. buat function untuk damage, dimana akan mengurangi darah pemain berdasarkan power pemain lainnya
3. buat function randomItem, untuk merandom apakah akan mendapatkan health (0 atau 10) dan power (0 atau 10)
4. buat function useItem, untuk memberikan health atau power ke pemain berdasarkan randomItem
5. buat function start, dimana function2 lain akan dijalankan dan dipanggil di function ini
*/

let player1 = ['Budi', 100, 10];
let player2 = ['Doremi', 100, 10];

function showStatus(player1, player2) {
  console.log(
    `Name: ${player1[0]}, Health: ${player1[1] > 0 ? player1[1] : 0}, Power: ${player1[2]} \nName: ${player2[0]}, Health: ${player2[1] > 0 ? player2[1] : 0}, Power: ${player2[2]}  `,
  );
}

function damage(player1, player2) {
  player2[1] -= player1[2];
}

function randomItem() {
  let item = [0, 0];
  let isHealth = Math.random() < 0.5 ? 0 : 10; 
  let isPower = Math.random() < 0.5 ? 0 : 10; 
  item[0] = isHealth;
  item[1] = isPower;
  return item;
}

function useItem(player, item) {
  player[1] += item[0];
  player[2] += item[1];
  console.log(
    `${player[0]} mendapatkan health ${item[0]} dan power ${item[1]}. Health: ${player[1]}, Power: ${player[2]}`,
  );
}

function start() {
  showStatus(player1, player2);
  while (player1[1] > 0 && player2[1] > 0) {
    let item1 = randomItem();
    let item2 = randomItem();
    useItem(player1, item1);
    useItem(player2, item2);
    damage(player1, player2);
    showStatus(player1,player2);
    if (player1[1] <= 0 || player2[1] <= 0) {
      break;
    }
    damage(player2, player1);
    showStatus(player1, player2);
  }
  if (player1[1] <= 0) {
    console.log(`${player2[0]} win!`);
  } else {
    console.log(`${player1[0]} win!`);
  }
}

start();

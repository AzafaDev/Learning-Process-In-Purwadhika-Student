/* 
3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win' 
*/

function game(argument) {
    let random = Math.floor(Math.random() * 3);
    if (argument === 'rock' && random === 0) {
        return 'Win';
    } else if (argument === 'paper' && random === 1) {
        return 'Win';
    } else if (argument === 'scissor' && random === 2) {
        return 'Win';
    } else {
        return 'Lose';
    }
}

console.log(game('rock'));
console.log(game('paper'));
console.log(game('scissor'));
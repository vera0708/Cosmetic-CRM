'use strict'
const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

let anyChoice = '';
let priority = 1;
const minValue = 1;
const maxValue = 3;
let parity;
let parityString = '';
const minBalls = 1;
const maxBalls = 5;
const ballsCount = {
    computer: 5,
    player: 5,
};
//  Игрой 'Камень, ножницы, бумага' определяем кто первый ходит в Марблах: игрок или компьютер
// const userChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);
// const computerNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

// const whoIsTheFirst = (theChoice) => {
//     let choiceNumber = 0;
//     const getNumberChoice = (text) => {
//         for (let i = 0; i < FIGURE_RUS.length; i++) {
//             if (FIGURE_RUS[i].includes(text.toLowerCase())) {
//                 choiceNumber = FIGURE_RUS.length - i;
//                 return choiceNumber;
//             }
//         };
//         if (choiceNumber === 0) {
//             alert(`Вы ввели некорректные данные. Попробуйте ещё раз.`);
//             const nextChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);
//             return getNumberChoice(nextChoice);
//         };
//     };
//     const userNumber = getNumberChoice(theChoice);

//     const getStringChoice = (num) => {
//         for (let i = 0; i < FIGURE_RUS.length; i++) {
//             if (num === i + 1) {
//                 return anyChoice = FIGURE_RUS[FIGURE_RUS.length - num];
//             }
//         }
//     };
//     const computerChoice = getStringChoice(computerNumber);
//     const correctUserChoice = getStringChoice(userNumber);

//     const compareNumbers = (number1, number2) => {
//         if (number1 === number2) {
//             computerNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
//             compareNumbers(computerNumber, userNumber);
//         } else
//             if (number1 === 1 && number2 === 3) {
//                 alert(` вы -'${correctUserChoice}', компьютер - '${computerChoice}'.\n Выиграл компьютер, он начинает`);
//                return priority = 0;
//             } else
//                 if (number2 === 1 && number1 === 3) {
//                     alert(`вы -'${correctUserChoice}', компьютер - '${computerChoice}'.\n Вы выиграли и начинаете`);
//                    return priority = 1;
//                 } else
//                     if (number1 > number2) {
//                         alert(`вы -'${correctUserChoice}', компьютер - '${computerChoice}'.\n Выиграл компьютер, он начинает `);
//                       return priority = 0;
//                     } else
//                         if (number2 > number1) {
//                             alert(` вы -'${correctUserChoice}', компьютер - '${computerChoice}'.\n Вы выиграли и начинаете `);
//                            return priority = 1;
//                         }
//     }
//     compareNumbers(computerNumber, userNumber);
// };
// const claim = whoIsTheFirst(userChoice);

const startPlayerGame = () => {
    const playerChoice = +prompt(`Введите количество шариков от 1 до ${maxBalls}`);
    if (playerChoice < 1 || playerChoice > maxBalls || Number.isFinite(playerChoice) === false) {
        console.log(`Количество шариков не соответствует требованию. Попробуйте ещё раз.`);
    } else {
        const computerOneOrTwo = (Math.floor(Math.random() * (maxBalls - minBalls + 1)) + minBalls);
        console.log(`computerOneOrTwo: ${computerOneOrTwo}`);
        if (((computerOneOrTwo % 2) && (playerChoice % 2)) || (!(computerOneOrTwo % 2) && !(playerChoice % 2))) {
            console.log(`computer угадал, нужно + ${playerChoice} к ${ballsCount[0]}`);
            ballsCount[0] += playerChoice;
            ballsCount[1] -= playerChoice;
        } else {
            console.log(`computer НЕ угадал, нужно + ${playerChoice} к ${ballsCount[1]}`);
            ballsCount[0] -= playerChoice;
            ballsCount[1] += playerChoice;
        };
        console.log(`ballsCount[0]: ${ballsCount[0]}, ballsCount[1]: ${ballsCount[1]}`);
    }
}

const finishGame = () => {
    if (ballsCount[0] <= 0 || ballsCount[1] <= 0) {

    } else {

    }
}

const getPriority = (priority) => {
    if (priority === 1) {
        startPlayerGame();
        priority = 0;
    } else {
        // startComputerGame();
        // priority = 1;
    }
}

getPriority(priority)

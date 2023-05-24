'use strict';

const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

let anyChoice = '';
let priority = 2;
const minValue = 1;
const maxValue = 3;
const minBalls = 1;
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
//                return priority = 2;
//             } else
//                 if (number2 === 1 && number1 === 3) {
//                     alert(`вы -'${correctUserChoice}', компьютер - '${computerChoice}'.\n Вы выиграли и начинаете`);
//                    return priority = 1;
//                 } else
//                     if (number1 > number2) {
//                         alert(`вы -'${correctUserChoice}', компьютер - '${computerChoice}'.\n Выиграл компьютер, он начинает `);
//                       return priority = 2;
//                     } else
//                         if (number2 > number1) {
//                             alert(` вы -'${correctUserChoice}', компьютер - '${computerChoice}'.\n Вы выиграли и начинаете `);
//                            return priority = 1;
//                         }
//     }
//     compareNumbers(computerNumber, userNumber);
// };
// const claim = whoIsTheFirst(userChoice);
// console.log(`whoIsTheFirst: ${claim}`);
// getPriority(claim);


// Игрок загадывает число. Компьютер отгадывает чётность
const startPlayerGame = () => {
    const playerChoice = +prompt(`Введите количество шариков от 1 до ${ballsCount.player}`);
    console.log(`playerChoice! ${playerChoice}`);
    if (playerChoice === 0) {
        const beSure = confirm(`Вы точно хотите выйти?`);
        if (beSure == true) {
            return console.log(`До свидания!`);
        }
    } else {
        if (playerChoice < 1 || playerChoice > ballsCount.player || Number.isFinite(playerChoice) === false) {
            console.log(`Количество шариков не соответствует требованию. Попробуйте ещё раз.`);
            startPlayerGame();
        } else {
            const computerOneOrTwo = (Math.floor(Math.random() * (ballsCount.computer - minBalls + 1)) + minBalls);
            console.log(`computerOneOrTwo: ${computerOneOrTwo}`);
            checkPlayerChoice(computerOneOrTwo, playerChoice);
            closeGame();
        }
    }
};
// Проверка совпадения чётности с числом игрока 
const checkPlayerChoice = (computerParity, playerMove) => {
    if (((computerParity % 2 === 0) && (playerMove % 2 === 0)) || ((computerParity % 2 !== 0) && (playerMove % 2 !== 0))) {
        console.log(`computer угадал, нужно + ${playerMove} к его ${ballsCount.computer}`);
        ballsCount.computer += playerMove;
        ballsCount.player -= playerMove;
    } else {
        console.log(`computer НЕ угадал, нужно + ${playerMove} к вашим ${ballsCount.player}`);
        ballsCount.computer -= playerMove;
        ballsCount.player += playerMove;
    };
    console.log(`ballsCount.computer: ${ballsCount.computer}, ballsCount.player: ${ballsCount.player}`);
}

// Компьютер загадывает число. Игрок отгадывает чётность
let playerParity;
const startComputerGame = () => {
    const computerNumber = (Math.floor(Math.random() * (ballsCount.computer - minBalls + 1)) + minBalls);
    const playerOption = prompt(`Введите 'even', если думаете, что компьютер загадал \nчётное число, и 'odd' -нечётное`);
    console.log(`playerOption! ${playerOption}`);
    if (playerOption === null) {
        const beSure = confirm(`Вы точно хотите выйти?`);
        if (beSure == true) {
            return console.log(`До свидания!`);
        } else { startComputerGame() }
    } else {
        if (playerOption === 'odd') {
            playerParity = 1;
            console.log(`Выбрано 'odd', playerParity ${playerParity}`);
        } else if (playerOption === 'even') {
            playerParity = 2;
            console.log(`Выбрано 'even', playerParity ${playerParity}`);
        }
        else {
            confirm(`Для чётного / нечётного выбора введите even или odd`);
            startComputerGame();
        }
    };
    checkComputerChoice(computerNumber, playerParity);
    closeGame();
}

// Проверка совпадения чётности с числом компьютера
const checkComputerChoice = (playePar, computerMove) => {
    if (((playePar % 2 === 0) && (computerMove % 2 === 0)) || ((playePar % 2 !== 0) && (computerMove % 2 !== 0))) {
        console.log(`Вы угадали, нужно + ${computerMove} к вашим ${ballsCount.player} шарикам`);
        ballsCount.computer -= computerMove;
        ballsCount.player += computerMove;
    } else {
        console.log(`Вы НЕ угадали, нужно + ${computerMove} к его ${ballsCount.computer} шарикам`);
        ballsCount.computer += computerMove;
        ballsCount.player -= computerMove;
    };
    console.log(`ballsCount.computer: ${ballsCount.computer}, ballsCount.player: ${ballsCount.player}`);
};

// Проверка окончания шариков и соответственно игры
const closeGame = () => {
    if (ballsCount.computer <= 0) {
        console.log(`Игра окончена!\nУ компьютера закончились шарики.\n У вас ${ballsCount.player} шариков - вы выиграли!`);
        const beSure = confirm(`"Хотите сыграть еще?`);
        if (beSure == true) {
            priority += 1;
            console.log(`priority = ${priority}`);
            getPriority(priority);
        }
    } else if (ballsCount.player <= 0) {
        console.log(`Игра окончена!\nУ  вас закончились шарики.\n у компьютера ${ballsCount.computer} шариков - он выиграл!`);
        const beSure = confirm(`"Хотите сыграть еще?`);
        if (beSure == true) {
            priority += 1;
            console.log(`priority = ${priority}`);
            getPriority(priority);
        }
    } else {
        priority += 1;
        console.log(`priority = ${priority}`);
        getPriority(priority);
    }
};

// Установление очерёдности 
let prior;
const getPriority = (prior) => {
    console.log(`зашли в getPriority c prior ${prior}`);
    if ((prior % 2) === 0) {
        console.log(`Вызываем startComputerGame с ${prior}`);
        startComputerGame();

    } else {
        console.log(`Вызываем startPlayerGame с ${prior}`);
        startPlayerGame();
    }
};
getPriority(priority);


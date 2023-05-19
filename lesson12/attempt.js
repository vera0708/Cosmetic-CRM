'use strict'
// Первая задача:

const FIGURE_ENG = ['rock', 'scissors', 'paper'];
const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

// const getChoice = lang => {
// };
let minValue = 1;
let maxValue = 3;
let userNumber = 0;
let anyChoice = '';

const result = {
    player: 0,
    computer: 0,
};
// const game = (language) => {
const game = () => {
    // const lang = language === 'EN' || language === 'ENG'
    //     ? FIGURE_ENG : FIGURE_RUS;
    //     return function start() {
    let choiceNumber = 0;
    let correctUserChoice = '';

    const userChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);

    while (userChoice !== null) {
        const userChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);
        const computerNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

        const getStringChoice = (num) => {
            if (num === 1) {
                return anyChoice = 'бумага';
            }
            if (num === 2) {
                return anyChoice = 'ножницы';
            }
            if (num === 3) {
                return anyChoice = 'камень';
            }
        };
        const computerChoice = getStringChoice(computerNumber);
        console.log(`Компьютер загадал '${computerChoice}'`);

        const returnNumberChoice = (text) => {
            if (text.toLowerCase() === 'камень' || text.toLowerCase() === 'камен'
                || text.toLowerCase() === 'каме' || text.toLowerCase() === 'кам'
                || text.toLowerCase() === 'ка' || text.toLowerCase() === 'к') {
                choiceNumber = 3;
                console.log(`choiceNumber ${choiceNumber}`);
                return choiceNumber;
            }
            if (text.toLowerCase() === 'ножницы' || text.toLowerCase() === 'ножниц'
                || text.toLowerCase() === 'ножни' || text.toLowerCase() === 'ножн'
                || text.toLowerCase() === 'нож' || text.toLowerCase() === 'но'
                || text.toLowerCase() === 'н') {
                choiceNumber = 2;
                console.log(`choiceNumber ${choiceNumber}`);
                return choiceNumber;
            }
            if (text.toLowerCase() === 'бумага' || text.toLowerCase() === 'бумаг'
                || text.toLowerCase() === 'бума' || text.toLowerCase() === 'бум'
                || text.toLowerCase() === 'бу' || text.toLowerCase() === 'б') {
                choiceNumber = 1;
                console.log(`choiceNumber ${choiceNumber}`);
                return choiceNumber;
            }
            else {
                console.log(`Вы ввели некоректные данные. Попробуйте ещё раз.`);
                return
            };
        };
        const userNumber = returnNumberChoice(userChoice);
        console.log(`userNumber ${userNumber}`);

        correctUserChoice = getStringChoice(userNumber);
        console.log(`Вы загадали '${correctUserChoice}'`);

        if (computerNumber === userNumber) {
            alert(`В этот раз ничья:\n и вы, и компьютер- ${correctUserChoice}.
            Общий счёт игры: \n вы - ${result.player}, \n компьютер - ${result.computer}`);
        } else
            if (computerNumber === 1 && userNumber === 3 || (computerNumber > userNumber)) {
                result.computer += 1;
                alert(`В этот раз выиграл компьютер:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                Общий счёт игры: \n вы - ${result.player}, \n компьютер - ${result.computer}`);
            } else
                if (userNumber === 1 && computerNumber === 3 || (userNumber > computerNumber)) {
                    result.player += 1;
                    alert(`В этот раз выиграли вы:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                    Общий счёт игры: \n вы - ${result.player},  \n компьютер - ${result.computer}`);
                }
    };
}

game();
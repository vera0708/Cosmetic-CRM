'use strict'
// Первая задача:
let minValue = 1;
let maxValue = 3;

(() => {
    const FIGURE_ENG = ['rock', 'scissors', 'paper'];
    const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomNumber = (minValue, maxValue) => {
        return (Math.round(Math.random() * (maxValue - minValue + 1)) + minValue);
    };
    let computerChoice = '';
    const stringChoice = (num) => {
        if (num === 1) {
            computerChoice = 'бумага';
        }
        if (num === 2) {
            computerChoice = 'ножницы';
        }
        if (num === 3) {
            computerChoice = 'камень';
        }
    };
    stringChoice(getRandomNumber);
    // const getChoice = lang => {
    // };
    let userNumber = 0;
    // const game = (language) => {
    const game = () => {
        const result = {
            player: 0,
            computer: 0,
        };
        // const lang = language === 'EN' || language === 'ENG'
        //     ? FIGURE_ENG : FIGURE_RUS;
        return function start() {
            const userChoice = prompt('Введите камень, ножницы или бумага');
            while (userChoice !== null) {
                if (userChoice.toLowerCase() === 'камень' || userChoice.toLowerCase() === 'камен'
                    || userChoice.toLowerCase() === 'каме' || userChoice.toLowerCase() === 'кам'
                    || userChoice.toLowerCase() === 'ка' || userChoice.toLowerCase() === 'к') {
                    userNumber = 3;
                }
                if (userChoice.toLowerCase() === 'ножницы' || userChoice.toLowerCase() === 'ножниц'
                    || userChoice.toLowerCase() === 'ножни' || userChoice.toLowerCase() === 'ножн'
                    || userChoice.toLowerCase() === 'нож' || userChoice.toLowerCase() === 'но'
                    || userChoice.toLowerCase() === 'н') {
                    userNumber = 2;
                }
                if (userChoice.toLowerCase() === 'бумага' || userChoice.toLowerCase() === 'бумаг'
                    || userChoice.toLowerCase() === 'бума' || userChoice.toLowerCase() === 'бум'
                    || userChoice.toLowerCase() === 'бу' || userChoice.toLowerCase() === 'б') {
                    userNumber = 1;
                }
                else {
                    console.log(`Вы ввели некоректные данные. Попробуйте ещё раз.`);
                };

                if (getRandomNumber === userNumber) {
                    prompt(`Ничья: ${userChoice}:${computerChoice}. Общий счёт игры: вы ${result.player} : компьютер ${result.computer}`)
                } else
                    if (getRandomNumber === 1 && userNumber === 3 || (getRandomNumber > userNumber)) {
                        result.computer += 1;
                        prompt(`Выиграл компьютер: вы ${userChoice}: компьютер ${computerChoice}. Общий счёт игры: вы ${result.player} : компьютер ${result.computer}`);
                        console.log(`Выиграл компьютер. Общий счёт игры: компьютер ${result.computer} : вы ${result.player}`)
                    } else
                        if (userNumber === 1 && getRandomNumber === 3 || (userNumber > getRandomNumber)) {
                            result.player += 1;
                            prompt(`Вы выиграли: вы ${userChoice}: компьютер ${computerChoice}. Общий счёт игры: вы ${result.player} : компьютер ${result.computer}`);
                            console.log(`Вы выиграли. Общий счёт игры: компьютер ${result.computer} : вы ${result.player}`)
                        }
            }
        }
    }
    window.RSP = game;
})();


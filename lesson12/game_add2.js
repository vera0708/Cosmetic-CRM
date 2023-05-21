'use strict'
// Третья дополнительная задача:

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

const game = (language) => {
    const array = language === 'EN' || language === 'ENG'
        ? FIGURE_ENG : FIGURE_RUS;
    //     return function start() {
    console.log(array);

    let correctUserChoice = '';

    const userChoice = language === 'EN' || language === 'ENG'
        ? prompt(`Enter '${array[0]}', '${array[1]}' or '${array[2]}'`)
        : prompt(`Введите '${array[0]}', '${array[1]}' или '${array[2]}'`);
    console.log(`Вопрос до рекурсии это userChoice ${userChoice}`);

    const playRSP = (lastChoice) => {
        console.log(`зашли в рекурсию это  ${lastChoice}`);

        if (lastChoice === null) {
            const beSure = confirm(`Вы точно хотите выйти?`);
            if (beSure == true) {
                console.log(`Игра окончена!\nОбщий счёт игры:\n вы - ${result.player}, компьютер - ${result.computer}`);
                return
            }
        } else {
            let choiceNumber = 0;
            const getNumberChoice = (text) => {
                for (let i = 0; i < array.length; i++) {
                    if (array[i].includes(text.toLowerCase())) {
                        choiceNumber = array.length - i;
                        console.log(`в цикле получили ${choiceNumber}`);
                        return choiceNumber;
                    }
                };
                if (choiceNumber === 0) {
                    console.log(`Вы ввели некоректные данные. Попробуйте ещё раз.`);
                };
            };
            const userNumber = getNumberChoice(lastChoice);

            const computerNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
            const getStringChoice = (num) => {
                for (let i = 0; i < array.length; i++) {
                    if (num === i + 1) {
                        return anyChoice = array[array.length - num];
                    }
                }
            };
            const computerChoice = getStringChoice(computerNumber);
            console.log(`Компьютер загадал '${computerChoice}', computerNumber - ${computerNumber}`);

            correctUserChoice = getStringChoice(userNumber);
            console.log(`Вы загадали '${correctUserChoice}', userNumber - ${userNumber}`);

            if (computerNumber === userNumber) {
                alert(`В этот раз ничья:\n и вы, и компьютер- ${correctUserChoice}.
            Общий счёт игры:\nвы - ${result.player},\nкомпьютер - ${result.computer}`);
            } else
                if (computerNumber === 1 && userNumber === 3) {
                    result.computer += 1;
                    alert(`В этот раз выиграл компьютер:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                Общий счёт игры:\n вы - ${result.player},\n компьютер - ${result.computer}`);
                } else
                    if (userNumber === 1 && computerNumber === 3) {
                        result.player += 1;
                        alert(`В этот раз выиграли вы:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                    Общий счёт игры:\n вы - ${result.player}, \n компьютер - ${result.computer}`);
                    } else
                        if (computerNumber > userNumber) {
                            result.computer += 1;
                            alert(`В этот раз выиграл компьютер:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                Общий счёт игры:\n вы - ${result.player},\n компьютер - ${result.computer}`);
                        } else
                            if (userNumber > computerNumber) {
                                result.player += 1;
                                alert(`В этот раз выиграли вы:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                    Общий счёт игры:\n вы - ${result.player}, \n компьютер - ${result.computer}`);
                            }
        };

        const userChoice = language === 'EN' || language === 'ENG'
            ? prompt(`Enter '${array[0]}', '${array[1]}' or '${array[2]}'`)
            : prompt(`Введите '${array[0]}', '${array[1]}' или '${array[2]}'`);
        console.log(`Это последняя строка. Далее передаётся '${userChoice}'`);

        playRSP(userChoice);
    };
    playRSP(userChoice);
};

const lang = prompt(`Введите 'ENG' или 'EN' если хотите играть на английском\n в любом другом случае игра будет на русском`);
game(lang);
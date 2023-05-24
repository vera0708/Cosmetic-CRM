'use strict';
// Первая обязательная задача:

window.RSP = (() => {
    const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

    const minValue = 1;
    const maxValue = 3;
    let anyChoice = '';

    const result = {
        player: 0,
        computer: 0,
    };

    const game = () => {

        let correctUserChoice = '';

        const userChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);

        const playRSP = (lastChoice) => {

            if (lastChoice === null) {
                const beSure = confirm(`Вы точно хотите выйти?`);
                if (beSure == true) {
                    return console.log(`Игра окончена!\nОбщий счёт игры:\n вы - ${result.player}, компьютер - ${result.computer}`);
                }
            } else {
                const array = FIGURE_RUS;

                let choiceNumber = 0;
                const getNumberChoice = (text) => {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i].includes(text.toLowerCase())) {
                            choiceNumber = array.length - i;
                            return choiceNumber;
                        }
                    };
                    if (choiceNumber === 0) {
                        console.log(`Вы ввели некорректные данные. Попробуйте ещё раз.`);
                        const userChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);
                        getNumberChoice(userChoice);
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

                correctUserChoice = getStringChoice(userNumber);

                const compareNumbers = (number1, number2) => {
                    if (number1 === number2) {
                        alert(`В этот раз ничья:\n и вы, и компьютер- ${correctUserChoice}.\nОбщий счёт игры:\nвы - ${result.player},\nкомпьютер - ${result.computer}`);
                    } else
                        if ((number1 === 1 && number2 === 3) || (number1 === 3 && number2 === 2) || (number1 === 2 && number2 === 1)) {
                            result.computer += 1;
                            alert(`В этот раз выиграл компьютер:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                                Общий счёт игры:\n вы - ${result.player},\n компьютер - ${result.computer}`);
                        } else {
                            result.player += 1;
                            alert(`В этот раз выиграли вы:\n вы -'${correctUserChoice}', компьютер - '${computerChoice}'. 
                                    Общий счёт игры:\n вы - ${result.player}, \n компьютер - ${result.computer}`);
                        }
                };
                compareNumbers(computerNumber, userNumber);
            };
            const userChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);

            playRSP(userChoice);
        };

        playRSP(userChoice);
    };
    return {
        game,
    };
})();
'use strict'
const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

const minValue = 1;
const maxValue = 3;
const result = {
    player: 0,
    computer: 0,
};
const userChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);
const computerNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
const whoIsTheFirst = (theChoice) => {
    let choiceNumber = 0;
    const getNumberChoice = (text) => {
        for (let i = 0; i < FIGURE_RUS; i++) {
            if (FIGURE_RUS[i].includes(text.toLowerCase())) {
                choiceNumber = FIGURE_RUS - i;
                return choiceNumber;
            }
        };
        if (choiceNumber === 0) {
            console.log(`Вы ввели некорректные данные. Попробуйте ещё раз.`);
        };
    };
    const userNumber = getNumberChoice(theChoice);

    const compareNumbers = (number1, number2) => {
        if (number1 === number2) {
            computerNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
            compareNumbers(computerNumber, userNumber);
        } else
            if (number1 === 1 && number2 === 3) {
                alert(` вы -'${number2}', компьютер - '${number1}'.\n Выиграл компьютер, он начинает`);
            } else
                if (number2 === 1 && number1 === 3) {
                    alert(`В этот раз выиграли вы:\n вы -'${number2}', компьютер - '${number1}'. Вы выиграли и начинаете`);
                } else
                    if (number1 > number2) {
                        alert(`вы -'${number2}', компьютер - '${number1}'. Выиграл компьютер, он начинает `);
                    } else
                        if (number2 > number1) {
                            alert(` вы -'${number2}', компьютер - '${number1}'. Вы выиграли и начинаете `);
                        }
    }
    compareNumbers(computerNumber, userNumber);
}

whoIsTheFirst(userChoice);

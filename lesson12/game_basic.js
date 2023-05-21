'use strict'
    // Первая обязательная задача:

    (() => {
        const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

        let minValue = 1;
        let maxValue = 3;
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
                const userChoice = prompt(`Введите 'камень', 'ножницы' или 'бумага'`);

                playRSP(userChoice);
            };

            playRSP(userChoice);
        };
        // game();
        window.RSP = game;
    })();
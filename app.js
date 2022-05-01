let button = document.querySelector('#play_button');

function startFunction() {
    const gameValue = Math.floor(Math.random() * 100) + 1;
    document.getElementById('LPlabel').remove();
    button.remove();

    const rootElement = document.querySelector('#gameform');

    const gameHeader = document.createElement('label');
    gameHeader.innerHTML =  'Угадай число от 1 до 100';

    const userInput = document.createElement('input');
    userInput.setAttribute('type', 'number');

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = "Подтвердить";
    submitBtn.addEventListener('click', () => {
        const userValue = +userInput.value;
        
        if(userValue < gameValue) {
            gameHeader.innerHTML = "Мое число больше, попробуй еще";
            userInput.value = '';
        } else if (userValue > gameValue) {
            gameHeader.innerHTML = "Мое число меньше, попробуй еще";
            userInput.value = '';
        } else if(userValue === gameValue) {
            gameHeader.innerHTML = "Поздравляю! Ты угадал!";
            userInput.value = '';
        }
    });

    rootElement.appendChild(gameHeader);
    rootElement.appendChild(userInput);
    rootElement.appendChild(submitBtn);
}

button.addEventListener('click', startFunction);
// Iteration 2: Generate 2 random numbers and display them on the screen
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let number1 = generateRandomNumber();
let number2 = generateRandomNumber();

document.getElementById('number1').textContent = number1;
document.getElementById('number2').textContent = number2;

// Iteration 3: Make the options button functional
document.getElementById('greater-than').addEventListener('click', function() {
    checkAnswer(number1 > number2);
});

document.getElementById('equal-to').addEventListener('click', function() {
    checkAnswer(number1 === number2);
});

document.getElementById('lesser-than').addEventListener('click', function() {
    checkAnswer(number1 < number2);
});

function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
    window.location.reload();
}

// Iteration 4: Build a timer for the game
let timeLeft = 10;
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        window.location.href = 'gameover.html';
    } else {
        document.getElementById('timer').textContent = timeLeft;
        timeLeft--;
    }
}

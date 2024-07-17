// Iteration 5: Store the player score and display it on the game over screen
let score = 0;

function updateScore(isCorrect) {
    if (isCorrect) {
        score++;
    }
    localStorage.setItem('score', score);
}

document.addEventListener('DOMContentLoaded', function() {
    let scoreBoard = document.getElementById('score-board');
    if (scoreBoard) {
        scoreBoard.textContent = localStorage.getItem('score') || 0;
    }
});

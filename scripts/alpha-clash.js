function play() {
    hideScreenById('home-screen');
    hideScreenById('final-score');
    showScreenById('play-ground');

    updateTextById('current-life', 5);
    updateTextById('current-score', 0);


    continueGame();

}
function continueGame() {
    const currentAlphabet = getARandomAlphabet();
    updateTextById('current-alphabet', currentAlphabet);
    setBackgroundColorById(currentAlphabet)
}

function gameOver() {
    hideScreenById('home-screen');
    hideScreenById('play-ground');
    showScreenById('final-score');

}
function handleKeyUp(event) {
    const playerPressed = event.key.toLowerCase();
    const keyToPress = getTextById('current-alphabet').toLowerCase();

    const scoreText = getTextById('current-score');
    let score = convertToNumber(scoreText);
    const lifeText = getTextById('current-life');
    let life = convertToNumber(lifeText);

    if (event.key === 'Escape') {
        updateTextById('last-score', score);
        removeBackgroundColorById(keyToPress)
        gameOver();
    }

    if (event.key === keyToPress) {
        score += 1;
        updateTextById('current-score', score);
        removeBackgroundColorById(keyToPress);
        continueGame();
    } else {
        life -= 1;
        updateTextById('current-life', life);

        if (life === 0) {
            updateTextById('last-score', score);
            removeBackgroundColorById(keyToPress);
            gameOver()
        }

    }
}

document.addEventListener('keyup', handleKeyUp);

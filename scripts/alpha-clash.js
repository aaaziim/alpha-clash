function play() {
    hideScreenById('home-screen');
    hideScreenById('final-score');
    showScreenById('play-ground');
    const currentAlphabet = getARandomAlphabet();
    updateTextById('current-alphabet', currentAlphabet)
    // console.log(currentAlphabet)

}

function handleKeyUp(event) {

}

document.addEventListener('keyup', handleKeyUp);

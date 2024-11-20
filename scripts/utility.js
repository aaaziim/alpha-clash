function hideScreenById(elementID) {
    document.getElementById(elementID).classList.add('hidden');
}
function showScreenById(elementID) {
    document.getElementById(elementID).classList.remove('hidden')
}


function getTextById(elementID) {
    return document.getElementById(elementID).innerText;
}

function updateTextById(elementID, updatedValue) {
    document.getElementById(elementID).innerText = updatedValue;
}

function convertToNumber(textString) {
    return parseInt(textString)
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz"
    const alphabetArray = alphabetString.split("")
    const index = Math.round(Math.random() * 25)
    const currentAlphabet = alphabetArray[index];
    return currentAlphabet;
}

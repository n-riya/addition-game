let firstEle = document.getElementById("firstNumber");
let secondEle = document.getElementById("secondNumber");
let statusEle = document.getElementById("gameResult");

firstEle.textContent = Math.ceil(Math.random() * 100);
secondEle.textContent = Math.ceil(Math.random() * 100);
let actResult = parseInt(firstEle.textContent) + parseInt(secondEle.textContent);

let userEle = document.getElementById("userInput");

function checkB() {

    if (parseInt(userEle.value) === actResult) {
        statusEle.textContent = " Congratulations! You got right.";
        statusEle.style.backgroundColor = "#028a0f";
    } else {
        statusEle.textContent = "Please Try Again!";
        statusEle.style.backgroundColor = "#1e217c";
    }
}

function restartB() {
    firstEle.textContent = Math.ceil(Math.random() * 100);
    secondEle.textContent = Math.ceil(Math.random() * 100);
}
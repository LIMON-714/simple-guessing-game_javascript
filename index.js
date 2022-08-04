// alert("welcomw our game");


// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;

// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#btn-chk");
const resultText = cardBody.querySelector(".result");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remain");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    //console.log(guessingNumber.value);

    attempts++;
    if (attempts === 5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if (attempts < 6) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${
      totalAttempts - attempts
    }`;
    }
    guessingNumber.value = "";
});

function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `congratulation! you have won`;
        totalWons++;
    } else {
        resultText.innerHTML = `sorry! you have lost; random number was: ${randomNumber}`;
        totallosts++;
    }
    lostWonMessage.innerHTML = `Total Won: ${totalWons}, Total Lost: ${totallosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit) {
    // let randomNumber =Math.floor(Math.random()*limit)+1;
    return Math.floor(Math.random() * limit) + 1;
}
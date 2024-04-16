let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guesses = document.querySelector(".guesses")
const remainingGuess = document.querySelector(".remaining_guess")
const lowORhigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".result_paras")

const s = document.createElement("span")


let prevGuesses = []
let numGuesses = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (guess < 0 || guess > 100 || isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else {
        prevGuesses.push(guess)

        if (numGuesses === 10) {
            // displayGuess(guess)
            checkGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            // displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Hurray! You guessed it right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayGuess(guess)
        displayMessage(`Number is TOOO low!`)
    }
    else if (guess > randomNumber) {
        displayGuess(guess)
        displayMessage(`Number is TOOO high!`)
    }
    else {
        endGame()
    }
}

function displayGuess(guess) {
    userInput.value = ""
    if(numGuesses === 10){
        guesses.innerHTML += `${guess}`
    }
    else{
        guesses.innerHTML += `${guess}, `
    }
    remainingGuess.innerHTML = `${10 - numGuesses}`
    numGuesses++
}

function displayMessage(message) {
    lowORhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    // span.classList.add("button")
    s.innerHTML = `<span class="newGame">Start new Game<span/>`
    startOver.appendChild(s)
    playGame = false
    newGame()
}

function newGame() {
    const newGameSpan = document.querySelector(".newGame")
    newGameSpan.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuesses = []
        numGuesses = 1
        guesses.textContent = ""
        remainingGuess.textContent = 10
        userInput.removeAttribute("disabled")
        displayMessage("")
        startOver.removeChild(s)

        playGame = true
    })
}

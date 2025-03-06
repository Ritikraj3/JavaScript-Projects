( () => {
    const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all-guesses')
const startBtn = document.querySelector('.start-game')
const submitBtn = document.querySelector('.submit')

const allGuessesArray = []
let randomNumber = Math.round(Math.random() * 100)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if(randomNumber === userInputValue) {
        result.innerText = ` Congrats! You got it correct.`
        startBtn.disabled = false
        submitBtn.disabled = true
    }else if (randomNumber > userInputValue) {
        result.innerText = ` Too low! Try more.` 
    }else {
        result.innerText = ` Too high! Try more.`
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText = 'Your guesses :' + allGuessesArray.join(', ')
    form.reset( )
    if(randomNumber === userInputValue) {
        startBtn.classList.add('begin')
    }
})

startBtn.addEventListener('click', () => {
    randomNumber = Math.round(Math.random() * 100)
    result.innerText = ""
    allGuesses.innerText = ""
    allGuessesArray.length = 0
    submitBtn.disabled = false
    startBtn.disabled = true
})
})()

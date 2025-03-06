const form = document.querySelector('form')
const userInput1 = document.querySelector('#user1')
const userInput2 = document.querySelector('#user2')
const p = document.querySelector('p')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user1AgeInMs = Date.now() - parseDateString(userInput1.value).getTime()
    const user2AgeInMs = Date.now() - parseDateString(userInput2.value).getTime()

    if(user1AgeInMs > user2AgeInMs) {
        p.innerText = 'User 1 is older than user2'
    } else if (user1AgeInMs < user2AgeInMs) {
        p.innerText = 'User2 is older than user1'
    } else {
        p.innerText = 'Both have same age'
    }
})

function parseDateString(dobString) {
    const [dateString, timeString] = (dobString.split(' '))
    const [date, month, year] = dateString.split('/').map((el) => Number(el))
    const [hour, minute] = timeString.split(':').map((el) => Number(el))

    return new Date(year, month-1, date, hour, minute)
}



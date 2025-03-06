
const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus')
const plusBtn = document.querySelector('.plus')
const by = document.querySelector('.changeBy')
const reset = document.querySelector('.reset')

plusBtn.addEventListener('click', (e) => {
    // e.preventDefault
    const IncOrDecBy =  parseInt(by.value)
    const countValue = parseInt(count.innerText)
    count.innerText = countValue + IncOrDecBy
})


minusBtn.addEventListener('click', (e) => {
    // e.preventDefault
    const IncOrDecBy =  parseInt(by.value)
    const countValue2 = parseInt(count.innerText)
    count.innerText = countValue2 - IncOrDecBy
})

reset.addEventListener('click', () => {
    count.innerText = 0
})




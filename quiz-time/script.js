const timerElement = document.querySelector('.time-left');
const options = document.querySelectorAll('.answer-option');


let timeLeft = 30;
function updateTimer() {
    timeLeft--;
    timerElement.textContent = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
    if (timeLeft <= 0) {
        clearTimeout(timerElement);
        timerElement.textContent = "Time's up!";
    }
};
const timerInterval = setInterval(updateTimer, 1000);


options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(btn => {
            if (btn.classList.contains('correct')) {
                btn.classList.add('answered-correct')
            } else {
                btn.classList.add('answered-wrong')
            }
        });
    });
});









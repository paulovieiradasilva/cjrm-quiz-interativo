const form = document.querySelector('.form-countries')
const finalScoreContainer = document.querySelector('.final-score-container')
const correctAnswers = ['B', 'C', 'A', 'D']

let score = 0

const resetScore = () => score = 0

const getUserAnswer = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`question${index + 1}`].value
        userAnswers.push(userAnswer)
    })

    return userAnswers
}

const calculateUserScore = (userAnswers) => {
    userAnswers.forEach((userAnsnwer, index) => {
        const isUserAnswerCorrect = userAnsnwer === correctAnswers[index]
        if (isUserAnswerCorrect) {
            score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        finalScoreContainer.querySelector('span').textContent = `${counter++}%`
    }, 10);
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const userAnswers = getUserAnswer()

    resetScore()
    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()

    form.reset()
})
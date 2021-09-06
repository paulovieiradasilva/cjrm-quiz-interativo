const form = document.querySelector('.form-countries')
const points = document.querySelector('#score')

const correctAnswers = ['A', 'A', 'A', 'A']

const span = document.createElement('span')
span.classList.add('badge', 'bg-secondary', 'lg')

const insertSpanIntoDOM = ({ el, text, position, tag }) => {
    el.textContent = text
    tag.insertAdjacentElement(position, el)
}

insertSpanIntoDOM({ el: span, text: 0, position: 'beforeend', tag: points })

const compareAnswers = event => {
    event.preventDefault()

    const userAnswers = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value
    ]

    let score = 0
    
    scrollTo(0, 0)
    points.classList.remove('d-none')

    userAnswers.forEach((userAsnwer, index) => {
        if (userAsnwer === correctAnswers[index]) {
            score += 25
        }

        let counter = 0

        const timer = setInterval(() => {
            if (counter === score) {
                clearInterval(timer)
            }
            // insertSpanIntoDOM(span, `${counter}%`, 'beforeend', points)
            insertSpanIntoDOM({ el: span, text: `${counter}%`, position: 'beforeend', tag: points })
            counter++
        }, 10);

    })
}

form.addEventListener('submit', compareAnswers)
const qtn = [
    {
                question: "What programming language do you love most",
                answers: {
                    optionA: "Vegetable",
                    optionB: "sand",
                    optionC: "flour",
                    optionD: "grains",
                    correct: "optionB"
                },

            question: "In what state were you born",
            answers: {
                optionA: "Virginia",
                optionB: "sand",
                optionC: "flour",
                optionD: "grains",
                correct: "optionA"
            }
    }  
]

let score = 0
let currentQuiz = 0

const question = document.querySelector('.question-container')

const optionA = document.querySelector('.option-a')
const optionB = document.querySelector('.option-b')
const optionC = document.querySelector('.option-c')
const optionD = document.querySelector('.option-d')
const answerEL = document.querySelectorAll('#answer')
const button = document.querySelector('.btn')

const uncheckRadioButton = () => {
    answerEL.forEach((uncheck) => {
        uncheck.checked = false
    })
}


const quizQtn = () => {

    uncheckRadioButton();

    let currentQuestion = qtn[currentQuiz]
    question.innerText = currentQuestion.question
    optionA.innerText = currentQuestion.answers.optionA
    optionB.innerText = currentQuestion.answers.optionB
    optionC.innerText = currentQuestion.answers.optionC
    optionD.innerText = currentQuestion.answers.optionD
}
quizQtn()

button.addEventListener('click', () => {

})





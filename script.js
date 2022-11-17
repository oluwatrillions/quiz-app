const qtn = [
    {
        question: "What programming language uses the console.log()",
        answers: {
            a: "GoLang",
            b: "Ruby",
            c: "JavaScript",
            d: "Python",
            correct: "c"
        }
    },
    {
        question: "Inside which HTML element do we put the JavaScript",
        answers: {
            a: "<script>",
            b: "<js>",
            c: "<link>",
            d: "<scripting>",
            correct: "a"
        }
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "The <body> section",
            b: "The <html> section",
            c: "The <link> section",
            d: "The <head> and <body> section would work just fine",
            correct: "d"
        }
    },
    {
        question: "JavaScript is a ___ -side programming language",
        answers: {
            a: "Both",
            b: "Server",
            c: "Client",
            d: "UI/UX",
            correct: "c"
        }
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: {
            a: "alertBox()",
            b: "console.table()",
            c: "alert.log()",
            d: "alert()",
            correct: "d"
        }
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: {
            a: "catch",
            b: "label",
            c: "default",
            d: "break",
            correct: "c"
        }
    },
    {
        question: "Which is the correct “if” statements to execute a STRICT comparison to see if “x” is equal to 2?",
        answers: {
            a: "if(!==)",
            b: "if(x===2)",
            c: "if(x=2)",
            d: "if(x==2)",
            correct: "b"
        }
    },
    {
        question: "What will the code return? Boolean(3 < 7)",
        answers: {
            a: "true",
            b: "false",
            c: "NaN",
            d: "SyntaxError",
            correct: "a"
        }
    },
    {
        question: "Which built in Array method removes the last element from the array",
        answers: {
            a: "push()",
            b: "pop()",
            c: "put()",
            d: "filo()",
            correct: "b"
        }
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        answers: {
            a: "toString()",
            b: "toLetter()",
            c: "toNumber()",
            d: "toFigure()",
            correct: "a"
        }
    },
    {
        question: "Which of the following function of String object is used to match a regular expression against a string?",
        answers: {
            a: "replace()",
            b: "equal()",
            c: "match()",
            d: "evaluate()",
            correct: "c"
        }
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        answers: {
            a: "anonymous function",
            b: "named function",
            c: "none of the above",
            d: "both of the above",
            correct: "d"
        }
    },
]

let score = 0
let currentQuiz = 0
let answer;

const question = document.querySelector('.question-container')
const quizSection = document.querySelector('.quiz-box')
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
    optionA.innerText = currentQuestion.answers.a
    optionB.innerText = currentQuestion.answers.b
    optionC.innerText = currentQuestion.answers.c
    optionD.innerText = currentQuestion.answers.d
}
quizQtn()

const selectedAnswer = () => {
    answerEL.forEach(chosenOption => {
        if (chosenOption.checked) {
            answer = chosenOption.dataset.answer
            console.log(answer);
        }
    })
    return answer
}

button.addEventListener('click', () => {
    const answer = selectedAnswer()
    if (answer) {
        if (answer === qtn[currentQuiz].answers.correct) {
            score++   
        }    
        currentQuiz++
        
        if (currentQuiz < qtn.length) {
            quizQtn()
        } else {
            quizSection.innerHTML = `
            <div> Your score is ${score}/${qtn.length}</div>
            <button onclick="location.reload()">Start Again</button>
            `
            quizSection.classList.add('result')
        }
    }
})





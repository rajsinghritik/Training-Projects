
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "Java", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 60; 
let quizTimer;


function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <div>
            ${question.options.map((option, index) => `
                <input type="radio" name="question${currentQuestionIndex}" value="${option}" id="option${index}">
                <label for="option${index}">${option}</label><br>
            `).join('')}
        </div>
    `;
}


function startTimer() {
    quizTimer = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("time-left").textContent = timer;
        } else {
            clearInterval(quizTimer);
            showResult();
        }
    }, 1000);
}


function checkAnswer() {
    const question = questions[currentQuestionIndex];
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    
    if (selectedOption && selectedOption.value === question.correctAnswer) {
        score++;
    }
}


function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
    document.getElementById("score").textContent = `Your score: ${score} out of ${questions.length}`;
}


document.getElementById("submit-btn").addEventListener("click", () => {
    checkAnswer();
    
   
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});


loadQuestion();
startTimer();

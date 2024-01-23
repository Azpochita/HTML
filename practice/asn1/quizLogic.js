document.addEventListener("DOMContentLoaded", function () {
    // Predefined set of questions and answers
    const quizData = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris",
        },
        {
            question: "Joe Biden is the president of what country?",
            choices: ["USA", "Canada", "Brazil", "Mexico"],
            correctAnswer: "USA",
        },
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris",
        },
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Paris",
        },
    ];

    // Variables to track quiz progress
    let currentQuestionIndex = 0;
    let userAnswers = [];

    // DOM elements
    const questionElement = document.querySelector(".question");
    const choicesList = document.querySelector(".choices");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");
    const resultsContainer = document.getElementById("resultsContainer");
    const userScoreElement = document.getElementById("userScore");
    const correctAnswersElement = document.getElementById("correctAnswers");
    
    // Highlight the user's answer in the choices list
    function highlightUserAnswer() {
        const choices = choicesList.children;
        for (let i = 0; i < choices.length; i++) {
            choices[i].classList.remove("selected");
        }

        const userAnswerIndex = userAnswers[currentQuestionIndex];
        if (userAnswerIndex !== undefined) {
            choices[userAnswerIndex].classList.add("selected");
        }
    }
    // Display current question and choices
    function displayQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        // Clear previous choices
        choicesList.innerHTML = "";

        // Display choices
        currentQuestion.choices.forEach((choice, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;
            listItem.addEventListener("click", () => selectAnswer(index));
            choicesList.appendChild(listItem);
        });

        // Highlight the user's answer if already selected
        highlightUserAnswer();
    }

    // Update userAnswers array with the selected answer index
    function selectAnswer(answerIndex) {
        userAnswers[currentQuestionIndex] = answerIndex;
        highlightUserAnswer();
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener("click", () => navigate(-1));
    nextBtn.addEventListener("click", () => navigate(1));
    submitBtn.addEventListener("click", submitQuiz);

    // Navigate to the previous or next question
    function navigate(direction) {
        const newIndex = currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < quizData.length) {
            currentQuestionIndex = newIndex;
            displayQuestion();
        }
    }

    // Submit the quiz and display results
    function submitQuiz() {
        let score = 0;

        // Calculate score
        quizData.forEach((question, index) => {
            if (userAnswers[index] === question.choices.indexOf(question.correctAnswer)) {
                score++;
            }
        });

        // Display results
        userScoreElement.textContent = score;
        correctAnswersElement.textContent = quizData.length;
        resultsContainer.style.display = "block";

        // Highlight correct and incorrect answers
        highlightUserAnswer();
    }

    // Initialize the quiz by displaying the first question
    displayQuestion();
});

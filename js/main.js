import { score, quizData, loadQuestion, currentQuestion, checkAnswer, displayScore } from './quiz.js';

const quizContainer = document.getElementById("quiz-container");
const optionsContainer = document.getElementById("optionsContainer");
const quizQuestion = document.getElementById("quizQuestion");
const submitButton = document.getElementById("submit");
const questionCountDisplay = document.getElementById("currentQuestionCount");

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

shuffleQuestions(quizData);

// Function to display a question in the DOM
function displayQuestion() {
  const currentData = loadQuestion(currentQuestion);
  quizQuestion.innerText = currentData.question;

  optionsContainer.innerHTML = ""; // Clear previous options

  currentData.options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `
      <input type="radio" name="option" value="${index}">
      ${option}
    `;
    optionsContainer.appendChild(optionLabel);
  });

  questionCountDisplay.innerText = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

displayQuestion();

const fullName = localStorage.getItem("name");
// Function to save quiz attempt to local storage
function saveQuizAttempt(score) {
  
  //const userData = JSON.parse(localStorage.getItem("users")); // Retrieve user data
 // const fullName = userData ? userData.name : "User"; // Get full name or default to "User"
  const attemptDate = new Date().toLocaleDateString(); // Get the current date

  // Retrieve existing attempts from local storage or initialize as empty
  const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];

  // Add the new attempt with the user's name
  attempts.push({
    name: fullName,
    date: attemptDate,
    score: score
  });

  // Save updated attempts back to local storage
  localStorage.setItem("quizAttempts", JSON.stringify(attempts));
}

// Handle answer submission
submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  checkAnswer(selectedOption.value);

  // Check if there are more questions or finish quiz
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    const finalScore = displayScore();
    saveQuizAttempt(finalScore); // Save the quiz attempt
    const userData = JSON.parse(localStorage.getItem("users"));
    quizContainer.innerHTML = `<h2 id="scoreHeader">Well done, ${fullName}! Your final score is: ${finalScore}</h2>`;
  }
});


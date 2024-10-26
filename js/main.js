// main.js
import { score, quizData, loadQuestion, currentQuestion, checkAnswer, displayScore } from './quiz.js';

const quizContainer = document.getElementById("quiz-container");
const optionsContainer = document.getElementById("optionsContainer");
const quizQuestion = document.getElementById("quizQuestion");
const submitButton = document.getElementById("submit");
const questionCountDisplay = document.getElementById("currentQuestionCount");

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

// Handle answer submission
submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  checkAnswer(selectedOption.value);

  // Check if there are more questions or finish quiz
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    quizContainer.innerHTML = `<h2 id="scoreHeader">Your final score is: ${displayScore()}</h2>`;
  }
});

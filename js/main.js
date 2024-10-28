import { score, quizData, loadQuestion, currentQuestion, checkAnswer, displayScore,shuffleQuestions } from './quiz.js';

const quizContainer = document.getElementById("quiz-container");
const optionsContainer = document.getElementById("optionsContainer");
const quizQuestion = document.getElementById("quizQuestion");
const submitButton = document.getElementById("submit");
const questionCountDisplay = document.getElementById("currentQuestionCount");



shuffleQuestions(quizData);

function displayQuestion() {
  const currentData = loadQuestion(currentQuestion);
  quizQuestion.innerText = currentData.question;

  optionsContainer.innerHTML = "";

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

function saveQuizAttempt(score) {
  const attemptDate = new Date().toLocaleDateString();
  const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];

  attempts.push({
    name: fullName,
    date: attemptDate,
    score: score
  });

  localStorage.setItem("quizAttempts", JSON.stringify(attempts));
}

submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  
  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  checkAnswer(selectedOption.value.toString());

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    const finalScore = displayScore();
    saveQuizAttempt(finalScore);
  
    const resultMessage = finalScore < 3 
      ? `<h2 id="scoreHeader">Sorry, you did not pass the quizz, ${fullName}! Your final score is: ${finalScore}</h2>`
      : `<h2 id="scoreHeader">Congratulations, ${fullName}! Your final score is: ${finalScore}</h2>`;
  
    quizContainer.innerHTML = `
      ${resultMessage}
      <button id="retryButton">Take Quiz Again</button>
    `;
  
    document.getElementById("retryButton").addEventListener("click", () => {
      location.href="quiz.html";
    });
  }
});

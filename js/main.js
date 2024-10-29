import { score, quizData, loadQuestion, currentQuestionIndex, checkAnswer, displayScore,shuffleQuestions } from './quiz.js';
import { saveQuizAttempt } from './scoreHistory.js';


const quizContainer = document.getElementById("quiz-container");
const optionsContainer = document.getElementById("optionsContainer");
const quizQuestion = document.getElementById("quizQuestion");
const submitButton = document.getElementById("submit");
const questionCountDisplay = document.getElementById("currentQuestionCount");



shuffleQuestions(quizData);

function displayQuestion() {
  const currentData = loadQuestion(currentQuestionIndex);
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

  questionCountDisplay.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

displayQuestion();

const fullName = localStorage.getItem("name");
const userEmail = localStorage.getItem("email");


submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  
  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  checkAnswer(selectedOption.value.toString());

  if (currentQuestionIndex < quizData.length) {
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
  
    document.getElementById("retryButton").addEventListener("click", function() {
      
          location.href = 'quiz.html'; // Redirect to quiz page if allowed
     
  });
  }
});

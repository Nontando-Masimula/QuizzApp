function saveQuizAttempt(score) {
  const fullName = localStorage.getItem("name");
  const attemptDate = new Date().toLocaleDateString();

  if (!fullName) return;


  const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];


  attempts.push({
    name: fullName,
    date: attemptDate,
    score: score
  });

  localStorage.setItem("quizAttempts", JSON.stringify(attempts));
}


function displayAttemptHistory() {
  const fullName = localStorage.getItem("name");
  const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];

  const historyContainer = document.getElementById("attempt-history");
  const userNameElement = document.getElementById("user-name");
  const errorMessageElement = document.getElementById("error-message");


  userNameElement.textContent = fullName ? `Quiz Attempt History for ${fullName}` : "User";

 
  historyContainer.innerHTML = "";


  if (attempts.length === 0 || attempts.filter(attempt => attempt.name === fullName).length === 0) {
    errorMessageElement.textContent = "No quiz attempts found for this user.";
    return;
  } else {
    errorMessageElement.textContent = ""; 
  }


  const userAttempts = attempts.filter(attempt => attempt.name === fullName);
  userAttempts.forEach(attempt => {
    const attemptItem = document.createElement("p");
    attemptItem.textContent = `Date: ${attempt.date} - Score: ${attempt.score}`;
    historyContainer.appendChild(attemptItem);
  });
}


document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("name")) {
    displayAttemptHistory();
  }
});

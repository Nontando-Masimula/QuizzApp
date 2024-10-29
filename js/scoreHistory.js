
const fullName = localStorage.getItem("name");
const userEmail = localStorage.getItem("email");
const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
const userAttempts = attempts.filter(attempt => attempt.email === userEmail);

function saveQuizAttempt(score) {
  const attemptDate = new Date().toLocaleDateString();
  



  attempts.push({
    name: fullName,
    email: userEmail,
    date: attemptDate,
    score: score
  });

  localStorage.setItem("quizAttempts", JSON.stringify(attempts));
}


function displayAttemptHistory() {
  

  const historyContainer = document.getElementById("attempt-history");
  const userNameElement = document.getElementById("user-name");
  const errorMessageElement = document.getElementById("error-message");


  userNameElement.textContent = fullName ? `Quiz Attempt History for ${fullName}` : "User";

 
  historyContainer.innerHTML = "";


  if (attempts.length === 0 || attempts.filter(attempt => attempt.email === userEmail).length === 0) {
    errorMessageElement.textContent = "No quiz attempts found for this user.";
    return;
  } else {
    errorMessageElement.textContent = ""; 
  }
    historyContainer.innerHTML = ""; // Clear any previous content
  
    userAttempts.forEach(attempt => {
      const attemptItem = document.createElement("p");
      attemptItem.textContent = `Date: ${attempt.date} - Score: ${attempt.score}`;
      historyContainer.appendChild(attemptItem);
    });
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    if ( localStorage.getItem("name")) {
      displayAttemptHistory(); // Show history if user is logged in
    }
  });

  export{saveQuizAttempt}
  
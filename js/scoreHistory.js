// Function to save a quiz attempt with the logged-in user’s name
function saveQuizAttempt(score) {
    const fullName = localStorage.getItem("name"); // Retrieve logged-in user's full name
    const attemptDate = new Date().toLocaleDateString(); // Get the current date

    if (!fullName) return; // Ensure a user is logged in before saving

    // Retrieve existing attempts from local storage or initialize as empty
    const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
    
    // Add the new attempt with user-specific data
    attempts.push({
        name: fullName,
        date: attemptDate,
        score: score
    });

    // Save updated attempts back to local storage
    localStorage.setItem("quizAttempts", JSON.stringify(attempts));
}

// Function to display only the logged-in user’s attempt history
function displayAttemptHistory() {
    const fullName = localStorage.getItem("name");
    const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
  
    // Filter attempts to show only those for the logged-in user
    const userAttempts = attempts.filter(attempt => attempt.name === fullName);
  
    const historyContainer = document.getElementById("attempt-history");
    historyContainer.innerHTML = ""; // Clear any previous content
  
    userAttempts.forEach(attempt => {
      const attemptItem = document.createElement("p");
      attemptItem.textContent = `Date: ${attempt.date} - Score: ${attempt.score}`;
      historyContainer.appendChild(attemptItem);
    });
  }
  
  // Call displayAttemptHistory on page load or history view
  document.addEventListener("DOMContentLoaded", function () {
    if ( localStorage.getItem("name")) {
      displayAttemptHistory(); // Show history if user is logged in
    }
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const fullName = localStorage.getItem("name");
    const welcomeMessage = document.getElementById("welcome-message");

    if (isLoggedIn && fullName) {
        welcomeMessage.innerText = `Welcome, ${fullName}!`;
    } else {
        location.href = 'login.html'; 
    }
});




function logout() {
    localStorage.removeItem("name");
    location.href = 'login.html';
    
}







// function canAttemptQuiz() {
//     const userEmail = localStorage.getItem("email"); 
//     const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];

//     // Count attempts only for the logged-in user
//     const userAttempts = attempts.filter(attempt => attempt.email === userEmail);

//     // Allow only 3 attempts
//     return userAttempts.length < 3;
// }


// document.getElementById("startQuizButton").addEventListener("click", function() {
//     if (canAttemptQuiz()) {
//         location.href = 'quiz.html'; 
//     } else {
//         alert("You have reached the maximum number of quiz attempts.");
//         location.href = 'index.html'; 
//     }
// });
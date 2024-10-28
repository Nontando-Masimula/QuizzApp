document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const fullName = localStorage.getItem("name");
    const welcomeMessage = document.getElementById("welcome-message");

    if (isLoggedIn && fullName) {
        welcomeMessage.innerText = `Welcome, ${fullName}!`;
    } else {
        location.href = 'login.html'; // Redirect to login if not logged in
    }
});



function logout() {
    localStorage.removeItem("name"); // Clear the user's name or all user-related data
    location.href = 'login.html'; // Redirect to login page
}

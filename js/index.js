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

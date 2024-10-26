document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for both the registration and login forms
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", storeUserDetails);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", loginUser);
    }
});

const users = JSON.parse(localStorage.getItem('users')) || []; // Retrieve or initialize users array

// Register User Function
function storeUserDetails(event) {
    event.preventDefault();

    const name = document.getElementById("name").value; // Ensure this matches your HTML
    const email = document.getElementById("reg-username").value; // Change to reg-username
    const password = document.getElementById("reg-password").value; // Change to reg-password

    // Check if the email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("This email is already registered. Please log in instead.");
        return;
    }

    // Create new user and add to users array
    const newUser = { name, email, password };
    users.push(newUser);

    // Save updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page after registration
    alert("Registration successful! Please log in.");
    location.href = 'login.html';
}

// Login User Function
function loginUser(event) {
    event.preventDefault();

    // Update these lines to reference the correct IDs
    const email = document.getElementById("username").value; // Change to username
    const password = document.getElementById("password").value;

    // Find user in stored users array
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // If user exists, log in successfully and store in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert("Login successful!");
        location.href = 'home.html'; // Redirect to home page or quiz
    } else {
        // If user does not exist, prompt to register
        alert("Invalid email or password. Please register if you haven't.");
        location.href = 'register.html'; // Redirect to registration page
    }
}

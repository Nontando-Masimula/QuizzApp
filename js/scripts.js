function storeToLocalStorage(user) {
    // Retrieve existing users from local storage, or initialize as an empty array if none
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to the array
    users.push(user);

    // Convert the array to JSON and store it in local storage
    localStorage.setItem("users", JSON.stringify(users));
    retrieveUser()
}


function retrieveUser(){
        return JSON.parse(localStorage.getItem("users")) || [];
    }





document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for both the registration and login forms
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", storeUserDetails);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", loginUser);
    }
});

 // Retrieve or initialize users array

// Register User Function
function storeUserDetails() {
    event.preventDefault();

    const name = document.getElementById("name").value; // Ensure this matches your HTML
    const email = document.getElementById("email").value; // Change to reg-username
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value // Change to reg-password


    if(password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const users = retrieveUser();
    // Check if the email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert(`${email} is already registered. Please log in instead.`);
        return;
    }

    

    // Create new user and add to users array
    const newUser = {
        id: Date.now(),
        name, 
        email, 
        password };

    // Save updated users array in local storage
    storeToLocalStorage(newUser);

    // Redirect to login page after registration
    alert(`${name} Registration successful! Please log in.`);
    location.href = 'login.html';
}

// Login User Function
function loginUser(event) {
    event.preventDefault();

    // Update these lines to reference the correct IDs
    const email = document.getElementById("username").value; // Change to username
    const password = document.getElementById("password").value;

    // Find user in stored users array
    const users = retrieveUser();
    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // If user exists, log in successfully and store in localStorage
        localStorage.setItem("name", user.name);
        localStorage.setItem("isLoggedIn", "true");
        alert(`${user.name} Login successfull!`);
        location.href = 'index.html'; // Redirect to home page or quiz
    }
    else{
        alert("Invalid email or password. Please try again.");
    }
}

 // Export functions for use in other scripts or modules. This allows them to be used without needing to re-import them in each script.retrieveUser }; // Export functions for use in other scripts or modules. This allows them to be used without needing to re-import them in each script.

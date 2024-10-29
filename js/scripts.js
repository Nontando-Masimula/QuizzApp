function storeToLocalStorage(user) {
   
    let users = JSON.parse(localStorage.getItem("users")) || [];

 
    users.push(user);


    localStorage.setItem("users", JSON.stringify(users));
    retrieveUser()
}


function retrieveUser(){
        return JSON.parse(localStorage.getItem("users")) || [];
    }





document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", storeUserDetails);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", loginUser);
    }
});


function storeUserDetails() {
    event.preventDefault();

    const name = document.getElementById("name").value; 
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value 


    if(password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if(!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    const users = retrieveUser();
    
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert(`${email} is already registered. Please log in instead.`);
        return;
    }

    

    const newUser = {
        id: Date.now(),
        name, 
        email, 
        password };

    storeToLocalStorage(newUser);


    alert(`${name} Registration successful! Please log in.`);
    location.href = 'login.html';
}


function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("username").value; 
    const password = document.getElementById("password").value;

    const users = retrieveUser();
    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {

        localStorage.setItem("name", user.name);
        localStorage.setItem("email", user.email);
        localStorage.setItem("isLoggedIn", "true");
        location.href = 'index.html'; 
    }
    else{
        alert("Invalid email or password. Please try again.");
    }
}

 
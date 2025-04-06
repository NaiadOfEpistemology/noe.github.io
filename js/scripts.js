document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (name && email && password) {
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userPassword", password);
                alert("Sign-up successful! You can now log in.");
                window.location.href = "login.html";
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let loginEmail = document.getElementById("login-email").value;
            let loginPassword = document.getElementById("login-password").value;

            let storedEmail = localStorage.getItem("userEmail");
            let storedPassword = localStorage.getItem("userPassword");

            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect after login
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }
});

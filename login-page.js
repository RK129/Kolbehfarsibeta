
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "cargo" && password === "learningfarsi") {
        location.assign("http://127.0.0.1:5500/p.html")
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
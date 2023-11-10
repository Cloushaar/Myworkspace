const LoginForm = document.querySelector("#login-form");
const LoginInput = LoginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginformSubmit(event){
    event.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASS);
    const username = LoginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

LoginForm.addEventListener("submit", onLoginformSubmit);

function paintGreeting(username){
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

if (savedUsername === null) {
    LoginForm.classList.remove(HIDDEN_CLASS);
    LoginForm.addEventListener("submit", onLoginformSubmit);
}
else
    paintGreeting(savedUsername);

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const savedUsername=localStorage.getItem("username");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function paintGreetings() {
    const username = localStorage.getItem("username");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
}

if(savedUsername===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);
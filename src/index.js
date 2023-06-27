import "./index.html";
import "./styles/styles.scss";


const emailEl = document.querySelector("#email");
const form =document.querySelector("#container-form");
const isRequired = (value) => value === "" ? false : true;
const isEmailValid = (email) => {
    const regex =   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

const showError = (message) => {
    const formField = document.querySelector("#email");
    formField.classList.add("error");
    const error = form.querySelector("small");
    error.textContent = message;
}

const showSuccess = (input) => {
    const formField = document.querySelector("#email");
    formField.classList.remove("error");
    const error = form.querySelector("small");
    error.textContent = "";
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    
    if (!isEmailValid(email)){
        showError("Valid email required");
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const idFormValid =checkEmail();
    if(idFormValid) {
        window.location.assign("submit.html");
    }
});
const email = document.querySelector("input");
const form = document.querySelector("form");
const error = document.querySelector(".error");
const main = document.querySelector("main");
const thank = document.querySelector(".thank");
const dismiss=document.querySelector(".btn");
const value=document.querySelector('span');


function clearError() {
    error.classList.add("hidden");
    email.classList.remove("invalid");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!email.checkValidity()) {
        error.style.display='block'
        email.classList.add("invalid");
    } else {
        main.classList.add("hidden");
        thank.classList.remove("hidden");
        value.textContent = email.value.trim(); 
        error.classList.add("hidden");
        email.classList.remove("invalid");
    }
});

email.addEventListener("input", clearError);
email.addEventListener("change", clearError);


dismiss.addEventListener('click',()=> {
        main.classList.remove("hidden");
        thank.classList.add("hidden");
        form.reset();
        clearError();
})
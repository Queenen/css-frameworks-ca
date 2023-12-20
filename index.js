const openLoginFormBtn = document.querySelector("#openLoginForm");
const loginForm = document.querySelector("#loginForm");
const initialBtns = document.querySelector("#initialBtns");
const usernameInput = document.querySelector("#floatingInputUsername");

openLoginFormBtn.addEventListener("click", () => {
  loginForm.classList.remove("d-none");
  initialBtns.classList.add("d-none");
});

loginForm.addEventListener("submit", () => {
  sessionStorage.setItem("username", usernameInput.value);
});

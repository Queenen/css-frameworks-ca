const openLoginFormBtn = document.querySelector("#openLoginForm");
const loginForm = document.querySelector("#loginForm");
const initialBtns = document.querySelector("#initialBtns");

openLoginFormBtn.addEventListener("click", () => {
  loginForm.classList.remove("d-none");
  initialBtns.classList.add("d-none");
});

const usernameField = document.querySelector("#addUsername");
const username = sessionStorage.getItem("username");
const toggleFollowersBtn = document.querySelector("#toggleFollowers");
const toggleFollowingsBtn = document.querySelector("#toggleFollowings");
const followersDropdown = document.querySelector("#followersDropdown");
const followingsDropdown = document.querySelector("#followingsDropdown");

usernameField.innerHTML = `${username}`;

toggleFollowersBtn.addEventListener("click", () => {
  followersDropdown.classList.toggle("d-none");
  if (!followersDropdown.classList.contains("d-none")) {
    followersDropdown.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

toggleFollowingsBtn.addEventListener("click", () => {
  followingsDropdown.classList.toggle("d-none");
  if (!followingsDropdown.classList.contains("d-none")) {
    followingsDropdown.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

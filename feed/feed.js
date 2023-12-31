const filterBtn = document.querySelector("#filterButton");
const filterOptions = document.querySelector("#filterPosts");

filterBtn.addEventListener("click", () => {
  filterOptions.classList.toggle("d-none");
});

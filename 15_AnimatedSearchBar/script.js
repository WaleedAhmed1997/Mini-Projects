const searchContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchContainerEl.classList.toggle("active");
});

const containerEl = document.querySelector(".container");
const popupContainerEl = document.querySelector(".popup-container");
const btnEl = document.querySelector(".btn");
const closebtnEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

closebtnEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});

const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

// Triggers btn click event
btnEl.addEventListener("click", () => {
  createPassword();
});

// Triggers input click event
copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

// Creating Password
function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomPass = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomPass, randomPass + 1);
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " copied";
}

// Copying Password
function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}

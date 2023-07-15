const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let idx = 0;
upadateNum();

function upadateNum() {
  counterEl.innerText = idx + "%";
  barEl.style.width = idx + "%";
  idx++;

  if (idx < 101) {
    setTimeout(upadateNum, 20);
  }
}

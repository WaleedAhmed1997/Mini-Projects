const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("1 January, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;
  console.log(gap);
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  console.log(day);

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  setTimeout(() => {
    updateCountdown();
  }, 1000);
}

// const dayEl = document.getElementById("day");
// const hourEl = document.getElementById("hour");
// const minuteEl = document.getElementById("minute");
// const secondEl = document.getElementById("second");

// const newYearTime = new Date("1 Jan, 2024 00:00:00").getTime();

// updateCountdown();
// function updateCountdown() {
//   const now = new Date().getTime();
//   const gap = newYearTime - now; // Time remaining until NewYearTime
//   console.log(`gap ${gap}`);
//   const second = 1000;
//   const minute = 60 * second;
//   const hour = 60 * minute;
//   const day = hour * 24;
//   console.log(`day ${day}`);

//   const d = Math.floor(gap / day);
//   console.log(`d ${d}`);
//   const h = Math.floor((gap % day) / hour);
//   console.log(`h ${h}`);
//   const m = Math.floor((gap % hour) / minute);
//   console.log(`m ${m}`);
//   const s = Math.floor((gap % minute) / second);
//   console.log(`s ${s}`);

//   dayEl.innerText = d;
//   hourEl.innerText = h;
//   minuteEl.innerText = m;
//   secondEl.innerText = s;

//   setTimeout(() => {
//     updateCountdown();
//   }, 1000);
// }

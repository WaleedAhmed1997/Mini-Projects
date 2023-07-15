const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  const currentTime = new Date();

  setTimeout(updateClock, 1000);
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const hourToDeg = (hour / 12) * 360;
  const minuteToDeg = (minute / 60) * 360;
  const secondToDeg = (second / 60) * 360;

  hourEl.style.transform = `rotate(${hourToDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteToDeg}deg)`;
  secondEl.style.transform = `rotate(${secondToDeg}deg)`;
}

updateClock();

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const bodyBgr = document.body;

let interval;

btnStart.addEventListener("click", startInterval);
btnStop.addEventListener("click", stopInterval);

function startInterval() {
  btnStart.disabled = true;
  interval = setInterval(() => {
    bodyBgr.style.background = randomColor();
  }, 1000);
}

function stopInterval() {
  btnStart.disabled = false;
  clearInterval(interval);
}

function randomColor() {
  const indexColor = randomIntegerFromInterval(0, colors.length - 1);
  return colors[indexColor];
}

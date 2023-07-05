function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backColorRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-start]');

const btnStopRef = document.querySelector('[data-stop]');
let timerId = null;

const onColor = () => {
  timerId = setInterval(() => {
    const changeColor = getRandomHexColor();
    backColorRef.style.backgroundColor = changeColor;
  }, 1000);
  btnStartRef.disabled = true;
  btnStopRef.disabled = false;
};

btnStartRef.addEventListener('click', onColor);

btnStopRef.addEventListener('click', () => {
  clearInterval(timerId);
  btnStartRef.disabled = false;
  btnStopRef.disabled = true;
});

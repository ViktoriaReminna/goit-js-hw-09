import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const inputRef = document.querySelector('#datetime-picker');

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };
// flatpickr(selector, options);

// const timer = {
//   start() {
//     const startTime = Date.now();
//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const { hours, mins, secs } = getTimeComponents(deltaTime);
//   console.log('start -> currentTime', currentTime);
//   console.log(currentTime - startTime);

//   console.log(`${hours}:${mins}:${secs}`);

//       console.log(
//         `${pad(new Date(deltaTime).getUTCHours())}: ${pad(
//           new Date(deltaTime).getMinutes()
//         )}: ${pad(new Date(deltaTime).getSeconds())}`
//       );
//     }, 1000);
//   },
// };
// timer.start();

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { hours, mins, secs };
// }

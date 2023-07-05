import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    const targetDate = new Date(refs.input.value).getTime();
    const currentTime = Date.now();
    const timeRemaining = targetDate - currentTime;

    if (timeRemaining <= 0) {
      Notiflix.Notify.warning('Please select a future date.');
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timeRemaining = targetDate - currentTime;

      if (timeRemaining <= 0) {
        this.stop();
        updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        Notiflix.Notify.success('Countdown completed!');
        return;
      }

      const time = convertMs(timeRemaining);
      updateTimerDisplay(time);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateStartButton() {
  const selectedDate = new Date(refs.input.value).getTime();
  const currentTime = Date.now();

  if (selectedDate <= currentTime) {
    refs.startBtn.disabled = true;
  } else {
    refs.startBtn.disabled = false;
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] && selectedDates[0] <= Date.now()) {
      Notiflix.Notify.warning('Please select a future date.');
    }

    updateStartButton();
  },
};

flatpickr(refs.input, options);

const onClick = () => {
  if (refs.startBtn.disabled) {
    return;
  }

  timer.start();
};

refs.startBtn.addEventListener('click', onClick);
refs.startBtn.disabled = true;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

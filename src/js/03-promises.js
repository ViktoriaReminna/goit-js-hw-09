import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const createBtnEl = formEl.querySelector('button');
const firstDelayEl = formEl.querySelector('input[name="delay"]');
const delayStepEl = formEl.querySelector('input[name="step"]');
const amountEl = formEl.querySelector('input[name="amount"]');

const onSubmit = event => {
  event.preventDefault();

  const firstDelay = Number(firstDelayEl.value);

  const step = Number(delayStepEl.value);

  const amount = Number(amountEl.value);
  let delay = firstDelay;
  for (i = 0; i < amount; i++) {
    const position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
};
formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

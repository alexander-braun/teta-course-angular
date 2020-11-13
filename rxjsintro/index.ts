const { fromEvent } = Rx;
const { map } = RxOperators;

const input = document.createElement('input');

const container = document.querySelector('.container');
container.appendChild(input);

const observable = fromEvent(input, 'input').pipe(
  map((event) => event.target.value),
  map((value) => parseInt(value)),
  map((value) => {
    if (isNaN(value)) {
      throw new Error('Enter a number');
    } else {
      return value;
    }
  })
);

observable.subscribe({
  next(value) {
    console.log(value, 'in obsv');
  },
  error() {
    throw new Error('This is an error');
  },
});

observable;

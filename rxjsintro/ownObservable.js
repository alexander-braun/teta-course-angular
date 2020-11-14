const { Observable } = Rx;

const observable = new Observable((subscriber) => {
  // Throw value 1 into pipeline
  subscriber.next(1);

  // Marks observable as complete. No more values will come out
  subscriber.complete();

  // Emit error, no more values will come out
  subscriber.error(new Error('Chaos ensued'));
}).pipe();

observable.subscribe(
  (value) => console.log('next val', value),
  (err) => console.error('bad thing', err.message),
  () => console.log('complete')
);

observable;

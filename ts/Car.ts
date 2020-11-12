export class Car {
  year: number;

  constructor() {
    this.year = 10;
  }

  drive(speed: number) {
    console.log('hello', speed);
  }
}

const myCar = new Car();
myCar.drive(10);
console.log(myCar.year);

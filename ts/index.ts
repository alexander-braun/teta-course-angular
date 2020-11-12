import { Car } from './Car';

const myCar = new Car();
console.log(myCar.year);

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

console.log(valueWrapper<number>(3));
console.log(valueWrapper<boolean>(true));

import { AbstractControl, ValidatorFn } from '@angular/forms';

export class MathValidators {
  // With static we can only access the values provided to the function nothing outside.
  static addition(
    target: string,
    sourceOne: string,
    sourceTwo: string
  ): ValidatorFn {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const a = form.value[sourceOne];
      const b = form.value[sourceTwo];

      if (a + b === +sum) {
        return null;
      }
      return { addition: true };
    };
  }
}

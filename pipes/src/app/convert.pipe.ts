import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) {
      return 0;
    }

    const newValue = value as number;
    let targetUnit: string;

    for (const arg of args) {
      if (arg === 'm') {
        targetUnit = 'm';
      } else if (arg === 'cm') {
        targetUnit = 'cm';
      } else if (arg === 'km') {
        targetUnit = 'km';
      }
    }

    switch (targetUnit) {
      case 'km':
        return `${newValue * 1.60934} ${'km'}`;
      case 'm':
        return `${newValue * 1.60934 * 1000} ${'m'}`;
      case 'cm':
        return `${newValue * 1.60934 * 1000 * 100} ${'cm'}`;
      default:
        throw new Error('Target unit not supported!');
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };
  miles: number;

  onNameChange(value: string): void {
    this.name = value;
  }

  onDateChange(value: string): void {
    this.date = value;
  }

  onAmountChange(value: string): void {
    this.amount = +value;
  }

  onHeightChange(value: string): void {
    this.height = +value;
  }

  onMilesChange(value: string): void {
    this.miles = +value;
  }
}

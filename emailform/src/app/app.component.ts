import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email = '';

  constructor() {}

  onSubmit(): void {
    console.log(this.email);
  }
}
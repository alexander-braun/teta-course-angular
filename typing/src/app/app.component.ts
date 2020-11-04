import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence(15);
  textCorrect = false;
  enteredText = '';

  onInput(text: string): void {
    if (this.randomText === text) {
      this.textCorrect = true;
    }
    this.enteredText = text;
  }

  compare(char: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'black';
    } else if (char === enteredLetter) {
      return 'green';
    } else {
      return 'red';
    }
  }
}

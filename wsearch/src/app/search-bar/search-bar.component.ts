import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term = '';
  @Output() submitTerm = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onInput(value: string): void {
    this.term = value;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitTerm.emit(this.term);
  }
}

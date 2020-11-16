import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private controlName: NgControl) {}

  ngOnInit(): void {
    this.controlName.control.parent.valueChanges
      .pipe(
        map(({ a, b, answer }) => {
          return Math.abs((a + b - answer) / (a + b));
        })
      )
      .subscribe((value) => {
        if (value <= 0.2 && value !== 0) {
          this.element.nativeElement.classList.add('close');
        } else {
          this.element.nativeElement.classList.remove('close');
        }
      });
  }
}

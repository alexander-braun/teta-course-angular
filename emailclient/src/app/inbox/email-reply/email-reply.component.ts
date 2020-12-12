import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email: Email;

  constructor() {}

  ngOnInit(): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: 'RE: ' + this.email.subject,
      text: `\n\n\n ---------- ${
        this.email.from
      } wrote:\n> ${this.email.text.trim().replace(/\n/gi, '\n> ')}`,
    };
  }

  onSubmit(email: Email): void {}
}

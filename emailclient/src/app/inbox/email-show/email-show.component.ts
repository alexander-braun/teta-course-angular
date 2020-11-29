import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: Email;
  constructor(private activatedRoute: ActivatedRoute) {
    this.email = activatedRoute.snapshot.data.email;
    this.activatedRoute.data.subscribe((data) => {
      this.email = data.email;
    });
  }

  ngOnInit(): void {}
}

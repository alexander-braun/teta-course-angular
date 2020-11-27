import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private httpClient: HttpClient) {}

  getEmails(): Observable<EmailSummary[]> {
    return this.httpClient.get<EmailSummary[]>(this.rootUrl + '/emails');
  }
}

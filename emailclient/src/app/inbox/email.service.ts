import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

export interface Email {
  id: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
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

  getEmail(id: string): Observable<Email> {
    return this.httpClient.get<Email>(this.rootUrl + '/emails/' + id);
  }

  sendEmail(email: Email): Observable<Email> {
    return this.httpClient.post<Email>(`${this.rootUrl}/emails`, email);
  }
}

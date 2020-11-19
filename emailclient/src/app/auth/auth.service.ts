import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string): Observable<{ available: boolean }> {
    return this.httpClient.post<{ available: boolean }>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }
}

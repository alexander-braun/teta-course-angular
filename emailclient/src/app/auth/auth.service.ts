import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface UsernameResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com/auth/';
  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string): Observable<UsernameResponse> {
    return this.httpClient.post<UsernameResponse>(this.rootUrl + 'username', {
      username,
    });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.httpClient.post<SignupResponse>(
      this.rootUrl + 'signup',
      credentials
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

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

interface IsSignedInResponse {
  username: string;
  authenticated: boolean;
}

interface Signin {
  username: string;
  password?: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com/auth/';
  signedIn$ = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string): Observable<UsernameResponse> {
    return this.httpClient.post<UsernameResponse>(this.rootUrl + 'username', {
      username,
    });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.httpClient
      .post<SignupResponse>(this.rootUrl + 'signup', credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth(): Observable<IsSignedInResponse> {
    return this.httpClient
      .get<IsSignedInResponse>(this.rootUrl + 'signedin')
      .pipe(
        tap((val) => {
          this.signedIn$.next(val.authenticated);
        })
      );
  }

  signout(): Observable<{}> {
    return this.httpClient.post(this.rootUrl + 'signout', {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signin(credentials: SigninCredentials): Observable<Signin> {
    return this.httpClient
      .post<Signin>(this.rootUrl + 'signin', credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }
}

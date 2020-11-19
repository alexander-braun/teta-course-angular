import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    formControl: FormControl
  ): Observable<ValidationErrors | null> => {
    const { value } = formControl;
    return this.authService.usernameAvailable(value).pipe(
      map((val) => {
        if (val.available) {
          return null;
        }
      }),
      catchError((err: { error: { username: string } }) => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
    // tslint:disable-next-line: semicolon
  };
}

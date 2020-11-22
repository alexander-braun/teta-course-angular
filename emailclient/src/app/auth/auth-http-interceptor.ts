import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      withCredentials: true,
    });
    return next.handle(newReq).pipe(
      tap((val) => {
        if (val.type === HttpEventType.Sent) {
          console.log('Request sent to server');
        }

        if (val.type === HttpEventType.Response) {
          console.log('Got response from api: ', val);
        }
      })
    );
  }
}

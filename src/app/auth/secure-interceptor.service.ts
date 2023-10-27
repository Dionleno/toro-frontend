import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { filter, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class SecureInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { 
      console.log("SecureInterceptor");
      
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return this.auth.idTokenClaims$.pipe(
        filter(token =>typeof token?.__raw === 'string'),
        mergeMap(token => {  
          const tokenReq = req.clone({
            setHeaders: { Authorization: `Bearer ${token?.__raw}` }
          });
          return next.handle(tokenReq);
        }),
        catchError(err => throwError(err))
        
    )  
  }
}
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@./auth/service';

@Injectable({
  providedIn: 'root'

})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    const headerToken = localStorage.getItem('authToken');
    if(headerToken) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ${headerToken}'
      }
  });
    }
    return next.handle(tokenizedReq);

}
}


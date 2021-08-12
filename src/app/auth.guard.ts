import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private_authService: AuthService,
              private_router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('authToken'))
    {
      return true;
    }
this.router.navigate(['/login']), { queryParams: { returnUrl: state.url }});
return false;
    }
  }
   

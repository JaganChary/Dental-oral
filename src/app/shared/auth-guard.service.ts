import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router
  ) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    
    if(token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    // ✅ Get expected role from route
    const expectedRole = route.data['role'];

    if (expectedRole && role !== expectedRole) {
      alert("Access Denied!");
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
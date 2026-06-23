import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './admin-sidenav.html',
  styleUrl: './admin-sidenav.css',
})
export class AdminSidenav {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}

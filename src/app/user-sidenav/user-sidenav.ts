import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-sidenav',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './user-sidenav.html',
  styleUrl: './user-sidenav.css',
})
export class UserSidenav {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}

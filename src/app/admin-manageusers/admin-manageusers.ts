import { Component } from '@angular/core';
import { AdminSidenav } from '../admin-sidenav/admin-sidenav';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  standalone:true,
  imports: [AdminSidenav,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './admin-manageusers.html',
  styleUrl: './admin-manageusers.css',
})
export class AdminManageusersComponent {
  users = ['User01', 'User02', 'User03', 'User04', 'User05'];
}

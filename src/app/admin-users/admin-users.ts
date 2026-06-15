import { Component } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  standalone:true,
  imports: [AdminSidebar,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsersComponent {
  users = ['User01', 'User02', 'User03', 'User04', 'User05'];
}

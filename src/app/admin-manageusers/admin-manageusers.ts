import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidenav } from '../admin-sidenav/admin-sidenav';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-manageusers',
  standalone:true,
  imports: [AdminSidenav,RouterLink,RouterLinkActive,RouterModule,CommonModule],
  templateUrl: './admin-manageusers.html',
  styleUrl: './admin-manageusers.css',
})
export class AdminManageusersComponent {
  users = ['User01', 'User02', 'User03', 'User04', 'User05'];

  deleteUser(user: string) {
    if (confirm(`Delete ${user}?`)) {
      this.users = this.users.filter(u => u !== user);
    }
  }
}

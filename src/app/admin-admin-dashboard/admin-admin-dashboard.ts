import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AdminSidenav } from '../admin-sidenav/admin-sidenav';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule,RouterLinkActive,RouterLink,AdminSidenav],
  templateUrl: './admin-admin-dashboard.html',
  styleUrl: './admin-admin-dashboard.css',
})
export class AdminComponent {}
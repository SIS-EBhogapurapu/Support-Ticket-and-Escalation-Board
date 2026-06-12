import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule,RouterLinkActive,RouterLink,AdminSidebar],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent {}
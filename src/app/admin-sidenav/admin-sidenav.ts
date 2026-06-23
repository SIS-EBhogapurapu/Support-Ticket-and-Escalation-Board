import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './admin-sidenav.html',
  styleUrl: './admin-sidenav.css',
})
export class AdminSidenav {}

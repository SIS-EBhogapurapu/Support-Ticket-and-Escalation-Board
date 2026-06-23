import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-sidenav',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './user-sidenav.html',
  styleUrl: './user-sidenav.css',
})
export class UserSidenav {}

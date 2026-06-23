import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './user-sidenav.html',
  styleUrl: './user-sidenav.css',
})
export class UserSidenav {}

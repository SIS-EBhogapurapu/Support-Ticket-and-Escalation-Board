import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-users-tq',
  standalone:true,
  imports: [RouterModule,RouterLink,RouterLinkActive,Sidebar],
  templateUrl: './users-tq.html',
  styleUrl: './users-tq.css',
})
export class UsersTqComponent {}

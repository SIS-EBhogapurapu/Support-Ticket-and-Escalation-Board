import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-users-td',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule,Sidebar],
  templateUrl: './users-td.html',
  styleUrl: './users-td.css',
})
export class UsersTdComponent {}

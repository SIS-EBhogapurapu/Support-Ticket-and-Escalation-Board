import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive,Sidebar],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent {}
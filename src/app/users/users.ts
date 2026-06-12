import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { UsersTdesComponent } from '../users-tdes/users-tdes';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive,Sidebar,UsersTdesComponent],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent {}
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserSidenav } from '../user-sidenav/user-sidenav';
import { UserTicketdescriptionComponent } from '../users-ticketdescription/users-ticketdescription';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive,UserSidenav,UserTicketdescriptionComponent],
  templateUrl: './users-dashboard.html',
  styleUrls: ['./users-dashboard.css']
})
export class UsersDashboardComponent {}
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserSidenav } from '../user-sidenav/user-sidenav';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-users-dashboard',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive,UserSidenav],
  templateUrl: './users-dashboard.html',
  styleUrls: ['./users-dashboard.css']
})
export class UsersDashboardComponent implements OnInit {
  openCount: number = 0;
  closedCount: number = 0;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    const tickets = this.ticketService.getAll();
    this.openCount = tickets.filter(t => t.status === 'Open').length;
    this.closedCount = tickets.filter(t => t.status === 'Closed').length;
  }
}

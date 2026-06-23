import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AdminSidenav } from '../admin-sidenav/admin-sidenav';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-admin-admin-dashboard',
  standalone: true,
  imports: [RouterModule,RouterLinkActive,RouterLink,AdminSidenav],
  templateUrl: './admin-admin-dashboard.html',
  styleUrl: './admin-admin-dashboard.css',
})
export class AdminAdminDashboardComponent implements OnInit {
  openCount: number = 0;
  closedCount: number = 0;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    const tickets = this.ticketService.getAll();
    this.openCount = tickets.filter(t => t.status === 'Open').length;
    this.closedCount = tickets.filter(t => t.status === 'Closed').length;
  }
}
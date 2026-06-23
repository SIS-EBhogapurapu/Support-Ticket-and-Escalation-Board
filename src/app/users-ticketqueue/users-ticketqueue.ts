import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserSidenav } from '../user-sidenav/user-sidenav';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TicketService, Ticket } from '../services/ticket.service';

@Component({
  selector: 'app-users-ticketqueue',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule,UserSidenav,FormsModule,CommonModule],
  templateUrl: './users-ticketqueue.html',
  styleUrl: './users-ticketqueue.css',
})
export class UsersTicketqueueComponent implements OnInit {
  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];

  searchText: string = '';
  selectedPriority: string = '';
  selectedStatus: string = '';

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.tickets = this.ticketService.getAll();
    this.filteredTickets = [...this.tickets];
  }

  applyFilters() {
    this.filteredTickets = this.tickets.filter(ticket => {
      const matchesSearch = ticket.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesPriority = this.selectedPriority === '' || ticket.priority === this.selectedPriority;
      const matchesStatus = this.selectedStatus === '' || ticket.status === this.selectedStatus;
      return matchesSearch && matchesPriority && matchesStatus;
    });
  }
}

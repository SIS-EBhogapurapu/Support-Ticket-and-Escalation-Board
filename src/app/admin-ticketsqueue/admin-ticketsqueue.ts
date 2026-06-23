import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AdminSidenav } from '../admin-sidenav/admin-sidenav';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TicketService, Ticket } from '../services/ticket.service';

@Component({
  selector: 'app-admin-ticketsqueue',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule,AdminSidenav,FormsModule,CommonModule],
  templateUrl: './admin-ticketsqueue.html',
  styleUrl: './admin-ticketsqueue.css',
})
export class AdminTicketsqueueComponent implements OnInit {
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

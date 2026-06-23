import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UserSidenav } from '../user-sidenav/user-sidenav';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-ticketqueue',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule,UserSidenav,FormsModule],
  templateUrl: './users-ticketqueue.html',
  styleUrl: './users-ticketqueue.css',
})
export class UsersTicketqueueComponent {
  tickets = [
    { id: 'T001', name: 'Dummy1', priority: 'High', status: 'Open', owner: 'USER' },
    { id: 'T002', name: 'Dummy2', priority: 'Moderate', status: 'Closed', owner: 'USER' },
    { id: 'T003', name: 'Dummy3', priority: 'Low', status: 'Open', owner: 'USER' }
  ];

  filteredTickets = [...this.tickets];

  searchText: string = '';
  selectedPriority: string = '';
  selectedStatus: string = '';

  applyFilters() {
    this.filteredTickets = this.tickets.filter(ticket => {
      const matchesSearch = ticket.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesPriority = this.selectedPriority === '' || ticket.priority === this.selectedPriority;
      const matchesStatus = this.selectedStatus === '' || ticket.status === this.selectedStatus;
      return matchesSearch && matchesPriority && matchesStatus;
    });
  }
}

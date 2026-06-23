import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { UserSidenav } from '../user-sidenav/user-sidenav';
import { FormsModule } from '@angular/forms';
import { UserTicketdescriptionComponent } from '../users-ticketdescription/users-ticketdescription';

@Component({
  selector: 'app-users-tq',
  standalone:true,
  imports: [RouterModule,RouterLink,RouterLinkActive,UserSidenav,FormsModule,UserTicketdescriptionComponent],
  templateUrl: './users-ticketqueue.html',
  styleUrl: './users-ticketqueue.css',
})

export class UsersTicketqueueComponent {

  
  tickets = [
    { id: 'T001', name: 'Dummy1', priority: 'High', status: 'Open', owner: 'ADMIN' },
    { id: 'T002', name: 'Dummy2', priority: 'Moderate', status: 'Closed', owner: 'ADMIN' },
    { id: 'T003', name: 'Dummy3', priority: 'Moderate', status: 'Open', owner: 'ADMIN' },
    { id: 'T004', name: 'Dummy4', priority: 'Low', status: 'Closed', owner: 'ADMIN' },
    { id: 'T005', name: 'Dummy5', priority: 'High', status: 'Open', owner: 'ADMIN' }
  ];

  
  filteredTickets = [...this.tickets];

  
  searchText: string = '';
  selectedPriority: string = '';
  selectedStatus: string = '';

  
  applyFilters() {
    this.filteredTickets = this.tickets.filter(ticket => {

      const matchesSearch =
        ticket.name.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesPriority =
        this.selectedPriority === '' ||
        ticket.priority === this.selectedPriority;

      const matchesStatus =
        this.selectedStatus === '' ||
        ticket.status === this.selectedStatus;

      
      return matchesSearch && matchesPriority && matchesStatus;
    });
  }
}


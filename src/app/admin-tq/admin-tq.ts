import { Component } from '@angular/core';
import { RouterEvent, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-tq',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule,AdminSidebar,FormsModule],
  templateUrl: './admin-tq.html',
  styleUrl: './admin-tq.css',
})
export class AdminTqComponent {
  tickets = [
  { id: 'T001', name: 'Dummy1', priority: 'High', status: 'Open', owner: 'ADMIN' },
  { id: 'T002', name: 'Dummy2', priority: 'Moderate', status: 'Closed', owner: 'ADMIN' },
  { id: 'T003', name: 'Dummy3', priority: 'Low', status: 'Open', owner: 'ADMIN' }
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

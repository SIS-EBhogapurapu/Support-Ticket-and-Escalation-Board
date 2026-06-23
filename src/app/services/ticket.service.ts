import { Injectable } from '@angular/core';

export interface Ticket {
  id: string;
  name: string;
  priority: string;
  status: string;
  owner: string;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [
    { id: 'T001', name: 'Dummy1', priority: 'High', status: 'Open', owner: 'ADMIN' },
    { id: 'T002', name: 'Dummy2', priority: 'Moderate', status: 'Closed', owner: 'ADMIN' },
    { id: 'T003', name: 'Dummy3', priority: 'Moderate', status: 'Open', owner: 'ADMIN' },
    { id: 'T004', name: 'Dummy4', priority: 'Low', status: 'Closed', owner: 'ADMIN' },
    { id: 'T005', name: 'Dummy5', priority: 'High', status: 'Open', owner: 'ADMIN' }
  ];

  getAll(): Ticket[] {
    return this.tickets;
  }

  getById(id: string): Ticket | undefined {
    return this.tickets.find(t => t.id === id);
  }
}

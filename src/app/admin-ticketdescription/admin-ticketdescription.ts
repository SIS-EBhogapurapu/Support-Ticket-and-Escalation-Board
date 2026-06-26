import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, ActivatedRoute } from '@angular/router';
import { TicketService, Ticket } from '../services/ticket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-ticketdescription',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule,CommonModule,FormsModule],
  templateUrl: './admin-ticketdescription.html',
  styleUrl: './admin-ticketdescription.css',
})
export class AdminTicketdescriptionComponent implements OnInit {
  ticket: Ticket | undefined;
  ticketId: string = '';

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id') ?? '';
    this.ticket = this.ticketService.getById(this.ticketId);
  }
}

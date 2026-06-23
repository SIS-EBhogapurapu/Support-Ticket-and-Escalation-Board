import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, ActivatedRoute } from '@angular/router';
import { TicketService, Ticket } from '../services/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-ticketdescription',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule,CommonModule],
  templateUrl: './users-ticketdescription.html',
  styleUrl: './users-ticketdescription.css',
})
export class UsersTicketdescriptionComponent implements OnInit {
  ticket: Ticket | undefined;
  ticketId: string = '';

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id') ?? '';
    this.ticket = this.ticketService.getById(this.ticketId);
  }
}

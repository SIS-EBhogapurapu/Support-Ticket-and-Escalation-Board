import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-tdes',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './users-ticketdescription.html',
  styleUrl: './users-ticketdescription.css',
})
export class UserTicketdescriptionComponent {}

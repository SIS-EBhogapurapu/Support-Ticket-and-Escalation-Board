import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-tdes',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './admin-ticketdescription.html',
  styleUrl: './admin-ticketdescription.css',
})
export class AdminTdesComponent {}

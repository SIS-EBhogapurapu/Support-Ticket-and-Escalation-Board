import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-tdes',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './users-tdes.html',
  styleUrl: './users-tdes.css',
})
export class UsersTdesComponent {}

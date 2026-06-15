import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-tdes',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './admin-tdes.html',
  styleUrl: './admin-tdes.css',
})
export class AdminTdesComponent {}

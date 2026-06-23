import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-newt',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './admin-newticket.html',
  styleUrl: './admin-newticket.css',
})
export class AdminNewticketComponent {}

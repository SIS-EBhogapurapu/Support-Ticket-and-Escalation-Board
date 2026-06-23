import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-users-newt',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './users-newticket.html',
  styleUrl: './users-newticket.css',
})
export class UsersNewticketComponent {}

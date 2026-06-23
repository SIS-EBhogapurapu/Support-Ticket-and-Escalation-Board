import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login';
import { FormsModule } from "@angular/forms";
import { UserSidenav } from './user-sidenav/user-sidenav';
import { UsersTicketqueueComponent } from './users-ticketqueue/users-ticketqueue';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserSidenav,UsersTicketqueueComponent],
  templateUrl: './app.html'
})
export class AppComponent {}

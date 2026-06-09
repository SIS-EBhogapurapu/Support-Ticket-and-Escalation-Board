import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login';
import { FormsModule } from "@angular/forms";
import { Sidebar } from './sidebar/sidebar';
import { UsersTqComponent } from './users-tq/users-tq';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Sidebar,UsersTqComponent], 
  templateUrl: './app.html'
})
export class AppComponent {}

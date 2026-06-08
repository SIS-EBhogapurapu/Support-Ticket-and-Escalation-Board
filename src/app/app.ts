import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login';
import { FormsModule } from "@angular/forms";
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Sidebar], 
  templateUrl: './app.html'
})
export class AppComponent {}

import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, Sidebar],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent {}
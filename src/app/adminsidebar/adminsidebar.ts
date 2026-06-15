import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-adminsidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './adminsidebar.html',
  styleUrls: ['./adminsidebar.css']
})
export class AdminSidebarComponent {}


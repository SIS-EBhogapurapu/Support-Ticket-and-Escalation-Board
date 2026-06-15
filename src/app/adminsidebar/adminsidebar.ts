import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminsidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterModule],
  templateUrl: './adminsidebar.html',
  styleUrls: ['./adminsidebar.css']
})
export class AdminSidebarComponent {}


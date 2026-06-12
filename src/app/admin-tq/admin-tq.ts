import { Component } from '@angular/core';
import { RouterEvent, RouterLink, RouterLinkActive } from '@angular/router';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-tq',
  standalone:true,
  imports: [RouterLink,RouterLinkActive,RouterEvent,AdminSidebar],
  templateUrl: './admin-tq.html',
  styleUrl: './admin-tq.css',
})
export class AdminTqComponent {}

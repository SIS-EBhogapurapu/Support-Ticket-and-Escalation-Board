import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [RouterModule,RouterLink,RouterLinkActive],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {}

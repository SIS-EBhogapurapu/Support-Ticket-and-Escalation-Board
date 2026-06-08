import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    const user = this.username.trim().toUpperCase();
    const password = this.password.trim().toUpperCase();

    if (user === 'ADMIN' && password === 'ADMIN') {
      console.log("Navigating...");
      this.router.navigate(['/admin']);

    } else if (user === 'USER' && password === 'USER') {
      this.router.navigate(['/users']);

    } else {
      alert("Incorrect credentials.");
    }
  }

  @HostListener('document:keydown.enter')
  handleEnter() {
    this.login();
  }
}
``
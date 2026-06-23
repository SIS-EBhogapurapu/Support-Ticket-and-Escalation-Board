import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
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
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin-admin-dashboard']);

    } else if (user === 'USER' && password === 'USER') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'user');
      this.router.navigate(['/users-dashboard']);

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
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    const user = this.username.trim();
    const password = this.password.trim();

    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin-admin-dashboard']);

    } else if (user === 'user' && password === 'user') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'user');
      this.router.navigate(['/users-dashboard']);

    } else {
      this.errorMessage = 'Incorrect username or password.';
    }
  }

  @HostListener('document:keydown.enter')
  handleEnter() {
    this.login();
  }
}
``
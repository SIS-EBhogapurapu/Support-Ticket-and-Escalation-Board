import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  validateLogin() {
    const username = (document.getElementById("Username") as HTMLInputElement).value.trim().toUpperCase();
    const password = (document.getElementById("Password") as HTMLInputElement).value.trim().toUpperCase();

    if ((username === "ADMIN" && password === "ADMIN") ||
        (username === "USER" && password === "USER")) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials");
    }
  }

  @HostListener('document:keydown.enter')
  handleEnter() {
    this.validateLogin();
  }
}
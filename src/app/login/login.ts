import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  validateLogin() {
    const username = (document.getElementById("username") as HTMLInputElement).value.trim().toUpperCase();
    const password = (document.getElementById("password") as HTMLInputElement).value.trim().toUpperCase();

    if ((username === "ADMIN" && password === "ADMIN") ||
        (username === "USER" && password === "USER")) {
      alert("Login successful!");
      // Example redirect: window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  }
}

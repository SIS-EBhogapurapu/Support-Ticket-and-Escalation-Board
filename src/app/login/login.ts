import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',//this is important , as using this inside html files will run the code pertaining to it.
  // A standalone component is a component that does NOT need an NgModule to work. Standalone → component works by itself, no module needed.
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
// Hostlistener is a decorator that lets the component listen to events directly from document object model
  @HostListener('document:keydown.enter')
  handleEnter() {
    this.validateLogin();
  }
}
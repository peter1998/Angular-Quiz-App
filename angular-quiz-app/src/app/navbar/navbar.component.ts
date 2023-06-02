import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  restartQuiz(): void {
    // Clear the score and navigate back to home
    localStorage.removeItem('score');
    this.router.navigate(['/']);
  }
}

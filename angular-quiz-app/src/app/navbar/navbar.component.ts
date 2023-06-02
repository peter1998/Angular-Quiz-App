import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  score: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Get the score from local storage
    this.score = Number(localStorage.getItem('score'));
  }

  restartQuiz(): void {
    // Clear the score and navigate back to home
    localStorage.removeItem('score');
    this.router.navigate(['/']);
  }
}

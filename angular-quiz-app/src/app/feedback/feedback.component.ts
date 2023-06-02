import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  score: number = 0;
  totalQuestions: number = 5;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Get the score from local storage
    const score = localStorage.getItem('score');
    this.score = score !== null ? Number(score) : 0;
  }

  restartQuiz(): void {
    // Clear the score and navigate back to home
    localStorage.removeItem('score');
    this.router.navigate(['/']);
  }
}

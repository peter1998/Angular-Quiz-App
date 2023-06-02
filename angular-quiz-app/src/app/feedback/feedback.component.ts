import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../service/score.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  score: number = 0;
  totalQuestions: number = 10;

  constructor(private router: Router, private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreService.score$.subscribe((score) => (this.score = score));
  }

  restartQuiz(): void {
    // Clear the score and navigate back to home
    this.scoreService.setScore(0);
    this.router.navigate(['/']);
  }
}

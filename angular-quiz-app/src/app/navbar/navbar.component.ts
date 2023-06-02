import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../service/score.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  score: number = 0;

  constructor(private router: Router, private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreService.score$.subscribe((score) => (this.score = score));
  }
  restartQuiz(): void {
    // Clear the score and navigate back to home
    localStorage.removeItem('score');
    this.router.navigate(['/']);
  }
}

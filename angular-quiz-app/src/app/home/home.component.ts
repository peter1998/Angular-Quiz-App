import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { QUESTIONS } from '../mock/questions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  questions: any[] = [];
  selectedAnswers: any[] = [];
  results: any[] = [];

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.questions = this.getRandomQuestions(10);
  }

  getRandomQuestions(n: number): any[] {
    const shuffledQuestions = QUESTIONS.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, n);
  }

  selectAnswer(questionIndex: number, answer: string): void {
    this.selectedAnswers[questionIndex] = answer;
  }

  submitAnswers(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Calculate the results
        this.results = this.questions.map((question, index) => {
          return question.answer === this.selectedAnswers[index];
        });

        // Calculate the score as the number of correct answers
        const score = this.results.filter((result) => result).length;

        // Store the score in local storage
        localStorage.setItem('score', score.toString());

        // Navigate to the feedback page
        this.router.navigate(['/feedback']);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  questions = [
    {
      text: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    // More questions...
  ];
  selectedAnswers: any[] = [];
  results: any[] = [];

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

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

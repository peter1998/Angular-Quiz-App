// score.service.ts
import { BehaviorSubject } from 'rxjs';

export class ScoreService {
  private scoreSubject = new BehaviorSubject<number>(0);
  score$ = this.scoreSubject.asObservable();

  setScore(score: number): void {
    this.scoreSubject.next(score);
  }
}

import { Component, signal } from '@angular/core';
import { DecisionEngine } from './decision-engine/decision-engine';

@Component({
  selector: 'app-root',
  imports: [DecisionEngine],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('decision-engine');
}

import { Component, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CPR_RULES, CprRule } from '../cpr-rules';

@Component({
  selector: 'app-decision-engine',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './decision-engine.html',
  styleUrls: ['./decision-engine.css'],
})
export class DecisionEngine {
  yesterdayClose = signal('');
  todayOpen = signal('');
  rangeRelation = signal('');
  cprWidth = signal('');

  yesterdayCloseOptions = ['Above CPR', 'Below CPR', 'Inside CPR'];
  todayOpenOptions = [
    'Inside CPR',
    'Within CPR and R1',
    'At R1 or Prev High',
    'Above R1 or Prev High',
    'At R2',
    'Within CPR and S1',
    'At S1 or Prev Low',
    'Below S1 or Prev Low',
    'At S2',
  ];
  rangeRelationOptions = [
    'Same as Yesterday',
    'Above Previous Range',
    'Below Previous Range',
    'Engulf Previous Range',
    'Inside Previous Range',
  ];
  cprWidthOptions = ['Tight', 'Average', 'Wide'];

  result = computed(() => {
    const selectedYesterday = this.yesterdayClose();
    const selectedTodayOpen = this.todayOpen();
    const selectedRange = this.rangeRelation();
    const selectedWidth = this.cprWidth();

    // Filter based on any selected value
    const filtered = CPR_RULES.filter((rule: CprRule) => {
      return (
        (!selectedYesterday || rule.yesterdayClose === selectedYesterday) ||
        (!selectedTodayOpen || rule.todayOpen === selectedTodayOpen) ||
        (!selectedRange || rule.rangeRelation === selectedRange) ||
        (!selectedWidth || rule.cprWidth === selectedWidth)
      );
    });

    return filtered.length > 0 ? filtered[0] : undefined;
  });

  onSelectChange(signalRef: any, event: Event) {
    const target = event.target as HTMLSelectElement;
    signalRef.set(target.value);
  }
}

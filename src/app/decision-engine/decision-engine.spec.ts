import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionEngine } from './decision-engine';

describe('DecisionEngine', () => {
  let component: DecisionEngine;
  let fixture: ComponentFixture<DecisionEngine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionEngine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionEngine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

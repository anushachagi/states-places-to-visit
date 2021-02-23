import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateInterestingFactsComponent } from './state-interesting-facts.component';

describe('StateInterestingFactsComponent', () => {
  let component: StateInterestingFactsComponent;
  let fixture: ComponentFixture<StateInterestingFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateInterestingFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateInterestingFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

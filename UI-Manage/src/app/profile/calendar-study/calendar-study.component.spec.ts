import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarStudyComponent } from './calendar-study.component';

describe('CalendarStudyComponent', () => {
  let component: CalendarStudyComponent;
  let fixture: ComponentFixture<CalendarStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsUserComponent } from './views-user.component';

describe('ViewsUserComponent', () => {
  let component: ViewsUserComponent;
  let fixture: ComponentFixture<ViewsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

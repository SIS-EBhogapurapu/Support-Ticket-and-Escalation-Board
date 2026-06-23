import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDashboardComponent } from './users-dashboard';

describe('UsersDashboardComponent', () => {
  let component: UsersDashboardComponent;
  let fixture: ComponentFixture<UsersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersDashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

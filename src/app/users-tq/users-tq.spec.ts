import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTq } from './users-tq';

describe('UsersTq', () => {
  let component: UsersTq;
  let fixture: ComponentFixture<UsersTq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTq],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

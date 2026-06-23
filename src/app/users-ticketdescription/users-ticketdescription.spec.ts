import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTdes } from './users-tdes';

describe('UsersTdes', () => {
  let component: UsersTdes;
  let fixture: ComponentFixture<UsersTdes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTdes],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTdes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

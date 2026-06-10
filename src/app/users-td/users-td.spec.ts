import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTd } from './users-td';

describe('UsersTd', () => {
  let component: UsersTd;
  let fixture: ComponentFixture<UsersTd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTd],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

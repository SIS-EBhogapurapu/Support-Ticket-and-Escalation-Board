import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNewt } from './users-newt';

describe('UsersNewt', () => {
  let component: UsersNewt;
  let fixture: ComponentFixture<UsersNewt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersNewt],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersNewt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

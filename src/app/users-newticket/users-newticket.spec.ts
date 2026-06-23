import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersNewticketComponent } from './users-newticket';

describe('UsersNewticketComponent', () => {
  let component: UsersNewticketComponent;
  let fixture: ComponentFixture<UsersNewticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersNewticketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersNewticketComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

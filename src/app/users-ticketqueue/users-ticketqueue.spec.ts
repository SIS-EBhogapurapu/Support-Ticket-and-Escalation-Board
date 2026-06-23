import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTicketqueueComponent } from './users-ticketqueue';

describe('UsersTicketqueueComponent', () => {
  let component: UsersTicketqueueComponent;
  let fixture: ComponentFixture<UsersTicketqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTicketqueueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTicketqueueComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

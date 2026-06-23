import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketdescriptionComponent } from './users-ticketdescription';

describe('UserTicketdescriptionComponent', () => {
  let component: UserTicketdescriptionComponent;
  let fixture: ComponentFixture<UserTicketdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTicketdescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserTicketdescriptionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTicketdescriptionComponent } from './users-ticketdescription';

describe('UsersTicketdescription', () => {
  let component: UsersTicketdescriptionComponent;
  let fixture: ComponentFixture<UsersTicketdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTicketdescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTicketdescriptionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



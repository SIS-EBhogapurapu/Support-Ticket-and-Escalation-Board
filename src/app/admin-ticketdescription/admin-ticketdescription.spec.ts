import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketdescriptionComponent } from './admin-ticketdescription';

describe('AdminTicketdescription', () => {
  let component: AdminTicketdescriptionComponent;
  let fixture: ComponentFixture<AdminTicketdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTicketdescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTicketdescriptionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



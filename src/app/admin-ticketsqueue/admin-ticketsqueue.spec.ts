import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketsqueueComponent } from './admin-ticketsqueue';

describe('AdminTq', () => {
  let component: AdminTicketsqueueComponent;
  let fixture: ComponentFixture<AdminTicketsqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTicketsqueueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTicketsqueueComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


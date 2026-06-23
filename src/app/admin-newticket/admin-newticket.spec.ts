import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewticketComponent } from './admin-newticket';

describe('AdminNewt', () => {
  let component: AdminNewticketComponent;
  let fixture: ComponentFixture<AdminNewticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNewticketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminNewticketComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTdesComponent } from './admin-ticketdescription';

describe('AdminTdesComponent', () => {
  let component: AdminTdesComponent;
  let fixture: ComponentFixture<AdminTdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTdesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTdesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

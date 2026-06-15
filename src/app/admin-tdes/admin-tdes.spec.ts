import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTdes } from './admin-tdes';

describe('AdminTdes', () => {
  let component: AdminTdes;
  let fixture: ComponentFixture<AdminTdes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTdes],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTdes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

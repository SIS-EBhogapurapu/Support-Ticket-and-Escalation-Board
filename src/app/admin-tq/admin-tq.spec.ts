import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTq } from './admin-tq';

describe('AdminTq', () => {
  let component: AdminTq;
  let fixture: ComponentFixture<AdminTq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTq],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

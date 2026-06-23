import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewt } from './admin-newt';

describe('AdminNewt', () => {
  let component: AdminNewt;
  let fixture: ComponentFixture<AdminNewt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNewt],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminNewt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

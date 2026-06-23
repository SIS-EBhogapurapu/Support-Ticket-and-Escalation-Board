import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminDashboardComponent } from './admin-admin-dashboard';

describe('AdminAdminDashboard', () => {
  let component: AdminAdminDashboardComponent;
  let fixture: ComponentFixture<AdminAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdminDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAdminDashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

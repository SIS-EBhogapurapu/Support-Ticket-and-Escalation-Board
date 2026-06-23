import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageusersComponent } from './admin-manageusers';

describe('AdminManageusers', () => {
  let component: AdminManageusersComponent;
  let fixture: ComponentFixture<AdminManageusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageusersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManageusersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

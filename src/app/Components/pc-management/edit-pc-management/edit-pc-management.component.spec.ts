import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPcManagementComponent } from './edit-pc-management.component';

describe('EditPcManagementComponent', () => {
  let component: EditPcManagementComponent;
  let fixture: ComponentFixture<EditPcManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPcManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPcManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

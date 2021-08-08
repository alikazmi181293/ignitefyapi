import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePcManagementComponent } from './delete-pc-management.component';

describe('DeletePcManagementComponent', () => {
  let component: DeletePcManagementComponent;
  let fixture: ComponentFixture<DeletePcManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePcManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePcManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCasingComponent } from './edit-casing.component';

describe('EditCasingComponent', () => {
  let component: EditCasingComponent;
  let fixture: ComponentFixture<EditCasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

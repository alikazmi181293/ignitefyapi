import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasingComponent } from './add-casing.component';

describe('AddCasingComponent', () => {
  let component: AddCasingComponent;
  let fixture: ComponentFixture<AddCasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

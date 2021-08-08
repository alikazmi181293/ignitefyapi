import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRamComponent } from './add-ram.component';

describe('AddRamComponent', () => {
  let component: AddRamComponent;
  let fixture: ComponentFixture<AddRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

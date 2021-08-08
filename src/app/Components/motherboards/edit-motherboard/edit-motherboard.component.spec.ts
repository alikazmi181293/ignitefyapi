import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMotherboardComponent } from './edit-motherboard.component';

describe('EditMotherboardComponent', () => {
  let component: EditMotherboardComponent;
  let fixture: ComponentFixture<EditMotherboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMotherboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMotherboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

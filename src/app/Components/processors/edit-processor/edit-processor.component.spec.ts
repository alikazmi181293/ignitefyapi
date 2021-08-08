import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcessorComponent } from './edit-processor.component';

describe('EditProcessorComponent', () => {
  let component: EditProcessorComponent;
  let fixture: ComponentFixture<EditProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

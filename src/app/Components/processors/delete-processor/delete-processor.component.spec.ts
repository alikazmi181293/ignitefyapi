import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProcessorComponent } from './delete-processor.component';

describe('DeleteProcessorComponent', () => {
  let component: DeleteProcessorComponent;
  let fixture: ComponentFixture<DeleteProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

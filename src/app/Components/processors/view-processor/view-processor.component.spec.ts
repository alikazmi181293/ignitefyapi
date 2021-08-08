import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessorComponent } from './view-processor.component';

describe('ViewProcessorComponent', () => {
  let component: ViewProcessorComponent;
  let fixture: ComponentFixture<ViewProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

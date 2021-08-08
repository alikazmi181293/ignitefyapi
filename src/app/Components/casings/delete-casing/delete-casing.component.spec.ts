import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCasingComponent } from './delete-casing.component';

describe('DeleteCasingComponent', () => {
  let component: DeleteCasingComponent;
  let fixture: ComponentFixture<DeleteCasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

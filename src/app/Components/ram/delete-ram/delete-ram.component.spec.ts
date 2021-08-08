import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRamComponent } from './delete-ram.component';

describe('DeleteRamComponent', () => {
  let component: DeleteRamComponent;
  let fixture: ComponentFixture<DeleteRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

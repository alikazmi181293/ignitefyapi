import { TestBed } from '@angular/core/testing';

import { IgnitefyOrderService } from './ignitefy-order.service';

describe('IgnitefyOrderService', () => {
  let service: IgnitefyOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgnitefyOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

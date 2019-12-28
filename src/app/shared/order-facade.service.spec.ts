import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderFacadeService } from './order-facade.service';

describe('OrderFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: OrderFacadeService = TestBed.inject(OrderFacadeService);
    expect(service).toBeTruthy();
  });
});

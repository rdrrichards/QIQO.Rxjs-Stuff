import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ { provide: 'BASE_URL', useValue: '' } ]
  }));

  it('should be created', () => {
    const service: CustomerService = TestBed.inject(CustomerService);
    expect(service).toBeTruthy();
  });
});

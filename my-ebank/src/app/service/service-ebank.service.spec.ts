import { TestBed } from '@angular/core/testing';

import { ServiceEbankService } from './service-ebank.service';

describe('ServiceEbankService', () => {
  let service: ServiceEbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

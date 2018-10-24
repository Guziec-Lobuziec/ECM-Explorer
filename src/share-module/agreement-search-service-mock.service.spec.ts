import { TestBed, inject } from '@angular/core/testing';

import { AgreementSearchServiceMockService } from './agreement-search-service-mock.service';

describe('AgreementSearchServiceMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgreementSearchServiceMockService]
    });
  });

  it('should be created', inject([AgreementSearchServiceMockService], (service: AgreementSearchServiceMockService) => {
    expect(service).toBeTruthy();
  }));
});

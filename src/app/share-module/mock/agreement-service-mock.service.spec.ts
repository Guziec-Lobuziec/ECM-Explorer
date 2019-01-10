import { TestBed, inject } from '@angular/core/testing';

import { AgreementServiceMockService } from './agreement-service-mock.service';

describe('AgreementServiceMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgreementServiceMockService]
    });
  });

  it('should be created', inject([AgreementServiceMockService], (service: AgreementServiceMockService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ContractConfigService } from './contract-config.service';

describe('ContractConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractConfigService]
    });
  });

  it('should be created', inject([ContractConfigService], (service: ContractConfigService) => {
    expect(service).toBeTruthy();
  }));
});

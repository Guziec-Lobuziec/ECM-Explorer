import { TestBed, inject } from '@angular/core/testing';

import { AgreementSearchServiceMockService } from './agreement-search-service-mock.service';
import { agreementsList } from './mock/agreement-list';
import { AgreementDescription } from './model/agreement-description';
import { agreementsFilterNameList } from './mock/agreement-filter-name-list';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { NameFilter } from './name-filter';

describe('AgreementSearchServiceMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgreementSearchServiceMockService]
    });
  });

  it('should be created', inject([AgreementSearchServiceMockService], (service: AgreementSearchServiceMockService ) => {
    expect(service).toBeTruthy();
  }));

  it('should filter array and output new with name only Kapcie' , () => {
    let filter: NameFilter = new NameFilter("Kapcie");
     expect(filter.process(agreementsList)).toBe(agreementsFilterNameList,"Should be only kapcie")
  });

    
});

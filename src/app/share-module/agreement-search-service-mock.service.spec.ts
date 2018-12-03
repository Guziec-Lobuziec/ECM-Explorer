import { TestBed, inject } from '@angular/core/testing';

import { AgreementSearchServiceMockService } from './agreement-search-service-mock.service';
import { agreementsList } from './mock/agreement-list';
import { AgreementDescription } from './model/agreement-description';
import { agreementsFilterNameList } from './mock/agreement-filter-name-list';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { NameFilter } from './name-filter';
import { PriceFilter} from './price-filter';
import { agreementsPriceList } from './mock/agreement-price-list';
import { DateFilter } from './date-filter';
import { agreementsDateList } from './mock/agreement-date-list';

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
     expect(filter.process(agreementsList)).toEqual(agreementsFilterNameList,"Should be only kapcie")
  });

  it('filter array should be size of 1', () =>
  {
    let filter: NameFilter = new NameFilter("Kapcie");
     expect(filter.process(agreementsList).length).toEqual(1,"Size should be 1")
  })

  it('should filter array and output new with price only 8735', () =>{
    let filter: PriceFilter = new PriceFilter(8735);
    expect(filter.process(agreementsList)).toEqual(agreementsPriceList,"Should have agreement with price 8735")
  } );

  it('filter array should be size of 3', () =>
  {
    let filter: PriceFilter = new PriceFilter(8735);
     expect(filter.process(agreementsList).length).toEqual(3,"Size should be 3")
  });

  it('should filter array and output new with date equal 2018-11-20', () => 
  {
    const date: Date = new Date(2018,11,20)
    let filter: DateFilter = new DateFilter(date);
    expect(filter.process(agreementsList)).toEqual(agreementsDateList,"Should have agreement with date 2018-11-20")
  });

  it('filter array should be size of 2', () =>
  {
    const date: Date = new Date(2018,11,20)
    let filter: DateFilter = new DateFilter(date);
     expect(filter.process(agreementsList).length).toEqual(2,"Size should be 2")
  });

  it('test', inject( [AgreementSearchServiceMockService], ( service: AgreementSearchServiceMockService ) => {
    service.searchPages(service.compileQuery("name: kapcie"),12,2).subscribe(result => expect(result).toBeGreaterThan(1))
  }));

});

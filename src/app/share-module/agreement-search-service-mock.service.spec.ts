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

  describe('Standalone filters tests', () => {
    it('should filter array and output new with name only Kapcie' , () => {
      let filter: NameFilter = new NameFilter("Kapcie",null);
       expect(filter.process(agreementsList)).toEqual(
         agreementsList.filter(a => a.name === "Kapcie"),
         "Should be only kapcie"
       )
    });

    it('filter array should be size of 2', () =>
    {
      let filter: NameFilter = new NameFilter("Kapcie",null);
       expect(filter.process(agreementsList).length).toEqual(2,"Size should be 2")
    })

    it('should filter array and output new with price only 8735', () =>{
      let filter: PriceFilter = new PriceFilter(8735,null);
      expect(filter.process(agreementsList)).toEqual(agreementsPriceList,"Should have agreement with price 8735")
    } );

    it('filter array should be size of 3', () =>
    {
      let filter: PriceFilter = new PriceFilter(8735,null);
       expect(filter.process(agreementsList).length).toEqual(3,"Size should be 3")
    });

    it('should filter array and output new with date equal 2018-11-20', () =>
    {
      const date: Date = new Date(2018,11,20)
      let filter: DateFilter = new DateFilter(date,null);
      expect(filter.process(agreementsList)).toEqual(agreementsDateList,"Should have agreement with date 2018-11-20")
    });

    it('filter array should be size of 3', () =>
    {
      const date: Date = new Date(2018,11,20)
      let filter: DateFilter = new DateFilter(date,null);
       expect(filter.process(agreementsList).length).toEqual(3,"Size should be 3")
    });
  })

  describe('Chained filters tests', () => {

    it('simple search', inject( [AgreementSearchServiceMockService], ( service: AgreementSearchServiceMockService ) => {
      service.searchPages(service.compileQuery("name: Kapcie"),12,2).subscribe(result => expect(result).toBeGreaterThan(1))
    }));

    it('Search item with given name and price', inject( [AgreementSearchServiceMockService], ( service: AgreementSearchServiceMockService ) => {
      service
      .searchPages(service.compileQuery("name: Kapcie price: 8735"),0,10)
      .subscribe(result => expect(result).toContain(
        agreementsList
        .filter(a => a.name === "Kapcie")
        .filter(a => a.price === 8735)
        [0]
      ))
    }));

    it('Test if there is only one item with given name and price', inject( [AgreementSearchServiceMockService], ( service: AgreementSearchServiceMockService ) => {
      service
      .searchPages(service.compileQuery("name: Kapcie price: 8735"),0,10)
      .subscribe(result => expect(result.length).toEqual(1))
    }));

  })

});

import { Component, OnInit } from '@angular/core';
import { agreementsList } from '../../share-module/mock/agreement-list';
import { AgreementSearchServiceMockService } from 'src/app/share-module/agreement-search-service-mock.service';
import { agreementsDateList } from 'src/app/share-module/mock/agreement-date-list';
import { Observable, ObservableInput, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AgreementDescription } from 'src/app/share-module/model/agreement-description';
import { FormGroup, FormControl } from '@angular/forms';
import { IQuery } from 'src/app/share-module/iquery';



@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  agreements: Observable<AgreementDescription[]>
  lastValidQuery: IQuery;
  searchValue = new FormControl('');
  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private searchService: AgreementSearchServiceMockService) { }

  ngOnInit() {

    this.searchValue
        .valueChanges
        .pipe(
          debounceTime(200)
        )
        .subscribe((eventValue) => {

          let query = this.searchService.compileQuery(eventValue);
          if(query !== null){
            this.lastValidQuery = query;

            this.agreements = this.searchService.searchPages(
              this.lastValidQuery,
              this.pageNumber,
              this.pageSize
            )
          }

        });
  }

}

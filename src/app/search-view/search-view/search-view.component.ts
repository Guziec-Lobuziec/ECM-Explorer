import { Component, OnInit } from '@angular/core';
import { agreementsList } from '../../share-module/mock/agreement-list';
import { IAgreementSearchService } from 'src/app/share-module/iagreement-search-service';
import { agreementsDateList } from 'src/app/share-module/mock/agreement-date-list';
import { Observable, ObservableInput, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AgreementDescription } from 'src/app/share-module/model/agreement-description';
import { FormGroup, FormControl } from '@angular/forms';
import { IQuery } from 'src/app/share-module/iquery';



@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class SearchViewComponent implements OnInit {

  agreements: Observable<AgreementDescription[]>
  lastValidQuery: IQuery;
  searchValue = new FormControl('');
  pageNumber: number = 0;
  pageSize: number = 10;

  small: boolean = false;
  medium: boolean = false;
  large: boolean = false;

  onResize(event) {
    if (event.target.innerWidth <= 1400) {
      this.small = true;
      this.medium = false;
      this.large = false;

      console.log("small");
    }
    else if (event.target.innerWidth < 1800 && event.target.innerWidth > 1400) { // 768px portrait
      this.small = false;
      this.medium = true;
      this.large = false;

      console.log("medium");
    }

    else if (event.target.innerWidth >= 1800) {
      this.small = false;
      this.medium = false;
      this.large = true;

      console.log("large");
    }
  }

  constructor(private searchService: IAgreementSearchService) { }

  ngOnInit() {
    if (window.innerWidth <= 1400) {
      this.small = true;
      this.medium = false;
      this.large = false;

      console.log("small");
    }
    else if (window.innerWidth < 1800 && window.innerWidth > 1400) { // 768px portrait
      this.small = false;
      this.medium = true;
      this.large = false;

      console.log("medium");
    }

    else if (window.innerWidth >= 1800) {
      this.small = false;
      this.medium = false;
      this.large = true;

      console.log("large");
    }

    this.agreements = this.searchService.searchPages(
      this.searchService.compileQuery("name:"),
      this.pageNumber,
      this.pageSize
    )

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
          else{
            this.agreements = this.searchService.searchPages(
              this.searchService.compileQuery("name: " + eventValue),
              this.pageNumber,
              this.pageSize
            )

          }

        });
  }

}

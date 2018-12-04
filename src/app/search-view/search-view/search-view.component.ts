import { Component, OnInit } from '@angular/core';
import { agreementsList } from '../../share-module/mock/agreement-list';
import { AgreementSearchServiceMockService } from 'src/app/share-module/agreement-search-service-mock.service';
import { agreementsDateList } from 'src/app/share-module/mock/agreement-date-list';
import { Observable } from 'rxjs';
import { AgreementDescription } from 'src/app/share-module/model/agreement-description';



@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  public contracts = agreementsList;

  constructor(private searchService: AgreementSearchServiceMockService) { }

  search(value: any) : Observable<AgreementDescription[]>
  {
    return this.searchService.searchPages(this.searchService.compileQuery('name:'+ value),12,2)
  }

  ngOnInit() {
  }

}

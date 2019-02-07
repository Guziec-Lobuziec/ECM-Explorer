import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { Router } from '@angular/router';
import { IAgreementSearchService } from 'src/app/share-module/iagreement-search-service';
import { AgreementDescription } from 'src/app/share-module/model/agreement-description';
import { EthAddress } from 'src/app/share-module/eth-address';

@Component({
  selector: 'app-agreement-one-one',
  templateUrl: './agreement-one-one.component.html',
  styleUrls: ['./agreement-one-one.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class AgreementOneOneComponent implements OnInit {

  agreementForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    blocks: new FormControl(''),
    description: new FormControl('')
  })

  /*expirationTimeForm = new FormGroup({
    expirationTimeSelectButton: new FormControl(""),
    expirationTime: new FormControl("")
  })

  /*items: MenuItem[];
  activeIndex: number = 1;

  types: SelectItem[];
  selectedType: SelectItem;


  minDate: Date;
  invalidDates: Array<Date>*/

  constructor(private fb: FormBuilder, private router: Router,private searchService: IAgreementSearchService) {}

  ngOnInit() {
    /*this.items = [
      { label: 'Choose Agreement Type' },
      { label: 'Create Agreement' },
      { label: 'Confirm Data'}
  ];
    this.activeIndex = 1;

    this.types = [
      { label: 'Calendar', value: "Calendar" },
      { label: 'Blocks To Expiration', value: "Blocks To Expiration"}
  ];

    this.types[1].disabled = true;

    let today = new Date();
    this.minDate = new Date();
    this.minDate.setFullYear(today.getFullYear());
    this.minDate.setMonth(today.getMonth());*/

    /*for (let i = today.getDay(); i > 0; i--) {
      let invalidDate = new Date();
      invalidDate.setDate(today.getDate() - 1);
      this.invalidDates.push(invalidDate);
    }*/

    this.agreementForm = this.fb.group({
      "name": "",
      "price": "",
      "blocks": "",
      "description": ""
    })

    /*this.expirationTimeForm = this.fb.group({
      "expirationTimeSelectButton": "Calendar",
      "expirationTime": ""
    })*/
  }

  async onSubmit() {
    console.log("model-based form submitted");
    //console.log(this.expirationTimeForm);
    console.log(this.agreementForm);
    let agreement: AgreementDescription = new AgreementDescription(
      EthAddress.parse('0x32Be343B94f860124dC4fEe278FDCBD38C102D88'),
      null,
      null,
      this.agreementForm.value.blocks,
      null,
      this.agreementForm.value.price,
      this.agreementForm.value.name,
      this.agreementForm.value.description,
      [],
      [],
      [],
      [],);
    this.searchService.addAgreement(agreement);
    this.router.navigate(['/overview']);
  }
  

}

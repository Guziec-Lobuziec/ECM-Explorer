import { Component, OnInit } from '@angular/core';
import { MockAgreementTypes } from 'src/share/mock/mock-agreement-types';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//PrimeNG

@Component({
  selector: 'app-agreement-creator',
  templateUrl: './agreement-creator.component.html',
  styleUrls: ['./agreement-creator.component.scss']
})

export class AgreementCreatorComponent implements OnInit {

  agreements = MockAgreementTypes;

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "name": new FormControl("name", Validators.required),
      "price": new FormControl("price", Validators.required),
      //"dateRange": new FormControl("dateRange", Validators.required),
      //"expirationTime": new FormControl("expirationTime", Validators.required),
      "description": new FormControl("description", Validators.required)
    })
  }

  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
  }

    ngOnInit() {}


    



}

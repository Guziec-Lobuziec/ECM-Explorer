import { Component, OnInit } from '@angular/core';
import { MockAgreementTypes } from 'src/app/share/mock/mock-agreement-types';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//PrimeNG

@Component({
  selector: 'app-agreement-creator',
  templateUrl: './agreement-creator.component.html',
  styleUrls: ['./agreement-creator.component.scss']
})

export class AgreementCreatorComponent implements OnInit {

  agreementTypes = MockAgreementTypes;

  agreementForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.agreementForm);
  }

  ngOnInit() {
    this.agreementForm = this.fb.group({
      "name": ["name", Validators.required],
      "price": ["price", Validators.required],
      "agreementSelectedType": ["type", Validators.required],
      "dateRange": [,Validators.required],
      "expirationTime": [,Validators.required],
      "description": ["description", Validators.required]
    })
  }






}

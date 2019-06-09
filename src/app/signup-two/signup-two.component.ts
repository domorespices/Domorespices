import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupSecondPageVO } from './signup-second-page-vo';
import { SignupFirstPageVO } from '../signup-one/signupFirstPage-vo';
import { CountryStatesMapper } from '../i8n/countryStatesMapping';
import { StateDistrictMapper } from '../i8n/stateDistrictMapping';


@Component({
  selector: 'app-signup-two',
  templateUrl: './signup-two.component.html',
  styleUrls: ['./signup-two.component.css']
})
export class SignupTwoComponent implements OnInit {
  signupData = new SignupFirstPageVO();
  states: [];
  districts: [];

  constructor(private formBuilder: FormBuilder) {}

  signupSecondForm: FormGroup;
  signupTwo = new SignupSecondPageVO();
  ngOnInit() {
    this.signupSecondForm  =  this.formBuilder.group({
      hname: ['', Validators.required],
      hbranch: ['', Validators.required],
      hpincode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
      haddress: ['', Validators.required],
      hDistrict: ['', Validators.required],
      hState: ['', Validators.required]
  });
  }

  signup() {
    if (this.signupSecondForm.valid) {
       console.log(this.signupTwo);
     }
   }

   fetchAllStatesByCountry(country) {
    this.states = new CountryStatesMapper().getStatesByCountry(country);
    return this.states;
  }

  fetchAllDistrictsByState(state) {
    this.districts = new StateDistrictMapper().getDistrictByState(state);
    return this.districts;
  }


}

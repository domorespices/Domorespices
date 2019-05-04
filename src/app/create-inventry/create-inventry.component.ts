import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { InventryVO, InventryVOList } from './inventry-vo';
@Component({
  selector: 'app-create-inventry',
  templateUrl: './create-inventry.component.html',
  styleUrls: ['./create-inventry.component.css']
})
export class CreateInventryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  inventryForm: FormGroup;
  inventryList = new InventryVOList();
  disableBreakFast = false;
  disableLunch = false;
  disableDinner = false;
  ngOnInit() {
    this.inventryForm = this.fb.group({
      hotelFoods: this.fb.array([
        this.addFoodtype()
      ])
    });
  }

  addFoodItemsButtonClick(userIndex): void {
    (( (this.inventryForm.controls.hotelFoods as FormArray)
    .controls[userIndex] as FormGroup).controls.foodDetails as FormArray).push(this.addFoodFormGroup());
  }

  addFoodTypeButtonClick(i): void {
    console.log(i);
    const type = ((this.inventryForm.controls.hotelFoods as FormArray)
    .controls[i] as FormGroup).get('foodtype').value;
    if (type === 'BREAKFAST') {
      this.disableBreakFast = true;
    }
    if (type === 'LUNCH') {
      this.disableLunch = true;
    }
    if (type === 'DINNER') {
      this.disableDinner = true;
    }
    if (i < 2) {
   (this.inventryForm.get('hotelFoods') as FormArray).push(this.addFoodtype());
    }
  }

  removeFoodDetilas(index, i) {
    (( (this.inventryForm.controls.hotelFoods as FormArray)
    .controls[index] as FormGroup).controls.foodDetails as FormArray).removeAt(i);
  }

  removeFoodType(index) {
    const type = ((this.inventryForm.controls.hotelFoods as FormArray)
    .controls[index] as FormGroup).get('foodtype').value;
    if (type === 'BREAKFAST') {
      this.disableBreakFast = false;
    }
    if (type === 'LUNCH') {
      this.disableLunch = false;
    }
    if (type === 'DINNER') {
      this.disableDinner = false;
    }
    (this.inventryForm.get('hotelFoods') as FormArray).removeAt(index);
  }

  createInventry() {
  if (this.inventryForm.valid) {
    this.inventryList = this.inventryForm.value;
    console.log(this.inventryList);
  }
  }


   addFoodtype(): FormGroup {
     return this.fb.group({
      foodtype: ['', Validators.required],
      foodDetails: this.fb.array([
        this.addFoodFormGroup()
      ])
     });
   }
   addFoodFormGroup(): FormGroup {
    return this.fb.group({
      food: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

}

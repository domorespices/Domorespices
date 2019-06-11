import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FoodTypes } from '../i8n/getFoodTypes';
import { InventryVOList } from './inventry-vo';

@Component({
  selector: 'app-inventory-creation',
  templateUrl: './inventory-creation.component.html',
  styleUrls: ['./inventory-creation.component.css']
})
export class InventoryCreationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  inventryForm: FormGroup;
  inventryList = new InventryVOList();
  disableBreakFast = false;
  disableLunch = false;
  disableDinner = false;
  selected = false;
  foodTypeBoolean = false;
  foodtypes = new FoodTypes().getFoodTypes();
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
    console.log(type);
    console.log(this.foodtypes[i]);
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
    if (i === 1) {
      this.selected = true;

    }
    if (i === 2) {
      this.foodTypeBoolean = true;
    }
  }

  removeFoodDetilas(index, i) {
    console.log(index);
    console.log(i);
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

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { FoodVO } from '../create-update-inventory/food-inventory-vo';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory-update-dialog-box',
  templateUrl: './inventory-update-dialog-box.component.html',
  styleUrls: ['./inventory-update-dialog-box.component.css']
})
export class InventoryUpdateDialogBoxComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<InventoryUpdateDialogBoxComponent>,
              @Inject(MAT_DIALOG_DATA) public data: FoodVO) { }
  foodForm: FormGroup;

  ngOnInit() {
    this.foodForm = this.fb.group({
      foodType: [{ value: '', disabled: true }],
      foodName: ['', [Validators.required]],
      foodPrice: ['', [Validators.required]],
      index: []
    });
    this.foodForm.setValue(this.data);
  }

  updateInventory(userForm: NgForm) {
    if (userForm.valid) {
      this.data = this.foodForm.getRawValue();
      this.dialogRef.close(this.data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, NgForm, Validators } from '@angular/forms';
import { InventoryVO, FoodVO } from './food-inventory-vo';
import { MatDialog } from '@angular/material/dialog';
import { InventoryUpdateDialogBoxComponent } from '../inventory-update-dialog-box/inventory-update-dialog-box.component';

@Component({
  selector: 'app-create-update-inventory',
  templateUrl: './create-update-inventory.component.html',
  styleUrls: ['./create-update-inventory.component.css']
})
export class CreateUpdateInventoryComponent implements OnInit {
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  foodForm: FormGroup;
  inventoryForm: FormGroup;
  inventory = new InventoryVO();
  foodItem = new FoodVO();
  enableSaveButton = false;
  ngOnInit() {
    this.foodForm = this.fb.group({
      foodType: ['', [Validators.required]],
      foodName: ['', [Validators.required]],
      foodPrice: ['', [Validators.required]]
    });

  }

  createInventry(userForm: NgForm) {
    if (userForm.valid) {
      if (this.foodForm.get('foodType').value === 'BREAKFAST') {
        this.foodItem = this.foodForm.value;
        this.inventory.breakfastList.push(this.foodItem);

      } else if (this.foodForm.get('foodType').value === 'LUNCH') {
        this.foodItem = this.foodForm.value;
        this.inventory.lunchList.push(this.foodItem);
      } else if (this.foodForm.get('foodType').value === 'DINNER') {
        this.foodItem = this.foodForm.value;
        this.inventory.dinnerList.push(this.foodItem);
      }
      this.foodForm.get('foodName').reset();
      this.foodForm.get('foodPrice').reset();
      this.enableSaveButton = true;
    }
}

  getObject(item: FoodVO, i) {
    item.index = i;
    const dialogRef = this.dialog.open(InventoryUpdateDialogBoxComponent, {
      width: '300px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.foodItem = result;
      if (this.foodItem.foodType === 'DINNER') {
        this.inventory.dinnerList.splice(i, 1, this.foodItem);
      } else if (this.foodItem.foodType === 'BREAKFAST') {
        this.inventory.breakfastList.splice(i, 1, this.foodItem);
      } else if (this.foodItem.foodType === 'LUNCH') {
        this.inventory.lunchList.splice(i, 1, this.foodItem);
      }
    });
  }

  removeObject(item: string, i) {
    if (item === 'BREAKFAST') {
      this.inventory.breakfastList.splice(i, 1);
    } else if (item === 'LUNCH') {
      this.inventory.lunchList.splice(i, 1);
    } else if (item === 'DINNER') {
      this.inventory.dinnerList.splice(i, 1);
    }
  }


  getBooleanForSave(): boolean {
    if (this.inventory.breakfastList.length === 0) {
      return true;
    }
    if (this.inventory.lunchList.length === 0) {
      return true;
    }
    if (this.inventory.dinnerList.length === 0) {
      return true;
    }
  }

}

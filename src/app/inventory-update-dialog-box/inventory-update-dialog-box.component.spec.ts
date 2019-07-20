import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUpdateDialogBoxComponent } from './inventory-update-dialog-box.component';

describe('InventoryUpdateDialogBoxComponent', () => {
  let component: InventoryUpdateDialogBoxComponent;
  let fixture: ComponentFixture<InventoryUpdateDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryUpdateDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryUpdateDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

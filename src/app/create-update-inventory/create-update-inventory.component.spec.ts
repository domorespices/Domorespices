import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateInventoryComponent } from './create-update-inventory.component';

describe('CreateUpdateInventoryComponent', () => {
  let component: CreateUpdateInventoryComponent;
  let fixture: ComponentFixture<CreateUpdateInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

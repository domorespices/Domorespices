import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInventryComponent } from './create-inventry.component';

describe('CreateInventryComponent', () => {
  let component: CreateInventryComponent;
  let fixture: ComponentFixture<CreateInventryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInventryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInventryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTwoComponent } from './signup-two.component';

describe('SignupTwoComponent', () => {
  let component: SignupTwoComponent;
  let fixture: ComponentFixture<SignupTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

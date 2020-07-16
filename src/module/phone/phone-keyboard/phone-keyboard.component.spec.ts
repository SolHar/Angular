import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneKeyboardComponent } from './phone-keyboard.component';

describe('PhoneKeyboardComponent', () => {
  let component: PhoneKeyboardComponent;
  let fixture: ComponentFixture<PhoneKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

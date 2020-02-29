import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfigPopupComponent } from './add-config-popup.component';

describe('AddConfigPopupComponent', () => {
  let component: AddConfigPopupComponent;
  let fixture: ComponentFixture<AddConfigPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConfigPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConfigPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

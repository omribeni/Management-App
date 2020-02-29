import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpgradePopupComponent } from './create-upgrade-popup.component';

describe('CreateUpgradePopupComponent', () => {
  let component: CreateUpgradePopupComponent;
  let fixture: ComponentFixture<CreateUpgradePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpgradePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpgradePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

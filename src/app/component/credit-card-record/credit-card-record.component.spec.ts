import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardRecordComponent } from './credit-card-record.component';

describe('CreditCardRecordComponent', () => {
  let component: CreditCardRecordComponent;
  let fixture: ComponentFixture<CreditCardRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

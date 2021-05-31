import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationHeadComponent } from './donation-head.component';

describe('DonationHeadComponent', () => {
  let component: DonationHeadComponent;
  let fixture: ComponentFixture<DonationHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

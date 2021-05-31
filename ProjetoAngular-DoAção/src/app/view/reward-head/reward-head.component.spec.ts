import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardHeadComponent } from './reward-head.component';

describe('RewardHeadComponent', () => {
  let component: RewardHeadComponent;
  let fixture: ComponentFixture<RewardHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

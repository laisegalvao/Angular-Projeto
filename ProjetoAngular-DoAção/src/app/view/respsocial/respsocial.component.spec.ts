import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespsocialComponent } from './respsocial.component';

describe('RespsocialComponent', () => {
  let component: RespsocialComponent;
  let fixture: ComponentFixture<RespsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespsocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

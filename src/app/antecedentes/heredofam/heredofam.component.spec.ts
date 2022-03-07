import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeredofamComponent } from './heredofam.component';

describe('HeredofamComponent', () => {
  let component: HeredofamComponent;
  let fixture: ComponentFixture<HeredofamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeredofamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeredofamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

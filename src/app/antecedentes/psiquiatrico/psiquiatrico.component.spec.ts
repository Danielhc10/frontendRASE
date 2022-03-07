import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiquiatricoComponent } from './psiquiatrico.component';

describe('PsiquiatricoComponent', () => {
  let component: PsiquiatricoComponent;
  let fixture: ComponentFixture<PsiquiatricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsiquiatricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsiquiatricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

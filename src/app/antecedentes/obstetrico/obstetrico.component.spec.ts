import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstetricoComponent } from './obstetrico.component';

describe('ObstetricoComponent', () => {
  let component: ObstetricoComponent;
  let fixture: ComponentFixture<ObstetricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObstetricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstetricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

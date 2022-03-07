import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergicoComponent } from './alergico.component';

describe('AlergicoComponent', () => {
  let component: AlergicoComponent;
  let fixture: ComponentFixture<AlergicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlergicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

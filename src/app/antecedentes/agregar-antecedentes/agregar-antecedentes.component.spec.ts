import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAntecedentesComponent } from './agregar-antecedentes.component';

describe('AgregarAntecedentesComponent', () => {
  let component: AgregarAntecedentesComponent;
  let fixture: ComponentFixture<AgregarAntecedentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAntecedentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAntecedentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

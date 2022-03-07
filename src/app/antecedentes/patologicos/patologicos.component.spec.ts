import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatologicosComponent } from './patologicos.component';

describe('PatologicosComponent', () => {
  let component: PatologicosComponent;
  let fixture: ComponentFixture<PatologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatologicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

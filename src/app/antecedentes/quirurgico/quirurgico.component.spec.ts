import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuirurgicoComponent } from './quirurgico.component';

describe('QuirurgicoComponent', () => {
  let component: QuirurgicoComponent;
  let fixture: ComponentFixture<QuirurgicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuirurgicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuirurgicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

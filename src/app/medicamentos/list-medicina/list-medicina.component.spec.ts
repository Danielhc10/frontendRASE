import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicinaComponent } from './list-medicina.component';

describe('ListMedicinaComponent', () => {
  let component: ListMedicinaComponent;
  let fixture: ComponentFixture<ListMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding } from './data-binding';

describe('DataBinding', () => {
  let component: DataBinding;
  let fixture: ComponentFixture<DataBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

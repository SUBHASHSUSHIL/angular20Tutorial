import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttDirective } from './att-directive';

describe('AttDirective', () => {
  let component: AttDirective;
  let fixture: ComponentFixture<AttDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

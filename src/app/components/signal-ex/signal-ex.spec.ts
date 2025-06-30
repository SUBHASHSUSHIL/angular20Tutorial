import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEx } from './signal-ex';

describe('SignalEx', () => {
  let component: SignalEx;
  let fixture: ComponentFixture<SignalEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

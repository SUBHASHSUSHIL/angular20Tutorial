import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowStatement } from './control-flow-statement';

describe('ControlFlowStatement', () => {
  let component: ControlFlowStatement;
  let fixture: ComponentFixture<ControlFlowStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowStatement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowStatement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

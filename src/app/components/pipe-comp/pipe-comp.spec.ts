import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComp } from './pipe-comp';

describe('PipeComp', () => {
  let component: PipeComp;
  let fixture: ComponentFixture<PipeComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApi } from './get-api';

describe('GetApi', () => {
  let component: GetApi;
  let fixture: ComponentFixture<GetApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

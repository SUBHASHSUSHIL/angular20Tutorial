import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApi } from './resource-api';

describe('ResourceApi', () => {
  let component: ResourceApi;
  let fixture: ComponentFixture<ResourceApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

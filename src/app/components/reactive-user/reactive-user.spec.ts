import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUser } from './reactive-user';

describe('ReactiveUser', () => {
  let component: ReactiveUser;
  let fixture: ComponentFixture<ReactiveUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

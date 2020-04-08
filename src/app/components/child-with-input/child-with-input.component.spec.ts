import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithInputComponent } from './child-with-input.component';

describe('ChildWithInputComponent', () => {
  let component: ChildWithInputComponent;
  let fixture: ComponentFixture<ChildWithInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

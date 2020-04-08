import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithOutputComponent } from './child-with-output.component';

describe('ChildWithOutputComponent', () => {
  let component: ChildWithOutputComponent;
  let fixture: ComponentFixture<ChildWithOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

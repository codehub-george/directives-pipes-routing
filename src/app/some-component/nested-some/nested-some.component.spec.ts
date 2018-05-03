import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSomeComponent } from './nested-some.component';

describe('NestedSomeComponent', () => {
  let component: NestedSomeComponent;
  let fixture: ComponentFixture<NestedSomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedSomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedSomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

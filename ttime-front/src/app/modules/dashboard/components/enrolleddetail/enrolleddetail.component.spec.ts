import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleddetailComponent } from './enrolleddetail.component';

describe('EnrolleddetailComponent', () => {
  let component: EnrolleddetailComponent;
  let fixture: ComponentFixture<EnrolleddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolleddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

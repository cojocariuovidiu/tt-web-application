import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturevideoComponent } from './lecturevideo.component';

describe('LecturevideoComponent', () => {
  let component: LecturevideoComponent;
  let fixture: ComponentFixture<LecturevideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturevideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

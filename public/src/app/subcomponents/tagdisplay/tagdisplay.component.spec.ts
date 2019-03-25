import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagdisplayComponent } from './tagdisplay.component';

describe('TagdisplayComponent', () => {
  let component: TagdisplayComponent;
  let fixture: ComponentFixture<TagdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

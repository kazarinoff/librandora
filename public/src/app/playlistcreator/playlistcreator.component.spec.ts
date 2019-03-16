import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistcreatorComponent } from './playlistcreator.component';

describe('PlaylistcreatorComponent', () => {
  let component: PlaylistcreatorComponent;
  let fixture: ComponentFixture<PlaylistcreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistcreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

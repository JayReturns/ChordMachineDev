import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSongsComponent } from './saved-songs.component';

describe('SavedSongsComponent', () => {
  let component: SavedSongsComponent;
  let fixture: ComponentFixture<SavedSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedSongsComponent]
    });
    fixture = TestBed.createComponent(SavedSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertModeComponent } from './expert-mode.component';

describe('ExpertModeComponent', () => {
  let component: ExpertModeComponent;
  let fixture: ComponentFixture<ExpertModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertModeComponent]
    });
    fixture = TestBed.createComponent(ExpertModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

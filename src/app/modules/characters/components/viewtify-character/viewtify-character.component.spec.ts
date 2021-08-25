import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtifyCharacterComponent } from './viewtify-character.component';

describe('AddEditCharacterComponent', () => {
  let component: ViewtifyCharacterComponent;
  let fixture: ComponentFixture<ViewtifyCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtifyCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtifyCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

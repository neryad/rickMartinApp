import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDeatailsComponent } from './character-deatails.component';

describe('CharacterDeatailsComponent', () => {
  let component: CharacterDeatailsComponent;
  let fixture: ComponentFixture<CharacterDeatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDeatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

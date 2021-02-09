import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfilsComponent } from './display-profils.component';

describe('DisplayProfilsComponent', () => {
  let component: DisplayProfilsComponent;
  let fixture: ComponentFixture<DisplayProfilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProfilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

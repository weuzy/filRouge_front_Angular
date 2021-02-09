import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsDeSortieComponent } from './profils-de-sortie.component';

describe('ProfilsDeSortieComponent', () => {
  let component: ProfilsDeSortieComponent;
  let fixture: ComponentFixture<ProfilsDeSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilsDeSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilsDeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilsDeSortieComponent } from './add-profils-de-sortie.component';

describe('AddProfilsDeSortieComponent', () => {
  let component: AddProfilsDeSortieComponent;
  let fixture: ComponentFixture<AddProfilsDeSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfilsDeSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilsDeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

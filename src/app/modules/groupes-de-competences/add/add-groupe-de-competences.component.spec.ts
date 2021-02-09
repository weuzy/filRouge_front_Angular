import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupeDeCompetencesComponent } from './add-groupe-de-competences.component';

describe('AddGroupeDeCompetencesComponent', () => {
  let component: AddGroupeDeCompetencesComponent;
  let fixture: ComponentFixture<AddGroupeDeCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupeDeCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupeDeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

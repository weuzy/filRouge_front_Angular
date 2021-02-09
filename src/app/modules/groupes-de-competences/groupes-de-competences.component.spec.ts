import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesDeCompetencesComponent } from './list/groupes-de-competences.component';

describe('GroupesDeCompetencesComponent', () => {
  let component: GroupesDeCompetencesComponent;
  let fixture: ComponentFixture<GroupesDeCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupesDeCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesDeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GroupeDeCompetencesService } from '../groupe-de-competences.service';

describe('GroupeDeCompetencesService', () => {
  let service: GroupeDeCompetencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeDeCompetencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

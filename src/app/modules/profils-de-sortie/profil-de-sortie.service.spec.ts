import { TestBed } from '@angular/core/testing';

import { ProfilDeSortieService } from './profil-de-sortie.service';

describe('ProfilDeSortieService', () => {
  let service: ProfilDeSortieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilDeSortieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

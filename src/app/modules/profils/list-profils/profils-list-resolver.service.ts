import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ResolvedProfilsList } from '../../../models/resolved-profilslist.model';
import { ProfilsService } from '../../profils/profils.service';

@Injectable({ providedIn: 'root' })
export class ProfilsListResolverService implements Resolve<ResolvedProfilsList> {
  constructor(private profilService: ProfilsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedProfilsList> {
    return this.profilService.getAllProfils()
        .pipe(
          map((profilList) => new ResolvedProfilsList(profilList)),
          catchError((err: any) => of(new ResolvedProfilsList(null, err)))
        );
  }
}

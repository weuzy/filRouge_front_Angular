import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UsersService} from '../users.service';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ResolvedUsersList} from '../../../models/resolved-userslist.models';


@Injectable({ providedIn: 'root'})
export class UsersListResolverService implements Resolve<ResolvedUsersList> {
  constructor(private userService: UsersService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedUsersList> {
    return this.userService.getAllUsers()
      .pipe(
        map((usersList) => new ResolvedUsersList(usersList)),
        catchError((error: any) => of(new ResolvedUsersList(null, error)))
      );
  }
}

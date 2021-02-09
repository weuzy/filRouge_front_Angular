import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Observable, throwError} from 'rxjs';
import {Profil} from '../../models/profil';
import { User } from '../../models/users';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {
  profils: Profil[];
  link = environment.urlAdress + 'admin/profils';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Erreur côté client:', errorResponse.message);
    } else {
      console.log('Erreur côté serveur:', errorResponse);
    }
    return throwError('Il y a un problème avec le serveur');
  }
  getAllProfils(): Observable<Profil[]> {
    return this.http.get<Profil[]>(this.link).pipe(catchError(this.handleError));
  }
  getProfil(id: number): Observable<Profil> {
    return this.http.get<Profil>(`${environment.urlAdress}admin/profils/${id}`)
            .pipe(catchError(this.handleError));
  }

  getProfilUsers(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${environment.urlAdress}admin/profils/${id}/users`);
  }
  addProfils(profil: Profil): Observable<Profil>  {
     return this.http.post<Profil>(this.link, profil, {
       headers: new HttpHeaders({
         'content-type': 'application/json'
       })
     }).pipe(catchError(this.handleError));
  }
  updateProfil(profil: Profil): Observable<void> {
      return this.http.put<void>(`${(this.link)}/${profil.id}`, profil, {
        headers: new HttpHeaders({
          'content-type': 'application/json'
        })
      }).pipe(catchError(this.handleError));
  }
  deleteProfil(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.urlAdress}admin/profils/${id}`)
            .pipe(catchError(this.handleError));
  }

}

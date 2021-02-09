import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {ProfilsDeSortie} from '../../models/profils-de-sortie';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Profil} from '../../models/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilDeSortieService {

  constructor(private http: HttpClient) { }
  link = environment.urlAdress + 'admin/profil_de_sorties';
  // tslint:disable-next-line:typedef
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Erreur côté client:', errorResponse.message);
    } else {
      console.log('Erreur côté serveur:', errorResponse);
    }
    return throwError('Il y a un problème avec le serveur');
  }
  getAllProfilsDeSortie(): Observable<ProfilsDeSortie[]> {
    return this.http.get<ProfilsDeSortie[]>(this.link)
      .pipe(catchError(this.handleError));
  }
  getProfilDeSortie(id: number): Observable<ProfilsDeSortie> {
    return this.http.get<ProfilsDeSortie>(`${this.link}/${id}`)
      .pipe(catchError(this.handleError));
  }
  deleteProfilDeSortie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.link}/${id}`)
      .pipe(catchError(this.handleError));
  }
  addProSortie(profilsSortie: ProfilsDeSortie): Observable<ProfilsDeSortie> {
    return this.http.post<ProfilsDeSortie>(this.link, profilsSortie, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
  updateProSortie(profilsSortie: ProfilsDeSortie): Observable<void> {
    return this.http.put<void>(`${this.link}/${profilsSortie.id}`, profilsSortie, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
}
